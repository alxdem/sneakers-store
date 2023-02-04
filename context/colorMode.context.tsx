import { PaletteMode } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, PropsWithChildren, useMemo, useState } from 'react';
import { appPalette } from '../helpers/appPalette';

const getDesignTokens: any = (mode: PaletteMode) => ({
    // TODO: getDesignTokens заменить any на правильный тип. Нужно расширить PaletteMode
    palette: {
        mode,
        ...(mode === 'light'
            ? appPalette.light
            : appPalette.dark),
    }
});

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const ColorModeContextProvider = ({ children }: PropsWithChildren) => {
    const [mode, setMode] = useState<PaletteMode>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    const theme = useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};