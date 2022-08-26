import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import classNames from 'classnames';

export const Container = ({ children, className }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    return (
        <>
            {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <div className={classNames("object-cover object-[83%] w-full h-full bg-cover bg-center bg-jacarta-800", className)}>{children}</div> : <div className={classNames("w-full h-full object-cover object-[83%] bg-cover bg-center bg-[url('/assets/images/gradient_light.jpg')]", className)}>{children}</div>}
        </>

    );
};