/** @typedef {import('../createStitches.js').Style} Style */

/** Account for RTL languages in all styles */
export function generateDirectionalCSS(/** @type {Style} */ css) {
	if (!css || css.length === 0) {
		return css
	}

	/** @type {Style} */
	const styles = {}

	for (const rule in css) {
		const name = rule.toLocaleLowerCase()
		const value = css[rule]
		const valueType = typeof value
		const hasLeft = name.includes('left')
		const hasRight = name.includes('right')
		const hasShortcut = Object.keys(utilMap).includes(name)
		const isShorthand = shorthandList[rule]
		const isDirectional = hasLeft || hasRight || hasShortcut || isShorthand
		const isPrimitive = ['number', 'string'].includes(valueType)

		if (isPrimitive && isDirectional) {
			let reverse = ''
			styles["[dir='ltr'] &"] = styles["[dir='ltr'] &"] ?? {}
			styles["[dir='rtl'] &"] = styles["[dir='rtl'] &"] ?? {}

			// Create reverse direction rule
			if (isShorthand) {
				const rtl = getShorthandRTLValue(rule, value)
				if (rtl === value) {
					styles[rule] = value
				} else {
					styles["[dir='ltr'] &"][rule] = value
					styles["[dir='rtl'] &"][rule] = rtl
				}
			} else {
				if (hasLeft) {
					reverse = rule.replaceAll('left', 'right').replaceAll('Left', 'Right')
				} else if (hasRight) {
					reverse = rule.replaceAll('right', 'left').replaceAll('Right', 'Left')
				} else if (hasShortcut) {
					reverse = utilMap[rule] ?? rule
				}
				styles["[dir='ltr'] &"][rule] = value
				styles["[dir='rtl'] &"][reverse] = value
			}
		} else if (valueType === 'object' && !Array.isArray(value)) {
			styles[rule] = generateDirectionalCSS(value)
		} else {
			styles[rule] = value
		}
	}

	return styles
}

// UTILS + SHORTHAND PROPERTIES ///////////////////////////////////////////////
/** Used for some tests */
export const directionalCommonProps = {
	marginRight: true,
	marginLeft: true,
	paddingRight: true,
	paddingLeft: true,
}

/** CSS props that can have 1 to 4 (orthogonal) directional values */
const quadOrthogonalShorthands = {
	padding: true,
	p: true,
	margin: true,
	m: true,
	borderStyle: true,
	borderWidth: true,
	borderColor: true,
}

/** CSS props that can have 1 to 4 (diagonal) directional values */
const quadDiagonalShorthands = {
	borderRadius: true,
}

/** CSS props that can have simple directional values */
const simpleDirectionalShorthands = {
	float: true,
	justifyContent: true,
	justifyItems: true,
	justifySelf: true,
}

/** CSS `offset` property */
const animationOffsetShorthands = {
	offset: true,
}

/** CSS `background` property */
const backgroundShorthand = {
	background: true,
	bg: true,
}

/** CSS props that can have a position offset value */
const positionOffsetShorthands = {
	backgroundPosition: true,
	offsetAnchor: true,
	offsetPosition: true,
}

const shorthandList = {
	...quadOrthogonalShorthands,
	...quadDiagonalShorthands,
	...simpleDirectionalShorthands,
	...animationOffsetShorthands,
	...backgroundShorthand,
	...positionOffsetShorthands
}

/** Maps NeutronUI utils (that are directional) to their RTL counterparts */
export const utilMap = {
	ml: 'mr',
	mr: 'ml',
	pl: 'pr',
	pr: 'pl',
	radiusLeft: 'radiusRight',
	radiusRight: 'radiusLeft',
	marginRight: 'marginLeft',
	marginLeft: 'marginRight',
	paddingRight: 'paddingLeft',
	paddingLeft: 'paddingRight',
}

const reverseDirection = {
	left: 'right',
	right: 'left',
	center: 'center',
	top: 'top',
	bottom: 'bottom',
	auto: 'auto',
	none: 'none',
}

const offsetPath = {
	ray: true,
	url: true,
	circle: true,
	ellipse: true,
	inset: true,
	polygon: true,
	path: true,
}

function getShorthandRTLValue(/** @type {string} */ rule, /** @type {string | number} */ value) {
	if (positionOffsetShorthands[rule]) {
		return getPositionOffsetRTLValue(value)
	}
	if (animationOffsetShorthands[rule]) {
		return getAnimationOffsetRTLValue(value)
	}
	if (quadOrthogonalShorthands[rule]) {
		return getQuadOrthogonalRTLValue(value)
	}
	if (quadDiagonalShorthands[rule]) {
		return getQuadDiagonalRTLValue(value)
	}
	if (simpleDirectionalShorthands[rule]) {
		return switchDirectionalRTLValue(value)
	}
	if (backgroundShorthand[rule]) {
		return getBackgroundRTLValue(value)
	}
	return value
}

