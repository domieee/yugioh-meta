'use client'

import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useStore } from '../../components/store'

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import { GiTrophy, GiTabletopPlayers, GiCalendar, GiPlanetConquest, GiFamilyTree } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons"

import PieChart from '../../statistics/components/PieChart';
import TableMUI from '../../statistics/components/TabelMUI';
import { Grid, Card, Avatar, Paper, Divider, List, Accordion, MenuList, MenuItem, ListItemText, ListItemIcon, Menu, Button } from '@mui/material';
import EditButton from '../components/EditButton';
import OuterWindowWrapper from '../../components/OuterWindowWrapper';
import InnerWindowWrapper from '../../components/InnerWindowWrapper';
import TournamentDetails from '../../components/TournamentDetails';
import TournamentDetailsItem from '../../components/TournamentDetailsItem';
import TablePie from '@/app/components/TablePie';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import TournamentTreeOverviewRow from '../components/TournamentTreeOverviewRow';
import TournamentTreeOverviewItem from '../components/TournamentTreeOverviewItem';
import Router from 'next/router'
import SecondaryWindowHeader from '@/app/components/SecondaryWindowHeader';

import { updateProgress } from '@/app/interfaceStore';



import { VscMenu, VscEdit } from "react-icons/vsc";
import { useRouter } from 'next/navigation';
export default function TournamentOverview({ params }) {
    const [isLoading, setIsLoading] = useState(true)
    let [tournamentBreakdownData, setTournamentBreakdownData] = useState([])
    let [tournamentTree, setTournamentTree] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuEditClick = () => {
        router.push(`/interface/${params.id}`)
        setAnchorEl(null);
    };

    const [tournament, setTournament] = useState(undefined)

    const MenuButton = () => {
        return (
            <>
                <Tooltip title="Options">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2, width: '18px', height: '18px' }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <MenuIcon style={{ width: '18px', height: '18px' }} />
                    </IconButton>
                </Tooltip>
            </>
        )
    }



    const top16FirstRow = tournamentTree[4]?.slice(0, 4)
    const top16SecondRow = tournamentTree[4]?.slice(4, 8)

    let role = useStore((state) => state.role)


    useEffect(() => {
        const fetchTournamentOverview = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}tournament-overview`, {
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: params.id
                    })
                });
                const json = await response.json();
                setTournament(json);
                setIsLoading(false);
                updateProgress(60)
                console.log("🚀 ~ file: page.js:40 ~ TournamentOverview ~ tournament:", tournament)
            } catch (error) {
                console.log(error);
            }
        };

        const fetchTournamentBreakdown = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}tournament-breakdown`, {
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: params.id
                    })
                });
                const json = await response.json();
                setTournamentBreakdownData(json)
                updateProgress(80)
            } catch (error) {
                console.log(error);
            }
        };

        const fetchTournamentTree = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}fetch-tournament-tree`, {
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        tournamentId: params.id
                    })
                });
                const json = await response.json();
                setTournamentTree(json);
                updateProgress(100)
                setTimeout(() => {
                    updateProgress(0)
                }, 500)
                console.log(tournamentTree);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchData = async () => {
            await fetchTournamentOverview();
            await fetchTournamentBreakdown();
            await fetchTournamentTree();
        };
        fetchData()

    }, [])

    return (
        <>
            <OuterWindowWrapper>
                <InnerWindowWrapper
                    currentRoute={'/tournaments/id'}
                    menuOptions={MenuButton()}
                    pagetitle={'Tournament Overview'}>
                    <SecondaryWindowHeader
                        pagetitle={'Tournaments'}
                        sectionTitle={'Informations'} />
                    <TournamentDetails>
                        <TournamentDetailsItem
                            iconType={'winner'}
                            icon={<GiTrophy style={{ width: '25px', height: '25px' }} />}
                            data={`${tournament?.players[0][0].name} with ${tournament?.players[0][0].deck}` || 'N/A'}
                            tooltipTitle={'Tournament Winner'}
                        />

                        <TournamentDetailsItem
                            icon={<GiPlanetConquest style={{ width: '25px', height: '25px' }} />}
                            data={tournament?.location}
                            tooltipTitle={'Tournament Location'}
                        />

                        <TournamentDetailsItem
                            icon={<GiCalendar style={{ width: '25px', height: '25px' }} />}
                            data={tournament?.date}
                            tooltipTitle={'Tournament Date'} />

                        <TournamentDetailsItem
                            icon={<GiTabletopPlayers style={{ width: '25px', height: '25px' }} />}
                            data={tournament?.totalParticipants}
                            tooltipTitle={'Total Participants'} />
                    </TournamentDetails>

                    <SecondaryWindowHeader sectionTitle={'Statistics'} />

                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row'
                            },
                            justifyContent: 'space-around',
                            alignItems: {
                                xs: 'center',
                                sm: 'center',
                                md: 'start',
                                lg: 'start'
                            }
                        }}>
                        <Grid
                            item

                            xs={12}
                            md={6}
                            boxShadow={0}
                            sx={{
                                width: {
                                    xs: '90%',
                                    sm: '100%',
                                    md: '50%',
                                    lg: '50%',

                                },
                                marginBottom: {
                                    xs: '25px',
                                    sm: '25px',
                                    md: '0px',
                                    lg: '0px'
                                }
                            }}
                            borderRadius={2}
                            height='380px'
                            justifyContent="center"
                            alignItems="center"
                            className="canvasContainer">
                            <Paper
                                justifyContent="center"
                                sx={{
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    boxShadow: '0'
                                }}>
                                <div style={{ width: '360px', margin: '10px', boxShadow: '0' }}>
                                    <PieChart data={tournamentBreakdownData} />
                                </div>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                minWidth: {
                                    xs: '100%',
                                    sm: '100%',
                                    md: '50%',
                                    lg: '50%',
                                },
                            }}
                            xs={12}
                            md={6}
                            className="tableContainer">
                            <TableMUI
                                table='winner-breakdown'
                                data={tournamentBreakdownData} />
                        </Grid>
                    </Box>


                    <SecondaryWindowHeader
                        informationTitle={'Explore the deck further by clicking on an item, which will direct you to an external page for viewing.'}
                        sectionTitle={'Tournament Tree'} />


                    {
                        tournamentTree[0]?.length > 0 ? <TournamentTreeOverviewRow
                            icon={<GiTrophy style={{ color: '#FFD700' }} />}
                            data={tournamentTree[0]}
                            place={'Winner'}
                            listItem={'firstPlace'}
                            listOpen={true}
                            borderColor={'#FFD700'} /> :
                            null
                    }
                    {
                        tournamentTree[1]?.length > 0 ? <TournamentTreeOverviewRow
                            icon={<GiFamilyTree />}
                            data={tournamentTree[1]}
                            place={'2nd Place'}
                            listItem={'secondPlace'}
                            listOpen={true}
                            borderColor={'#c0c0c0'} /> :
                            null
                    }
                    {
                        tournamentTree[2]?.length > 0 ? <TournamentTreeOverviewRow
                            icon={<GiFamilyTree />}
                            data={tournamentTree[2]}
                            place={'Top 4'}
                            listItem={'top4'}
                            listOpen={true}
                            borderColor={'#cd7f32'} /> :
                            null
                    }
                    {
                        tournamentTree[3]?.length > 0 ? <TournamentTreeOverviewRow
                            icon={<GiFamilyTree />}
                            data={tournamentTree[3]}
                            place={'Top 8'}
                            listItem={'top8'}
                            listOpen={false}
                            borderColor={'#525252'} /> :
                            null
                    }
                    {
                        tournamentTree[4]?.length > 0 ? <TournamentTreeOverviewRow
                            icon={<GiFamilyTree />}
                            data={tournamentTree[4]}
                            place={'Top 16'}
                            listItem={'top16'}
                            listOpen={false}
                            borderColor={'#525252'} /> :
                            null
                    }
                    {
                        tournamentTree[5]?.length > 0 ? <TournamentTreeOverviewRow
                            icon={<GiFamilyTree />}
                            data={tournamentTree[5]}
                            place={'Top 32'}
                            listItem={'top32'}
                            listOpen={false}
                            borderColor={'#525252'} /> :
                            null
                    }
                    {
                        tournamentTree[6]?.length > 0 ? <TournamentTreeOverviewRow
                            icon={<GiFamilyTree />}
                            data={tournamentTree[6]}
                            place={'Top 64'}
                            listItem={'top64'}
                            listOpen={false}
                            borderColor={'#525252'} /> :
                            null
                    }




                </InnerWindowWrapper>
            </OuterWindowWrapper >
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleMenuEditClick}>

                    <ListItemIcon>
                        <VscEdit />
                    </ListItemIcon>
                    <ListItemText><Typography variant='body2'> Edit Tournament</Typography></ListItemText>

                </MenuItem>
            </Menu>
        </>
    )
}
{/* <Paper sx={{

    width: '100%'
}}>
    <Stack
        paddingInline='25px'
        borderRadius={2}
        sx={{
            width: '100%',
            paddingBlock: '20px',
            marginBlock: '25px',

        }}
        alignItems='center'
        justifyContent='center'
        spacing={2}>
        <List>

            {tournamentTree.length > 0 && (
                <>
                    <Divider width='100%' light orientation="horizontal" textAlign='left'>First Place</Divider>
                    <TournamentTreeOverviewRow data={tournamentTree[0]} />
                    <Divider width='100%' light orientation="horizontal" textAlign='left'>Second Place</Divider>
                    <TournamentTreeOverviewRow data={tournamentTree[1]} />
                    <Divider width='100%' light orientation="horizontal" textAlign='left'>Top 4</Divider>
                    <TournamentTreeOverviewRow data={tournamentTree[2]} />
                    <Divider width='100%' light orientation="horizontal" textAlign='left'>Top 8</Divider>
                    <TournamentTreeOverviewRow data={tournamentTree[3]} />
                    <Divider width='100%' light orientation="horizontal" textAlign='left' >Top 16</Divider>
                    <TournamentTreeOverviewRow data={top16FirstRow} />
                    <TournamentTreeOverviewRow data={top16SecondRow} />
                </>
            )}
        </List>
    </Stack>
</Paper> */}