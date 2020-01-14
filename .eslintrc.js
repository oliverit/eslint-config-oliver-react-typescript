const eslintrc = require('.')

module.exports = {
	...eslintrc,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json']
	},
	rules: {
		'@typescript-eslint/no-var-requires': 'off'
	}
}
