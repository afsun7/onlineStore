module.exports = {
	endOfLine: 'auto',
	arrowParens: 'always',
	bracketSpacing: true,
	bracketSameLine: false,
	printWidth: 120,
	proseWrap: 'preserve',
	requirePragma: false,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	singleAttributePerLine: true,
	plugins: ['prettier-plugin-organize-imports', require.resolve('prettier-plugin-tailwindcss')]
}
