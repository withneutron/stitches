import { createStitches } from '../src/index.js'

describe('Named Components', () => {
	test('Renders an empty component', () => {
		const { styled, getCssText } = createStitches()
		const Generic = styled().named("Generic")
		expect(Generic.render().props).toEqual({ className: 'c-Generic-PJLV' })
		expect(getCssText()).toBe('')
	})

	test('Renders a component with all compositions', () => {
		const { styled, getCssText } = createStitches()
		const Red = styled({ color: 'red' }).named("Red")
		const Size14 = styled({ fontSize: '14px' }).named("Size14")
		const Bold = styled({ fontWeight: 'bold' }).named("Bold")
		const Title = styled(Red, Size14, Bold, { fontFamily: 'monospace' }).named("Title")
		expect(Title.render().props.className).toBe('c-gmqXFB c-hzkWus c-cQFdVt c-Title-kngyIZ c-Title-PJLV')
		expect(getCssText()).toBe('--sxs{--sxs:2 c-gmqXFB c-hzkWus c-cQFdVt c-Title-kngyIZ c-Title-PJLV}@media{.c-gmqXFB{color:red}.c-hzkWus{font-size:14px}.c-cQFdVt{font-weight:bold}.c-Title-kngyIZ{font-family:monospace}}')
	})
})