// SHORTHAND VALUE HANDLERS ///////////////////////////////////////////////////
function getBackgroundRTLValue(/** @type {string} */ value) {
	const backgrounds = value.split(',').reduce((output, bg) => {
		const openP = bg.indexOf('(')
		const closeP = bg.indexOf(')')
		const url = openP > -1 ? bg.substring(openP, closeP) : ''
		const cleanBg = bg.replace(url, '‡‡‡')
		const hasLeft = cleanBg.includes('left')
		const hasRight = cleanBg.includes('right')
		const firstNumber = (cleanBg.match(/(\d*\.?\d+)\s?(px|em|rem|ex|ch|%|in|cn|mm|pt|pc|vw|vh|vmax|vmin+)/) || [])[0]
		let outStr = cleanBg

		if (hasLeft) {
			outStr = outStr.replace('left', 'right')
		} else if (hasRight) {
			outStr = outStr.replace('right', 'left')
		} else if (firstNumber !== undefined) {
			const posOfNumber = outStr.indexOf(firstNumber)
			const num = outStr.substring(posOfNumber)
			outStr = outStr.replace(num, `right ${num}`)
		}

		output.push(outStr.replace('‡‡‡', url))
		return output
	}, [])

	return backgrounds.join(', ')
}

function getQuadOrthogonalRTLValue(/** @type {string | number} */ value) {
	const values = String(value).split(' ')
	if (values.length < 4) {
		return value
	}
	const top = values[0]
	const right = values[1]
	const bottom = values[2]
	const left = values[3]
	return `${top} ${left} ${bottom} ${right}`
}

function getQuadDiagonalRTLValue(/** @type {string | number} */ value) {
	const segments = String(value).split('/')
	return segments.reduce((output, segment, index) => {
		const divider = index ? ' / ' : ''
		const values = String(segment.trim()).split(' ')
		if (values.length < 4) {
			return `${divider}${value}`
		}
		const topLeft = values[0]
		const topRight = values[1]
		const bottomRight = values[2]
		const bottomLeft = values[3]
		output += `${divider}${topRight} ${topLeft} ${bottomLeft} ${bottomRight}`
		return output
	}, '')
}

function switchDirectionalRTLValue(/** @type {keyof typeof reverseDirection | string} */ value) {
	return reverseDirection[value.toLowerCase()] || value
}

function getAnimationOffsetRTLValue(/** @type {string | number} */ value) {
	const values = String(value).trim().split('/')
	const first = values[0].trim()
	const second = values[1].trim()
	const third = values[2].trim()
	const fourth = values[3].trim()
	const fifth = values[4].trim()
	
	// Single section
	if (values.length === 1) {
		return getPositionOffsetRTLValue(first)
	}

	// Length is at least 2
	const out = [getPositionOffsetRTLValue(first), second]

	// Has path (i.e., anchor is 4th, if present)
	if (second && second.includes('(') && offsetPath[second.substring(0, second.indexOf('('))]) {
		if (third) {
			out.push(third)
		}
		if (fourth) {
			out.push(getPositionOffsetRTLValue(fourth))
		}
		if (fifth) {
			out.push(fifth)
		}
	} else {
		// anchor is 3rd, if present
		if (third) {
			out.push(getPositionOffsetRTLValue(third))
		}
		if (fourth) {
			out.push(fourth)
		}
	}

	return out.join(' / ')
}

function getPositionOffsetRTLValue(/** @type {string | number} */ value) {
	if (['left', 'right'].includes(value)) {
		return switchDirectionalRTLValue(value)
	}
	const values = String(value).trim().split(' ')
	// Single number
	if (values.length === 1 && !isNaN(parseInt(value))) {
		return `right ${value} center`
	}
	// 2 values
	if (values.length === 2) {
		const isFirstNumeric = !isNaN(parseInt(values[0]))
		// First is a number
		if (isFirstNumeric) {
			return `right ${values[0]} ${values[1]}`
		}
		// First is a word
		return `${reverseDirection[values[0]]} ${values[1]}`
	}
	// 3 values
	if (values.length === 3) {
		const isSecondNumeric = !isNaN(parseInt(values[1]))
		if (isSecondNumeric) {
			// NOTE: Only left/right directions will get reversed
			return `${reverseDirection[values[0]]} ${values[1]} ${reverseDirection[values[2]]}`
		}
		// NOTE: Only left/right directions will get reversed
		return `${reverseDirection[values[0]]} ${reverseDirection[values[1]]} ${values[2]}`
	}
	// 4 values
	if (values.length === 4) {
		// NOTE: Only left/right directions will get reversed
		return `${reverseDirection[values[0]]} ${values[1]} ${reverseDirection[values[2]]} ${values[3]}`
	}
	// If not patterns match, return the original
	return value
}
