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

export default function NavigationMenu({ user }) {
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

    const userMenuOptions = [
        {
            title: 'Profile', clickHandler: () => {
                router.push('/profile')
                handleCloseNavMenu()
            }
        },
        {
            title: 'Sign Out', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        }
    ]
    const proMenuOptions = [
        {
            title: 'Profile', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        },
        {
            title: 'Sign Out', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        }
    ]

    const moderatorMenuOptions = [
        {
            title: 'Profile', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        },
        {
            title: 'Interface', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        },
        {
            title: 'Sign Out', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        }
    ]

    const administratorMenuOptions = [
        {
            title: 'Profile', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        },
        {
            title: 'Interface', clickHandler: () => {
                // ...
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
            title: 'Sign Out', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        }
    ]


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);



    const checkForUserRole = () => {
        if (user.role === 'user') {
            return (
                userMenuOptions.map((menuOption) => (
                    <MenuItem key={menuOption.title} onClick={menuOption.clickHandler}>
                        <Typography textAlign="center">{menuOption.title}</Typography>
                    </MenuItem>
                ))
            )
        } else if (user.role === 'pro') {
            return (
                proMenuOptions.map((menuOption) => (
                    <MenuItem key={menuOption.title} onClick={menuOption.clickHandler}>
                        <Typography textAlign="center">{menuOption.title}</Typography>
                    </MenuItem>
                ))
            )
        } else if (user.role === 'moderator') {
            return (
                moderatorMenuOptions.map((menuOption) => (
                    <MenuItem key={menuOption.title} onClick={menuOption.clickHandler}>
                        <Typography textAlign="center">{menuOption.title}</Typography>
                    </MenuItem>
                ))
            )
        } else if (user.role === 'administrator') {
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
        user.id === null ?
            <IconButton
                onClick={handleLoginClick}
                aria-label="add an alarm" >
                <LoginIcon />
            </IconButton > :
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={`${user.username}`} src="/static/images/avatar/2.jpg" /> {/*  TODO: Avatar needs a dynamic link */}
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

