import React, { useRef, useEffect } from 'react';
import { MarketingMount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        console.log('Container');
        MarketingMount(ref.current);
    }, []);

    return <div ref={ref} />;
}

