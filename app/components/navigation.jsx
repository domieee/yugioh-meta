'use client'

import Link from "next/link";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useRef, useLayoutEffect } from "react";

import * as React from "react";
import { useStore } from "./store";
import { useRouter } from "next/navigation";
import './navigation.scss';


// @mui/material
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import LinearProgress from '@mui/material/LinearProgress';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Slide from '@mui/material/Slide';
import NavigationMenu from "./NavigationMenu";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Drawer from '@mui/material/Drawer';
import Divider from "@mui/material/Divider";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

import { GiFoxHead } from "react-icons/gi";
import { TbArrowLeft } from "react-icons/tb";


import { updateProgress } from "../interfaceStore";

import { useInterfaceStore } from "../interfaceStore";
import { styled, useTheme } from "@mui/material/styles";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

import {
    GiPieChart,
    GiFamilyTree
} from "react-icons/gi";


function Navigation({ props }) {

    const theme = useTheme()

    console.log(props)

    const [isLoading, setIsLoading] = useState(true);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [alertOpen, setAlertOpen] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const router = useRouter()

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignInClick = () => {
        setOpen(false);
        router.push('/login')
    }


    const alert = useInterfaceStore((state) => state.alert.msg);
    const success = useInterfaceStore((state) => state.success.msg);



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
                updateProgress(25)
                router.push('/tournaments')
                handleCloseNavMenu()
            }
        },
        {
            title: 'Statistics', route: () => {
                updateProgress(25)
                router.push('/statistics')
                handleCloseNavMenu()
            },
        }
    ];

    const largeScreenMenu = [
        {
            title: 'Tournaments', route: '/tournaments',
        },
        {
            title: 'Statistics', route: '/statistics'
        }
    ];

    let username = useStore((state) => state.username)
    let id = useStore((state) => state.id)
    let role = useStore((state) => state.role)

    let progress = useInterfaceStore((state) => state.progress)

    let alertVisibility = useInterfaceStore((state) => state.alert.visibility)
    let successVisibility = useInterfaceStore((state) => state.success.visibility)
    let updateSuccessVisibility = useInterfaceStore((state) => state.updateSuccessVisibility)

    const setUserName = useStore((state) => state.setUserName)
    const setUserID = useStore((state) => state.setUserID)
    const setUserRole = useStore((state) => state.setUserRole)


    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    }

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
            console.log("🚀 ~ file: navigation.jsx:138 ~ receiveUserInformations ~ json:", json)
            await setUserName(json.username || json.nameOrMail)
            await setUserID(json.id)
            await setUserRole(json.role)


        } else if (userInformation.status === 401 || !userInformation.ok) {
            const json = await userInformation.json()
            await setUserName(false)
            await setUserID(false)
            await setUserRole(false)
            Cookies.remove('token');
            setOpen(true)
        }
    }

    useEffect(() => {
        if (Cookies.get('token')) {
            receiveUserInformations()
            const interval = setInterval(receiveUserInformations, 10000);

            // Clean up the interval when the component unmounts
            return () => clearInterval(interval);
        }
    })
    useEffect(() => {
        setIsLoading(false)
    }, [])




    return (
        <>
            <AppBar position="fixed"
                sx={{// Apply blur effect
                    backgroundColor: '#0E0E0D', // Set background color with opacity
                    opacity: 0.97,
                    height: '65px',
                    top: '0'
                }
                } >
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        backgroundColor: '#232423'
                    }}
                />
                <Container maxWidth="xl">
                    <Toolbar disableGutters boxShadow={0}>
                        <Box sx={{
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}>
                            <GiFoxHead style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                        </Box>
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

                        <Box sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => setDrawerOpen(true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                sx={{ width: '50%', backgroundColor: '#232423', }}
                                open={drawerOpen}
                                onClose={() => setDrawerOpen(false)}
                            >
                                <Paper sx={{
                                    height: '100%',
                                    transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
                                }} >
                                    <DrawerHeader>
                                        <IconButton onClick={() => setDrawerOpen(false)}>
                                            <TbArrowLeft />
                                        </IconButton>
                                    </DrawerHeader>
                                    <Divider />
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    justifyContent: 'flex-start'

                                                }}
                                                alignItems="center">
                                                <ListItemIcon>
                                                    <GiFamilyTree />
                                                </ListItemIcon>
                                                <ListItemText primary="Tournaments" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    justifyContent: 'flex-start'
                                                }}
                                                alignItems="center">
                                                <ListItemIcon>
                                                    <GiPieChart />
                                                </ListItemIcon>
                                                <ListItemText primary="Statistics" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Paper>
                            </Drawer>
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
                        <Box sx={{
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}>
                            <GiFoxHead
                                style={{
                                    marginRight: '10px',
                                    width: '20px',
                                    height: '20px'
                                }} />
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
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
                                <Typography
                                    className="navigation-link"
                                    key={page.title}
                                    onClick={page.route}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.title}
                                </Typography>
                            ))}
                        </Box>
                        {isLoading ? <Skeleton variant="circular" width={40} height={40} /> : <NavigationMenu role={role} username={username} />}
                    </Toolbar>
                </Container>

            </ AppBar >

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={alertVisibility}

                autoHideDuration={5000}
                onClose={handleAlertClose}>
                <Alert severity="error" onClose={() => { }}>{alert}</Alert>

            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={successVisibility}

                autoHideDuration={5000}
                onClose={handleAlertClose}>
                <Alert severity="success" onClose={() => updateSuccessVisibility(false)}>{success}</Alert>
            </Snackbar>

            {/* This dialog is used to handle the session expired event */}
            <Dialog
                sx={{
                    p: 4
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Session expired"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your session has expired. Please log in again to continue.
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    justifyContent='space-between'>
                    <Button onClick={handleClose}>Close</Button>
                    <Button
                        sx={{
                            marginLeft: 'auto'
                        }}
                        variant="outlined"
                        onClick={handleSignInClick} autoFocus>
                        Sign in
                    </Button>
                </DialogActions>
            </Dialog >


        </>
    );
}
export default Navigation;