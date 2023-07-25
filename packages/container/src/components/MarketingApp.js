import React, { useRef, useEffect } from 'react';
import { MarketingMount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        console.log('Hello from Marketing App');
        MarketingMount(ref.current);
    }, []);

    return <div ref={ref} />;
}

