import { DefaultTheme } from 'styled-components';

export const createTheme = (): DefaultTheme => {
	return {
		defaults: {
			fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
			fontSize: '14px',
			containerMaxWidth: '937px',
			headerHeight: '80px'
		},
		colors: {
			body: '#FAFAFA',
			container: '#FFFFFF',
			text: '#262626',
			textLight: '#8e8e8e',
			gray: '#DBDBDB',
			blue: '#0095F6'
		}
	};
}
