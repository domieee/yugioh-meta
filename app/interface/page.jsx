'use client'
import {
    TextField,
    Box,
    Typography,
    Button,
    Divider,
    Modal,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText, Paper
} from '@mui/material'
import SecondaryWindowHeader from '../components/SecondaryWindowHeader';

import { BiPlus, BiTrash, BiSend } from "react-icons/bi";

import {
    GiFamilyTree, GiSwirlString
} from "react-icons/gi";

import NationalTournamentInterface from './components/NationalTournamentInterface';
import { useTournamentStore, useInterfaceStore } from './tournamentStore';
import OuterWindowWrapper from '../components/OuterWindowWrapper';
import InnerWindowWrapper from '../components/InnerWindowWrapper';
import TournamentToggle from './components/TournamentToggle';

import { useEffect, useState } from 'react';
import TournamentTree from './components/TournamentTreeRow';
import TournamentDetails from '../components/TournamentDetails';
import TournamentTreeRow from './components/TournamentTreeRow'
import { updateProgress } from '../interfaceStore';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useStore } from '../components/store';

const firstPlace = [
    { key: 'firstPlace', title: 'First' }
];
const secondPlace = [
    { key: 'secondPlace', title: 'Second' }
];
const top4 = [
    { key: 'top4FirstItem', title: 'Top 4' },
    { key: 'top4SecondItem', title: 'Top 4' }
];
const top8 = [
    { key: 'top8FirstItem', title: 'Top 8' },
    { key: 'top8SecondItem', title: 'Top 8' },
    { key: 'top8ThirdItem', title: 'Top 8' },
    { key: 'top8FourthItem', title: 'Top 8' }
]
const top16 = [
    { key: 'top16FirstItem', title: 'Top 16' },
    { key: 'top16SecondItem', title: 'Top 16' },
    { key: 'top16ThirdItem', title: 'Top 16' },
    { key: 'top16FourthItem', title: 'Top 16' },
    { key: 'top16FifthItem', title: 'Top 16' },
    { key: 'top16SixthItem', title: 'Top 16' },
    { key: 'top16SeventhItem', title: 'Top 16' },
    { key: 'top16EighthItem', title: 'Top 16' },
];

const top32 = [
    { key: 'top32FirstItem', title: 'Top 32' },
    { key: 'top32SecondItem', title: 'Top 32' },
    { key: 'top32ThirdItem', title: 'Top 32' },
    { key: 'top32FourthItem', title: 'Top 32' },
    { key: 'top32FifthItem', title: 'Top 32' },
    { key: 'top32SixthItem', title: 'Top 32' },
    { key: 'top32SeventhItem', title: 'Top 32' },
    { key: 'top32EighthItem', title: 'Top 32' },
    { key: 'top32NinthItem', title: 'Top 32' },
    { key: 'top32TenthItem', title: 'Top 32' },
    { key: 'top32EleventhItem', title: 'Top 32' },
    { key: 'top32TwelfthItem', title: 'Top 32' },
    { key: 'top32ThirteenthItem', title: 'Top 32' },
    { key: 'top32FourteenthItem', title: 'Top 32' },
    { key: 'top32FifteenthItem', title: 'Top 32' },
    { key: 'top32SixteenthItem', title: 'Top 32' }
];

