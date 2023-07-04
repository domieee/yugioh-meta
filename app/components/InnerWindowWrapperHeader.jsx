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


export default function InnerWindowWrapperHeader({
    currentRoute,
    pagetitle,
    menuOptions,
    item,
    disabledIcon,
}) {

    const [itemState, setItemState] = useState(undefined)

    let role = useStore((state) => state.role)

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
                    <Breadcrumbs

                        aria-label="breadcrumb">

                        <Link
                            style={{
                                height: '50px'
                            }}
                            underline="hover"
                            color="inherit"
                            href="/">
                            <Typography
                                variant='body2'
                                color="text.primary">
                                Home
                            </Typography>
                        </Link>

                        <Link
                            style={{
                                height: '50px'
                            }}
                            underline="hover"
                            color="inherit"
                            href="/tournaments">
                            <Typography
                                variant='body2'
                                color="text.primary">
                                Tournaments
                            </Typography>
                        </Link>
                        <Typography
                            variant='body2'
                            color="text.secondary">
                            Overview
                        </Typography>
                    </Breadcrumbs>
                    {iconProvider()}
                    {itemState === undefined ?
                        null :
                        itemState}
                </Box>

            </Box>
    )
}
