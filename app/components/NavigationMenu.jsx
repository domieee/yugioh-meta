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

export default function NavigationMenu({ session }) {
    const router = useRouter()

    const handleLoginClick = () => {
        router.push('/login')
    }


    const settings = [
        {
            title: 'Profile', clickHandler: () => {
                // ...
                handleCloseNavMenu()
            }
        }, {
            title: 'Dashboard', clickHandler: () => {
                //...
                handleCloseNavMenu()
            }
        }, {
            title: 'Sign out', clickHandler: async () => {
                signOut() // ...redirect to login or homepage
                handleCloseNavMenu()
            }
        }
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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


    return (
        session === null ?
            <IconButton
                onClick={handleLoginClick}
                aria-label="add an alarm" >
                <LoginIcon />
            </IconButton > :
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={`${session.user.name}`} src="/static/images/avatar/2.jpg" /> {/*  TODO: Avatar needs a dynamic link */}
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
                    {settings.map((setting) => (
                        <MenuItem key={setting.title} onClick={setting.clickHandler}>
                            <Typography textAlign="center">{setting.title}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
    )
}

