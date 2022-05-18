import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		defaults: {
			fontFamily: string;
			fontSize: string;
			containerMaxWidth: string;
			headerHeight: string;
		},
		colors: {
			body: string;
			container: string;
			text: string;
			textLight: string;
			gray: string;
			blue: string;
		};
	}
}
