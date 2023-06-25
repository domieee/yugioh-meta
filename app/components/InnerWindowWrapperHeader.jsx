import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Skeleton
} from '@mui/material'

import { useStore } from './store'


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
                alignItems: 'start',
                width: '100%',
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
                display: 'flex',
                alignItems: 'start',
                width: '100%',
                justifyContent: {
                    xs: 'space-between',
                    sm: 'space-between',
                    md: 'space-between',
                    lg: 'space-between'
                }
            }}>
                <Typography
                    variant="h5">
                    {pagetitle}
                </Typography>
                {iconProvider()}
                {itemState === undefined ?
                    null :
                    itemState}
            </Box>
    )
}
