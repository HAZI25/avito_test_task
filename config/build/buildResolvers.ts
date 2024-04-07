import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';

function buildResolvers(options: BuildOptions): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	};
}
export default buildResolvers;
