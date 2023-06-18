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

import PieChart from '../../statistics/components/PieChart';
import TableMUI from '../../statistics/components/TabelMUI';
import { Grid, Card, Paper } from '@mui/material';
import EditButton from '../components/EditButton';
import OuterWindowWrapper from '../../components/OuterWindowWrapper';
import InnerWindowWrapper from '../../components/InnerWindowWrapper';
import TournamentDetails from '../../components/TournamentDetails';
import TournamentDetailsItem from '../../components/TournamentDetailsItem';
import TablePie from '@/app/components/TablePie';

import Stack from '@mui/material/Stack';
import TournamentTreeOverviewRow from '../components/TournamentTreeOverviewRow';
import TournamentTreeOverviewItem from '../components/TournamentTreeOverviewItem';


export default function TournamentOverview({ params }) {

    const [tournament, setTournament] = useState()
    const [isLoading, setIsLoading] = useState(true)
    let [tournamentBreakdownData, setTournamentBreakdownData] = useState([])
    let [tournamentTree, setTournamentTree] = useState([])

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

    useEffect(() => {
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
                })
                const json = await response.json()
                console.log(json)
                setTournamentTree(json)
                console.log(tournamentTree)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTournamentTree()
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
                <Stack
                    sx={{
                        width: '100%',
                        paddingBlock: '20px',
                        backgroundColor: '#212121',
                        marginBlock: '25px',
                        borderRadius: '20px'
                    }}
                    alignItems='center'

                    spacing={2}>
                    <TournamentTreeOverviewRow data={tournamentTree[0]} />
                    <TournamentTreeOverviewRow data={tournamentTree[1]} />
                    <TournamentTreeOverviewRow data={tournamentTree[2]} />
                    <TournamentTreeOverviewRow data={tournamentTree[3]} />
                    <TournamentTreeOverviewRow data={top16FirstRow} />

                </Stack>
            </InnerWindowWrapper>
        </OuterWindowWrapper >
    )
}
