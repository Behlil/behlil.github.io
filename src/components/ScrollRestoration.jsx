import { useEffect } from 'react';

const ScrollRestoration = () => {
    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('scrollPosition', JSON.stringify(window.scrollY));
        };

        const handleLoad = () => {
            const scrollPosition = JSON.parse(localStorage.getItem('scrollPosition'));
            if (scrollPosition !== null) {
                window.scrollTo(0, scrollPosition);
                localStorage.removeItem('scrollPosition');
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return null;
};

export default ScrollRestoration;
