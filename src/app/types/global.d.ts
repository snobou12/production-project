// чтобы не ругался на импорт module.scss
declare module '*.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.woff';
declare module '*.woff2';

declare module '*.svg' {
	import React from 'react';

	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

// Чтобы можно было через definePlugin в webpack юзать переменные в приложении
declare const __IS_DEV__: boolean;
declare const __API__: string;
