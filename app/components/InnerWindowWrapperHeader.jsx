import React from 'react'
import {
    Box,
    Typography
} from '@mui/material'

import { useStore } from './store'


export default function InnerWindowWrapperHeader({
    currentRoute,
    pagetitle,
    menuOptions,
    item
}) {

    let role = useStore((state) => state.role)

    const setMenuOptions = () => {
        if (currentRoute === '/tournament/id' && role === 'moderator' || role === 'administrator') {
            return menuOptions
        } else if (currentRoute === '/statistics') {
            return menuOptions
        } else if (currentRoute === '/interface') {
            return menuOptions
        } else {
            return null
        }
    }

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
            {menuOptions ? setMenuOptions() : null}
        </Box>
    )
}
