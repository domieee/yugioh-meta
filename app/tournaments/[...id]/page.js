'use client'

import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useStore } from '../../components/store'

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import { GiTrophy, GiTabletopPlayers, GiCalendar, GiPlanetConquest } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons"

import PieChart from '@/app/statistics/components/PieChart';
import TableMUI from '@/app/statistics/components/TabelMUI';
import { Grid, Card, Paper } from '@mui/material';
import EditButton from '../components/EditButton';
import OuterWindowWrapper from '@/app/components/OuterWindowWrapper';
import InnerWindowWrapper from '@/app/components/InnerWindowWrapper';
import TournamentDetails from '@/app/components/TournamentDetails';
import TournamentDetailsItem from '@/app/components/TournamentDetailsItem';
import TablePie from '@/app/components/TablePie';

export default function TournamentOverview({ params }) {

    const [tournament, setTournament] = useState()
    const [isLoading, setIsLoading] = useState(true)
    let [tournamentBreakdownData, setTournamentBreakdownData] = useState([])

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
        <OuterWindowWrapper>
            <InnerWindowWrapper
                route={'tournament/id'}
                menuOptions={<EditButton />}
                pagetitle={'Tournament Overview'}>
                <Typography variant='h6'>Informations</Typography>
                <TournamentDetails>
                    <TournamentDetailsItem
                        iconType={'winner'}
                        icon={<GiTrophy />}
                        data={`${tournament?.player[0].name} with ${tournament?.player[0].deck}`}
                        tooltipTitle={'Tournament Winner'} />

                    <TournamentDetailsItem
                        icon={<GiPlanetConquest />}
                        data={`${tournament?.location}`}
                        tooltipTitle={'Tournament Location'} />

                    <TournamentDetailsItem
                        icon={<GiCalendar />}
                        data={tournament?.date}
                        tooltipTitle={'Tournament Date'} />

                    <TournamentDetailsItem
                        icon={<GiTabletopPlayers />}
                        data={tournament?.totalParticipants}
                        tooltipTitle={'Total Participants'} />
                </TournamentDetails>

                <Typography variant='h6'>Statistics</Typography>
                <TournamentDetails>
                    <Grid
                        item
                        xs={6}
                        borderRadius={2}
                        height='380px'
                        justifyContent="center"
                        sx={{
                            height: '380px'
                        }} className="canvasContainer">
                        <Paper

                            justifyContent="center"
                            sx={{
                                backgroundColor: '#1F0F26',
                                borderRadius: 2,
                                padding: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <div style={{ width: '320px', margin: '10px' }}>
                                <PieChart data={tournamentBreakdownData} />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} className="tableContainer">
                        <TableMUI
                            table='winner-breakdown'
                            data={tournamentBreakdownData} />
                    </Grid>
                </TournamentDetails>

                <Typography variant='h6'>Tournament Tree</Typography>

                {/* <TablePie tournamentJson={tournamentBreakdownData && tournamentBreakdownData} /> */}
                {/* <Grid
                    container
                    flexDirection="row"

                    borderRadius={1}


                    sx={{
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row'
                        }
                    }}>
                    <Grid xs={6} item className="canvasContainer">
                        <Card>
                            <Paper
                                borderRadius={2}
                                sx={{

                                    backgroundColor: '#1F0F26',
                                }}>
                                <PieChart
                                    data={tournamentBreakdownData} />
                            </Paper>
                        </Card>
                    </Grid>
                    <Grid sx={{
                        height: '350px'
                    }} xs={6} item className="tableContainer">
                        <TableMUI
                            table='winner-breakdown'
                            data={tournamentBreakdownData} />
                    </Grid>
                </Grid> */}




            </InnerWindowWrapper>
        </OuterWindowWrapper >
    )
}
