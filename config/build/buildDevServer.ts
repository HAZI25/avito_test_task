import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';
import path from 'path';

function buildDevServer(options: BuildOptions): DevServerConfiguration {
	const { port } = options;
	return {
		port,
		open: true,
		historyApiFallback: true,
		hot: true,
		static: {
			directory: path.resolve(__dirname, './dist'),
		},
	};
}

export default buildDevServer;
