'use client'

import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from "next-auth/react"
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation';
import { useStore } from './store';
import Cookies from 'js-cookie';
import { updateProgress, useInterfaceStore } from '../interfaceStore';

export default function NavigationMenu({ role, username }) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const router = useRouter()

    const handleLoginClick = () => {
        router.push('/login')
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const setUserName = useStore((state) => state.setUserName)
    const setUserID = useStore((state) => state.setUserID)
    const setUserRole = useStore((state) => state.setUserRole)
    let updateSuccessVisibility = useInterfaceStore((state) => state.updateSuccessVisibility)
    const updateSuccess = useInterfaceStore((state) => state.updateSuccess);

    const userMenuOptions = [
        {
            title: 'Profile', clickHandler: () => {
                router.push('/profile')
                handleCloseNavMenu()
            }
        },
        {
            title: 'Sign Out', clickHandler: async () => {
                Cookies.remove('token');
                updateSuccessVisibility(true)
                updateSuccess('Successfully logged out. We look forward to your return.')
                await setUserName(false)
                await setUserID(false)
                await setUserRole(false)
                router.push('/login')
                handleCloseUserMenu()
            }
        }
    ]
    const proMenuOptions = [
        {
            title: 'Profile', clickHandler: () => {
                router.push('/profile')
                handleCloseUserMenu()
            }
        },
        {
            title: 'Sign Out', clickHandler: async () => {
                Cookies.remove('token');
                updateSuccessVisibility(true)
                updateSuccess('Successfully logged out. We look forward to your return.')
                await setUserName(false)
                await setUserID(false)
                await setUserRole(false)
                router.push('/login')
                handleCloseUserMenu()
            }
        }
    ]

    const moderatorMenuOptions = [
        {
            title: 'Profile', clickHandler: async () => {
                router.push('/profile')
                handleCloseUserMenu()
            }
        },
        {
            title: 'Interface', clickHandler: () => {
                updateProgress(25)
                router.push('/interface')
                handleCloseUserMenu()
            }
        },
        {
            title: 'Sign Out', clickHandler: async () => {
                Cookies.remove('token');
                updateSuccessVisibility(true)
                updateSuccess('Successfully logged out. We look forward to your return.')
                await setUserName(false)
                await setUserID(false)
                await setUserRole(false)
                router.push('/login')
                handleCloseUserMenu()
            }
        }
    ]

    const administratorMenuOptions = [
        {
            title: 'Profile', clickHandler: () => {
                router.push('/profile')
                handleCloseUserMenu()
            }
        },
        {
            title: 'Interface', clickHandler: () => {
                updateProgress(25)
                router.push('/interface')
                handleCloseUserMenu()
            }
        },
        {
            title: 'Sign Out', clickHandler: async () => {
                Cookies.remove('token');
                updateSuccessVisibility(true)
                updateSuccess('Successfully logged out. We look forward to your return.')
                await setUserName(false)
                await setUserID(false)
                await setUserRole(false)
                router.push('/login')
                handleCloseUserMenu()
            }
        }
    ]

    const checkForUserRole = () => {
        if (role === 'user') {
            return (
                userMenuOptions.map((menuOption) => (
                    <MenuItem key={menuOption.title} onClick={menuOption.clickHandler}>
                        <Typography textAlign="center">{menuOption.title}</Typography>
                    </MenuItem>
                ))
            )
        } else if (role === 'pro') {
            return (
                proMenuOptions.map((menuOption) => (
                    <MenuItem key={menuOption.title} onClick={menuOption.clickHandler}>
                        <Typography textAlign="center">{menuOption.title}</Typography>
                    </MenuItem>
                ))
            )
        } else if (role === 'moderator') {
            return (
                moderatorMenuOptions.map((menuOption) => (
                    <MenuItem key={menuOption.title} onClick={menuOption.clickHandler}>
                        <Typography textAlign="center">{menuOption.title}</Typography>
                    </MenuItem>
                ))
            )
        } else if (role === 'administrator') {
            return (
                administratorMenuOptions.map((menuOption) => (
                    <MenuItem key={menuOption.title} onClick={menuOption.clickHandler}>
                        <Typography textAlign="center">{menuOption.title}</Typography>
                    </MenuItem>
                ))
            )
        }
    }

    return (
        role === false ?
            <Tooltip
                title='Login'
                placement='bottom'>
                <IconButton
                    onClick={handleLoginClick}
                    aria-label="Login" >
                    <LoginIcon />
                </IconButton >
            </Tooltip> :
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open menu">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar sx={{}} alt={`${username}`} src="/static/images/avatar/2.jpg" /> {/*  TODO: Avatar needs a dynamic link */}
                    </IconButton>
                </Tooltip>

                <Menu
                    disableGutters
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <Paper
                        elevation={1}
                        sx={{
                            bgColor: '#191919'
                        }}>
                        <MenuItem
                            sx={{ textAlign: 'end' }}
                            focusVisible={false}>
                            <Typography variant='caption'>{username}</Typography>
                        </MenuItem>

                        {checkForUserRole()}
                    </Paper>
                </Menu>
            </Box >
    )


}

