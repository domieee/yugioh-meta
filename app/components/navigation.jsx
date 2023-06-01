'use client'

import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useRef, useLayoutEffect } from "react";
import { signOut } from "next-auth/react"
import * as React from "react";
import { useRouter } from "next/navigation";
import './navigation.scss';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NavigationMenu from "./NavigationMenu";

function ResponsiveAppBar(props) {

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


    const pages = [
        { title: 'Tournaments', route: '/tournaments' },
        { title: 'Statistics', route: '/statistics' },
    ];
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



    console.log(props)
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    console.log(session, 'session')

    useEffect(() => {
        if (status === "loading") {
            setLoading(true);
        } else {
            setTimeout(() => {
                setProgress(100)
                setLoading(false)
                setTimeout(() => {
                    setProgress(0);
                }, 100)
            }, 300)
        }
    }, [status]);





    return (
        <AppBar position="sticky" top={0} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'system-ui',
                            fontSize: '16px',
                            fontWeight: 400,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        YU-GI-OH! Meta
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(page => (
                            <Link
                                href={`${page.route}`}
                                key={page.title}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Link>
                        ))}
                    </Box>

                    {session === undefined ?
                        <Skeleton variant="circular" width={40} height={40} /> :
                        <NavigationMenu session={session} />
                    }


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;