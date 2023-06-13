'use client'

import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from "next-auth/react"
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation';
import { useStore } from './store';
import Cookies from 'js-cookie';

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

    const setUsernameNull = useStore((state) => state.setUsernameNull)
    const setIDNull = useStore((state) => state.setIDNull)
    const setRoleNull = useStore((state) => state.setRoleNull)

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
                await setUsernameNull()
                await setIDNull()
                await setRoleNull()
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
                await setUsernameNull()
                await setIDNull()
                await setRoleNull()
                router.push('/login')
                handleCloseUserMenu()
            }
        }
    ]

    const moderatorMenuOptions = [
        {
            title: 'Profile', clickHandler: async () => {
                router.push('/profile')
                handleCloseNavMenu()
            }
        },
        {
            title: 'Interface', clickHandler: () => {
                router.push('/interface')
                handleCloseNavMenu()
            }
        },
        {
            title: 'Sign Out', clickHandler: async () => {
                Cookies.remove('token');
                await setUsernameNull()
                await setIDNull()
                await setRoleNull()
                router.push('/login')
                handleCloseUserMenu()
            }
        }
    ]

    const administratorMenuOptions = [
        {
            title: 'Profile', clickHandler: () => {
                router.push('/profile')
                handleCloseNavMenu()
            }
        },
        {
            title: 'Interface', clickHandler: () => {
                router.push('/interface')
                handleCloseNavMenu()
            }
        },
        {
            title: 'Admin Panel', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        },
        {
            title: 'Sign Out', clickHandler: async () => {
                Cookies.remove('token');
                await setUsernameNull()
                await setIDNull()
                await setRoleNull()
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
            <IconButton
                onClick={handleLoginClick}
                aria-label="add an alarm" >
                <LoginIcon />
            </IconButton > :
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={`${username}`} src="/static/images/avatar/2.jpg" /> {/*  TODO: Avatar needs a dynamic link */}
                    </IconButton>
                </Tooltip>
                <Menu
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
                    {checkForUserRole()}

                </Menu>
            </Box>
    )


}

