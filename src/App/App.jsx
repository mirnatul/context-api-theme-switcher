import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import ThemeButton from '../components/ThemeButton';
import { ThemeProvider } from '../context/theme';

const App = () => {

    const [themeMode, setThemeMode] = useState('light');

    // this is workable
    const lightTheme = () => {
        setThemeMode("light");
    }
    const darkTheme = () => {
        setThemeMode("dark");
    }

    // changes in the theme
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark");
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    return (

        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme button */}
                        <ThemeButton></ThemeButton>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        {/* card */}
                        <Card></Card>
                    </div>
                </div>
            </div>
        </ThemeProvider>

    );
};

export default App;