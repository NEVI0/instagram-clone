import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			terciary: string;
			body: string;
			container: string;
			text: string;
			textLight: string;
			gray: string;
			blue: string;
		};
	}
}
