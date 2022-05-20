import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		defaults: {
			headerHeight: string;
			containerMaxWidth: string;
		},
		font: {
			family: string;
			normalSize: string;
			smallSize: string;
			smallerSize: string;
		};
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