const top64 = [
    { key: 'top64FirstItem', title: 'Top 64' },
    { key: 'top64SecondItem', title: 'Top 64' },
    { key: 'top64ThirdItem', title: 'Top 64' },
    { key: 'top64FourthItem', title: 'Top 64' },
    { key: 'top64FifthItem', title: 'Top 64' },
    { key: 'top64SixthItem', title: 'Top 64' },
    { key: 'top64SeventhItem', title: 'Top 64' },
    { key: 'top64EighthItem', title: 'Top 64' },
    { key: 'top64NinthItem', title: 'Top 64' },
    { key: 'top64TenthItem', title: 'Top 64' },
    { key: 'top64EleventhItem', title: 'Top 64' },
    { key: 'top64TwelfthItem', title: 'Top 64' },
    { key: 'top64ThirteenthItem', title: 'Top 64' },
    { key: 'top64FourteenthItem', title: 'Top 64' },
    { key: 'top64FifteenthItem', title: 'Top 64' },
    { key: 'top64SixteenthItem', title: 'Top 64' },
    { key: 'top64SeventeenthItem', title: 'Top 64' },
    { key: 'top64EighteenthItem', title: 'Top 64' },
    { key: 'top64NineteenthItem', title: 'Top 64' },
    { key: 'top64TwentiethItem', title: 'Top 64' },
    { key: 'top64TwentyFirstItem', title: 'Top 64' },
    { key: 'top64TwentySecondItem', title: 'Top 64' },
    { key: 'top64TwentyThirdItem', title: 'Top 64' },
    { key: 'top64TwentyFourthItem', title: 'Top 64' },
    { key: 'top64TwentyFifthItem', title: 'Top 64' },
    { key: 'top64TwentySixthItem', title: 'Top 64' },
    { key: 'top64TwentySeventhItem', title: 'Top 64' },
    { key: 'top64TwentyEighthItem', title: 'Top 64' },
    { key: 'top64TwentyNinthItem', title: 'Top 64' },
    { key: 'top64ThirtiethItem', title: 'Top 64' },
    { key: 'top64ThirtyFirstItem', title: 'Top 64' },
    { key: 'top64ThirtySecondItem', title: 'Top 64' }
];


