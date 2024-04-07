import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/config';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
	const { mode } = options;

	const isDev = mode === 'development';

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	};

	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					getCustomTransformers: () => ({
						before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
					}),
					transpileOnly: isDev,
				},
			},
		],
		exclude: /node_modules/,
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.module\./,
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};

	return [typeScriptLoader, cssLoader, assetLoader, svgLoader];
}

export default buildLoaders;
