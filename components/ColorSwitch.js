import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const LogoSwitch = ({ switchColor }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    return (
        <>
            {switchColor = mounted && (theme === 'dark' || resolvedTheme === 'dark')}
        </>

    );
};