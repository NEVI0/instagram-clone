import { DefaultTheme } from 'styled-components';

export const createTheme = (): DefaultTheme => {
	return {
		defaults: {
			headerHeight: '60px',
			containerMaxWidth: '937px'
		},
		font: {
			family: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
			normalSize: '1rem',
			smallSize: '.875rem',
			smallerSize: '75rem'
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
