/** @format */

import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
	return {
		extensions: [".tsx", ".ts", ".js"],
		//alias чтобы можно было использовать абсолютные пути(так же нужно в ts config написать пару строчек )
		preferAbsolute: true,
		modules: [options.paths.src, "node_modules"],
		// без @, можно просто kek/lol/arbidol
		mainFiles: ["index"],
		alias: {},
	};
}
