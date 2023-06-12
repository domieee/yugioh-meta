'use client'

import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useRef, useLayoutEffect } from "react";

import * as React from "react";
import { useStore } from "./store";
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

    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
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

    let username = useStore((state) => state.username)
    let id = useStore((state) => state.id)
    let role = useStore((state) => state.role)

    const setUserName = useStore((state) => state.setUserName)
    const setUserID = useStore((state) => state.setUserID)
    const setUserRole = useStore((state) => state.setUserRole)

    const setUsernameNull = useStore((state) => state.setUsernameNull)
    const setIDNull = useStore((state) => state.setIDNull)
    const setRoleNull = useStore((state) => state.setRoleNull)

    if (Cookies.get('token')) {
        const receiveUserInformations = async () => {
            const currentToken = Cookies.get('token');

            const userInformation = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}receive-user-informations`, {
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    token: currentToken
                })
            })

            if (userInformation.status === 200) {
                const json = await userInformation.json()
                await setUserName(json.username || json.nameOrMail)
                await setUserID(json.id)
                await setUserRole(json.role)


            } else if (userInformation.status === 400 || !userInformation.ok) {
                const json = await response.json()
                console.log(json)
            }
        }
        receiveUserInformations()
    } else {
        setUsernameNull()
        setIDNull()
        setRoleNull()
    }

    useEffect(() => {
        setIsLoading(false)
    }, [])


    console.log(username, id, role, ' successfully received')

    return (
        <AppBar marginBottom={20} position="sticky"
            sx={{// Apply blur effect
                backgroundColor: '#202020', // Set background color with opacity
                boxShadow: 'none', // Remove box shadow
                opacity: 0.97,
                height: '65px',
                top: '0'
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
                    {isLoading ? null : <NavigationMenu role={role} username={username} />}


                </Toolbar>
            </Container>
        </ AppBar >
    );
}
export default Navigation;