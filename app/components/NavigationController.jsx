'use client'

import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function NavigationController() {
    const router = useRouter();

    console.log(router)

    // Function to handle page switch
    const handlePageSwitch = () => {
        console.log('Page switched');
        // Perform any necessary actions when the page has switched
    };

    useEffect(() => {
        router.events.on('routeChangeComplete', handlePageSwitch);

        return () => {
            router.events.off('routeChangeComplete', handlePageSwitch);
        };
    }, []);

    const checkPageSwitch = () => {
        // Perform any necessary checks to determine if the page has switched
        // You can use router.pathname or router.route to get the current path/route
        // For example:
        if (router.pathname === '/statistics') {
            console.log(statistics)
        }
    };

    useEffect(() => {
        checkPageSwitch();
    }, [router.pathname]);

    return null;
}