'use client'

import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useRef, useLayoutEffect } from "react";

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
import Cookies from 'js-cookie';

import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NavigationMenu from "./NavigationMenu";

function Navigation({ props }) {

    console.log(props)

    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [user, setUser] = useState({ username: undefined, id: undefined, role: undefined })
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const router = useRouter()


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
        {
            title: 'Tournaments', route: () => {
                router.push('/tournaments')
                handleCloseNavMenu()
            }
        },
        {
            title: 'Statistics', route: () => {
                router.push('/statistics')
                handleCloseNavMenu()
            },
        }
    ];

    const largeScreenMenu = [
        {
            title: 'Tournaments', route: '/tournaments'
        },
        {
            title: 'Statistics', route: '/statistics'
        }
    ];

    useEffect(() => {

        const revealUserInformations = async () => {
            // To receive the current user and role we check if a token exists
            const hasToken = () => {
                const token = Cookies.get('token');
                return token !== undefined;
            }

            if (hasToken()) {
                const currentToken = Cookies.get('token');
                try {
                    // In that case we send the token the server and receive the requested information
                    // With that information we build the navigation with the matching menu options dedicated to the user role
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}reveal-user-informations`, {
                        method: 'POST',
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            token: currentToken
                        })
                    })
                    const json = await response.json()
                    setUser({
                        username: json.username,
                        id: json.id,
                        role: json.role
                    })
                    setLoading(false)
                    console.log(user)
                } catch (err) {
                    console.log(err)
                }
            } else {
                // In case that currently isn't a cookie set, we set the parameters to 'null' which will cause the page to show a login button 
                setUser({ id: null, role: null })
            }
        }
        revealUserInformations()
    }, []);

    console.log(user);

    return (
        <AppBar marginBottom={20} position="sticky" top={0}
            sx={{// Apply blur effect
                backgroundColor: '#202020', // Set background color with opacity
                boxShadow: 'none', // Remove box shadow
                opacity: 0.97
            }
            } >
            <Container maxWidth="xl">
                <Toolbar disableGutters boxShadow={0}>
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
                            fontSize: '0.9rem',
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
                                <MenuItem key={page.title} onClick={page.route}>
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
                        {largeScreenMenu.map(page => (
                            <Link
                                className="navigation-link"
                                href={`${page.route}`}
                                key={page.title}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Link>
                        ))}
                    </Box>

                    {user.id === undefined ?
                        <Skeleton variant="circular" width={40} height={40} /> :
                        <NavigationMenu user={user} />
                    }


                </Toolbar>
            </Container>
        </ AppBar >
    );
}
export default Navigation;