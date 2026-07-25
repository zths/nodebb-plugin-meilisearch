import serverConfig from 'eslint-config-nodebb';

export default [
	...serverConfig,
	{
		ignores: ['**/node_modules/**', '.devcontainer/**', 'eslint.config.mjs', 'static/**'],
	},
];