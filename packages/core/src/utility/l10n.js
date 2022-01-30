/** @typedef {import('../createStitches.js').Style} Style */

export const directionalCommonProps = [
	'marginRight',
	'marginLeft',
	'paddingRight',
	'paddingLeft',
]

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
		const hasLeft = name.includes("left")
		const hasRight = name.includes("right")
		const hasShortcut = Object.keys(utilMap).includes(name)
		const isDirectional = hasLeft || hasRight || hasShortcut
		const isPrimitive = ["number", "string"].includes(valueType)

		if (isPrimitive && isDirectional) {
			let reverse = ""
			styles["[dir='ltr'] &"] = styles["[dir='ltr'] &"] ?? {}
			styles["[dir='rtl'] &"] = styles["[dir='rtl'] &"] ?? {}

			// Create reverse direction rule
			if (hasLeft) {
				reverse = rule.replaceAll("left", "right").replaceAll("Left", "Right")
			} else if (hasRight) {
				reverse = rule.replaceAll("right", "left").replaceAll("Right", "Left")
			} else if (hasShortcut) {
				reverse = utilMap[rule] ?? rule
			}
			styles["[dir='ltr'] &"][rule] = value
			styles["[dir='rtl'] &"][reverse] = value
		} else if (valueType === "object" && !Array.isArray(value)) {
			styles[rule] = generateDirectionalCSS(value)
		} else {
			styles[rule] = value
		}
	}

	return styles
}
