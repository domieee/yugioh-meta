import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Skeleton
} from '@mui/material'

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link'

import { useStore } from './store'

import { VscHome } from "react-icons/vsc";
import { useInterfaceStore } from '../interfaceStore';


export default function InnerWindowWrapperHeader({
    currentRoute,
    pagetitle,
    menuOptions,
    item,
    disabledIcon,
}) {

    const [itemState, setItemState] = useState(undefined)


    let role = useStore((state) => state.role)

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    useEffect(() => {
        if (currentRoute === '/tournament/id' && role === 'moderator' || role === 'administrator') {
            setItemState(menuOptions)
        } else if (currentRoute === '/statistics') {
            setItemState(menuOptions)
        } else if (currentRoute === '/interface') {
            setItemState(menuOptions)
        } else {
            setItemState(null)
        }
    }, [])


    const iconProvider = () => {
        if (currentRoute === '/tournament') {
            return null
        }
    }

    let breadcrumbs

    switch (currentRoute) {
        case '/tournaments':
            breadcrumbs = [
                <Link
                    key="1"
                    style={{
                        height: '50px'
                    }}
                    underline="hover"
                    color="inherit"
                    href="/">
                    Home
                </Link>,
                <Typography
                    key="2"
                    variant='body2'
                    color="text.secondary">
                    Tournaments
                </Typography>
            ]
            break;
        case '/tournaments/id':
            breadcrumbs = [
                <Link
                    key="1"
                    style={{
                        height: '50px'
                    }}
                    underline="hover"
                    color="inherit"
                    href="/">
                    Home
                </Link>,
                <Link
                    key="2"
                    style={{
                        height: '50px'
                    }}
                    underline="hover"
                    color="inherit"
                    href="/tournaments">
                    Tournaments
                </Link>,
                <Typography
                    key="3"
                    variant='body2'
                    color="text.secondary">
                    Overview
                </Typography>
            ]
            break;
        case '/interface':
            breadcrumbs = [
                <Link
                    key="1"
                    style={{
                        height: '50px'
                    }}
                    underline="hover"
                    color="inherit"
                    href="/">
                    Home
                </Link>,
                <Typography
                    key="2"
                    variant='body2'
                    color="text.secondary">
                    Interface
                </Typography>
            ]
            break;
        case '/statistics':
            breadcrumbs = [
                <Link
                    key="1"
                    style={{
                        height: '50px'
                    }}
                    underline="hover"
                    color="inherit"
                    href="/">
                    Home
                </Link>,
                <Typography
                    key="2"
                    variant='body2'
                    color="text.secondary">
                    Statistics
                </Typography>
            ]
            break;
        default:
            break;
    }






    return (
        disabledIcon ?
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                borderBlockEnd: '1px solid #3a3a3a',
                justifyContent: {
                    xs: 'start',
                    sm: 'center',
                    md: 'space-between',
                    lg: 'space-between'
                }
            }}>
                <Typography
                    variant="h5"
                    sx={{
                        justifyContent: {
                            xs: 'start',
                            sm: 'center',
                            md: 'start',
                            lg: 'space-between'
                        }
                    }}>
                    {pagetitle}
                </Typography>
            </Box> :
            <Box sx={{
                marginBlock: '10px 5px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                borderBlockEnd: '1px solid #3a3a3a',
                justifyContent: {
                    xs: 'space-between',
                    sm: 'space-between',
                    md: 'space-between',
                    lg: 'space-between'
                }
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs sx={{ display: 'flex', width: '100%' }} seperator='/' aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>

                    {iconProvider()}

                    {itemState === undefined ?
                        null :
                        itemState}
                </Box>

            </Box>
    )
}
