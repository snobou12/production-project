/** @format */

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	//svg
	const svgLoader = {
		test: /\.svg$/i,
		use: ["@svgr/webpack"],
	};
	//png jpg jpeg gif woff2 woff
	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};
	// Если использовали бы js, то пришлось добавить babel-loader, специальный транспилятор для того, чтобы js работал во всех старых браузерах
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};
	//css,scss,scss modules
	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS + module.[s]css
			{
				loader: "css-loader",
				options: {
					modules: {
						//чтобы работало и для модулей и для просто style.scss
						auto: (resPath: string) => Boolean(resPath.includes(".module.")),

						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:8]",
					},
				},
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	};

	// для использования других фич, babel - транспилятор для старых браузеров, из ecma2015 в <,
	// ~~~кстати если бы не юзали typescirpt, то он бы нужен был в любой случае + babel-react presets нужен был бы~~~
	// Кидать строго до typescriptLoader
	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
				plugins: [
					[
						// Экстрактор нужен, для того что бы не писать ключи руками. Он сам извлекает,
						//  а потом переводчик например проходится по этим ключам и делает переводы.
						// Тем самым разработчик вообще никак не взаимодействует с переводами и ключами
						// но сырая штука!!
						"i18next-extract",
						{
							locales: ["ru", "en"],
							// Не только вытаскивает ключи из кода, но и автоматически подставляет ключ,

							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	};
	return [babelLoader, typescriptLoader, styleLoader, svgLoader, fileLoader];
}
