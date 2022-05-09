import React, { useState, useContext, createContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { createTheme } from '../styles/theme';

export interface AppContextProps {
	theme: DefaultTheme
};

const AppContext: React.Context<AppContextProps> = createContext({} as AppContextProps);

export const AppProvider: React.FC<{ children: any; }> = ({ children }) => {

	const [ theme, setTheme ] = useState<DefaultTheme>(createTheme());

	return (
		<AppContext.Provider value={{ theme }}>
			<ThemeProvider theme={ theme }>
				{ children }
			</ThemeProvider>
		</AppContext.Provider>
	);

}

const useAppContext = () => useContext(AppContext);
export default useAppContext;
