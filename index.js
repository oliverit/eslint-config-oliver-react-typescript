const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
	extends: [
		'eslint-config-oliver-base-typescript',
		'plugin:react/recommended'
	],
	plugins: [
		'react',
		'react-hooks'
	],
	env: {
		browser: true,
		serviceworker: true,
		worker: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'import/no-extraneous-dependencies': 'off',
		'no-console': 'off',
		'no-restricted-globals': ['error', 'isFinite', 'isNaN']
			.concat(confusingBrowserGlobals)
			.filter(name => name !== 'self'), // The 'self' global is used by workers, so we remove it from the default restricted globals list
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/prop-types': [2, { skipUndeclared: true }]
	}
}
