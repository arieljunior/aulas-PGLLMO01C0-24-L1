import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState
} from 'react';

interface ThemeStyle {
    background: string;
    text: string;
}

type Themes = 'light' | 'dark'

interface ThemeContextStyle {
    theme: Themes,
    themeStyle: ThemeStyle,
    toggleTheme: () => void
}

const defaultContextValue: ThemeContextStyle = {
    theme: 'light',
    themeStyle: {
        background: '#FFF',
        text: '#000'
    },
    toggleTheme: () => { },
}

const ThemeContext = createContext<ThemeContextStyle>(defaultContextValue);

export function ThemeProvider({ children }: {
    children: React.JSX.Element
}) {

    const [theme, setTheme] = useState<Themes>('light');

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }, [])

    const themeStyle: ThemeStyle = theme === 'light' ? {
        background: '#FFF', text: '#000'
    } : {
        background: '#333', text: '#FFF'
    }

    const contextValue: ThemeContextStyle = useMemo(()=>({
        theme,
        themeStyle,
        toggleTheme
    }),[theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=> useContext(ThemeContext);