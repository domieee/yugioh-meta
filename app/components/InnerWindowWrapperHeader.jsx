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
    item
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




    return (
        <Box sx={{
            display: 'flex',
            height: '50px',
            alignItems: 'start',

            justifyContent: {
                xs: 'center',
                sm: 'center',
                md: 'start',
                lg: 'space-between'
            }
        }}>
            <Typography
                variant="h5"
                sx={{
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'center',
                        lg: 'center'
                    }
                }}>
                {pagetitle}
            </Typography>
            {itemState === undefined ?
                <Skeleton variant="circular" width={35} height={35} /> :
                itemState}
        </Box>
    )
}