export default function Interface() {

    const router = useRouter()

    const [arrayStartLimit, setArrayStartLimit] = useState(false)
    const [arrayEndLimit, setArrayEndLimit] = useState(false)
    const [authenticated, setAuthenticated] = useState(null)


    let tournamentStore = useTournamentStore(state => state)
    let interfaceStore = useInterfaceStore(state => state)

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleTournamentFetch = async () => {
        const tournament = await tournamentStoreState.fetchObjectsFromInterfaceState(tournamentStore)
        console.log("🚀 ~ file: page.jsx:124 ~ handleTournamentFetch ~ tournament:", tournament)

        if (await tournament) {
            console.log(tournament)
            router.push(`/tournaments/${tournament.tournamentId}`)
        }
    }

    const store = useStore(state => state)

    useEffect(() => {
        if (interfaceStore.interfaceState.length === 0) {
            setArrayStartLimit(true)
        } else if (interfaceStore.interfaceState.length === 7) {
            setArrayEndLimit(true)
        } else {
            setArrayStartLimit(false)
            setArrayEndLimit(false)
        }
    }, [interfaceStore.interfaceState])

    { interfaceStore.interfaceState.map((item, index) => (item[0].title)) }

    const tournamentStoreState = useTournamentStore.getState()

    const handleRowDelete = () => {
        tournamentStore.resetArray(interfaceStore.interfaceState[interfaceStore.interfaceState.length - 1])
        interfaceStore.deleteLastItem()
        handleClose()
    }


    const checkForEmptyFields = () => {
        if (tournamentStore.isAnyFieldEmpty(interfaceStore.interfaceState[interfaceStore.interfaceState.length - 1])) {
            handleOpen()
            return
        } else {
            interfaceStore.deleteLastItem()
        }
    }
    console.log(store)

    useEffect(() => {
        const checkUserPermission = async () => {
            try {
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
                    const json = await userInformation.json();
                    console.log("User Role:", json.role);
                    if (json.role === 'administrator' || json.role === 'moderator') {
                        setAuthenticated(true);
                    } else {
                        router.push('/')
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        checkUserPermission()
    }, [])

    return (
        <>

            <OuterWindowWrapper>
                {
                    authenticated ?
                        <InnerWindowWrapper
                            currentRoute={'/interface'}
                            pagetitle={'Create a regional tournament'}>

                            <SecondaryWindowHeader sectionTitle={'Tournament Informations'} />

                            <NationalTournamentInterface />
                            <SecondaryWindowHeader
                                informationTitle={'Go ahead and click on any item to easily edit its information.'}
                                sectionTitle={'Tournament Tree'} />

                            <Box
                                sx={{
                                    width: '100%',
                                }}>
                                {interfaceStore.interfaceState.length === 0 ?
                                    <Box sx={{

                                        display: 'flex',
                                        alignItems: 'center',
                                        border: '0.5px solid #3a3a3a',
                                        padding: '5px 10px',
                                        borderRadius: '2px'
                                    }}>
                                        <Typography
                                            variant='body2'
                                            sx={{
                                                fontStyle: 'italic',
                                                color: 'rgba(255, 255, 255, 0.6)',
                                                maxWidth: "100%",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                flex: '1'
                                            }}>
                                            No tournament rows added
                                        </Typography>
                                    </Box> :
                                    interfaceStore.interfaceState.map((item, index) => {
                                        let variableName = ''
                                        let title = ''
                                        let treeRow;
                                        let borderColor

                                        switch (index) {
                                            case 0:
                                                variableName = 'firstPlace';
                                                title = 'Winner'
                                                treeRow = tournamentStore.firstPlace
                                                borderColor = '#FFD700'
                                                break;
                                            case 1:
                                                variableName = 'secondPlace';
                                                title = 'Second'
                                                treeRow = tournamentStore.secondPlace
                                                borderColor = '#c0c0c0'
                                                break;
                                            case 2:
                                                variableName = 'top4';
                                                title = 'Top 4'
                                                treeRow = tournamentStore.top4
                                                borderColor = '#cd7f32'
                                                break;
                                            case 3:
                                                title = 'Top 8'
                                                variableName = 'top8';
                                                treeRow = tournamentStore.top8
                                                borderColor = '#525252'
                                                break;
                                            case 4:
                                                title = 'Top 16'
                                                variableName = 'top16';
                                                treeRow = tournamentStore.top16
                                                borderColor = '#525252'
                                                break;
                                            case 5:
                                                title = 'Top 32'
                                                variableName = 'top32';
                                                treeRow = tournamentStore.top32
                                                borderColor = '#525252'
                                                break;
                                            case 6:
                                                title = 'Top 64'
                                                variableName = 'top64';
                                                treeRow = tournamentStore.top64
                                                borderColor = '#525252'
                                                break;
                                        }

                                        return (
                                            <TournamentTreeRow
                                                key={index}
                                                title={title}
                                                chipIcon={<GiFamilyTree style={{ width: '12.5px', height: '12.5px' }} />}
                                                interfaceIndex={index}
                                                currentInterfaceState={interfaceStore.interfaceState.length}
                                                treeRow={treeRow}
                                                variableName={variableName}
                                                borderColor={borderColor}
                                            />
                                        )
                                    })
                                }
                                <Divider sx={{ marginBlock: '10px 10px', }} />
                                <Box sx={{

                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: {
                                        xs: 'center',
                                        md: 'space-between',
                                    },
                                    flexDirection: {
                                        xs: 'column',
                                        md: 'row'
                                    }
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: {
                                            xs: 'space-between',
                                            md: 'flex-start'
                                        }
                                    }}>
                                        <Button
                                            sx={{
                                                alignItems: 'center',
                                                marginRight: '10px'
                                            }}
                                            size='small'
                                            disabled={arrayStartLimit}
                                            onClick={checkForEmptyFields}
                                            startIcon={<BiTrash />}>
                                            Delete last row
                                        </Button>
                                        <Button
                                            sx={{
                                                alignItems: 'center',
                                            }}
                                            size='small'
                                            onClick={interfaceStore.addTournamentRow}
                                            disabled={arrayEndLimit}
                                            startIcon={<BiPlus />}>
                                            Add new row
                                        </Button>
                                    </Box>
                                    <Button
                                        onClick={handleTournamentFetch}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        size='small'
                                        startIcon={<BiSend />}
                                        variant="outlined">
                                        Post Tournament
                                    </Button>
                                </Box>
                            </Box>

                        </InnerWindowWrapper >
                        :
                        null
                }
            </OuterWindowWrapper >

            <Dialog
                sx={{
                    p: 4,
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Paper>
                    <DialogTitle id="alert-dialog-title">
                        {"Delete changes?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            You have unsaved changes in this row.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions
                        justifyContent='space-between'>
                        <Button size="small" onClick={handleClose}>Close</Button>
                        <Button
                            size="small"
                            sx={{
                                marginLeft: 'auto'
                            }}
                            variant="outlined"
                            onClick={handleRowDelete} >
                            Delete
                        </Button>
                    </DialogActions>
                </Paper>
            </Dialog >
        </>
    )


}
