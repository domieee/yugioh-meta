'use client'

import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useStore } from '../../components/store'

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import { GiTrophy, GiTabletopPlayers, GiCalendar } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons"

import PieChart from '@/app/statistics/components/PieChart';
import TableMUI from '@/app/statistics/components/TabelMUI';
import EditButton from '../components/EditButton';

export default function TournamentOverview({ params }) {

    const [tournament, setTournament] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [tournamentBreakdownData, setTournamentBreakdownData] = useState([])

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
                const json = await response.json()
                setTournament(json)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTournamentOverview()
    }, [])

    useEffect(() => {
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
                })
                const json = await response.json()
                setTimeout(() => setTournamentBreakdownData(json), 500)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTournamentBreakdown()
    }, [])

    console.log(role)

    return (
        <Box
            bgcolor="background.paper"
            backgroundColor='#212121'
            gap={2}
            display="flex"
            justifyContent="center"
            flexWrap='wrap'
            alignItems="center"
            height='100%'
            minHeight='100%'
            p={5}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent='center'
                bgcolor="background.paper"
                backgroundColor='#272727'
                p={1}
                borderRadius={2}
                elevation={3}

                maxWidth={700}
                marginInline='auto'
                boxShadow='2px 2px 4px rgba(0, 0, 0, 0.2)'
                sx={{
                    minWidth: {
                        xs: '380px',
                        sm: '380px',
                        md: '380px',
                        lg: '1280px'
                    }
                }}>
                <Box sx={{
                    display: 'flex',
                    height: '50px',
                    alignItems: 'center',
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'start',
                        lg: 'space-between'
                    }
                }}>
                    <Typography
                        variant="h5"
                        sx={{
                            justifyContent: {
                                xs: 'center',
                                sm: 'center',
                                md: 'center',
                                lg: 'center'
                            },
                            paddingInline: {
                                xs: '0px',
                                sm: '0px',
                                md: '100px'
                            }
                        }}>
                        Tournament Overview
                    </Typography>
                    {isLoading ?
                        null :
                        <EditButton />
                    }

                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginBlock: '20px',
                    paddingLeft: {
                        xs: '0px',
                        sm: '0px',
                        md: '100px'
                    }
                }}>

                    <Box
                        sx={{
                            minWidth: '100px',
                            marginRight: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justfiyContent: 'center',
                        }}>
                        <Box sx={{
                            width: '20px', marginRight: '15px', display: 'flex',
                            alignItems: 'center',
                        }}>
                            <IconContext.Provider value={{ color: "#FFD700" }}>
                                <Tooltip title='Winner of the tournament'>
                                    <IconButton sx={{
                                        width: '30px',
                                        height: '30px',
                                        cursor: 'help'
                                    }}>
                                        <GiTrophy />
                                    </IconButton>
                                </Tooltip>
                            </IconContext.Provider>
                        </Box>
                        {isLoading ?
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width: 140 }} /> :
                            <Typography variant='body2'>{`${tournament.player[0].name} with ${tournament.player[0].deck}`}</Typography>}
                    </Box>


                    <Box
                        sx={{
                            minWidth: '100px',
                            marginRight: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justfiyContent: 'center',
                        }}>
                        <Box sx={{
                            width: '20px', marginRight: '15px', display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Tooltip title='Tournament location'>
                                <IconButton sx={{
                                    width: '30px',
                                    height: '30px',
                                    cursor: 'help'
                                }}>
                                    <MdLocationOn />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        {isLoading ?
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width: 60 }} /> :
                            <Typography variant='body2'>{tournament?.location}</Typography>}
                    </Box>


                    <Box
                        sx={{

                            minWidth: '100px',
                            marginRight: '20px',
                            display: 'flex',
                            alignItems: 'center',

                        }}>
                        <Box sx={{
                            width: '20px', marginRight: '15px', display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Tooltip title='Tournament date'>
                                <IconButton sx={{
                                    width: '30px',
                                    height: '30px',
                                    cursor: 'help'
                                }}>
                                    <GiCalendar />
                                </IconButton>
                            </Tooltip>

                        </Box>
                        {isLoading ?
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width: 78 }} /> :
                            <Typography variant='body2'>{tournament?.date}</Typography>}
                    </Box>

                    <Box sx={{
                        minWidth: '100px',
                        marginRight: '20px',
                        display: 'flex',

                    }}>
                        <Box sx={{
                            width: '20px', marginRight: '15px', display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Tooltip title='Total players participated'>
                                <IconButton sx={{
                                    width: '30px',
                                    height: '30px',
                                    cursor: 'help'
                                }}>
                                    <GiTabletopPlayers />
                                </IconButton>
                            </Tooltip>

                        </Box>
                        {isLoading ?
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width: 26, alignSelf: 'center' }} /> :
                            <Typography variant='body2' sx={{ alignSelf: 'center' }}>{tournament?.totalParticipants}</Typography>}
                    </Box>


                </Box>
                <Box

                    justifyContent='space-evenly'
                    alignItems='center'
                    display="flex"
                    flexDirection="row"

                    p={2}
                    borderRadius={1}
                    minHeight={430}

                    sx={{
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row'
                        }
                    }}>
                    <div className="canvasContainer">
                        <PieChart
                            data={tournamentBreakdownData} />
                    </div>
                    <div className="tableContainer">
                        <TableMUI
                            table='winner-breakdown'
                            data={tournamentBreakdownData} />
                    </div>
                </Box>
            </Box>
        </Box >
    )
}
