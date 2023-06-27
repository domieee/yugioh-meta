import {
    useState
} from 'react'

import {
    Box,
    IconButton,
    Card,
    CardActionArea,
    CardContent,
    Stack,
    Typography,
    Modal,
    TextField,
    Button
} from '@mui/material'

import LoadingButton from '@mui/lab/LoadingButton';

import { VscAdd, VscTrash } from "react-icons/vsc";

import Cookies from 'js-cookie';

import { useTournamentStore } from '../tournamentStore';
import TournamentTreeItem from './TournamentTreeItem';
import { useRouter } from 'next/navigation';



export default function TournamentTree() {

    const [top16, setTop16] = useState(false)

    const router = useRouter()


    let tournamentStore = useTournamentStore(state => state)

    const firstPlaceRow = [
        { key: 'firstPlace', title: 'First Place' }
    ];
    const secondPlaceRow = [
        { key: 'secondPlace', title: 'Second Place' }
    ];
    const top4Row = [
        { key: 'top4FirstItem', title: 'Top 4' },
        { key: 'top4SecondItem', title: 'Top 4' }
    ];
    const top8Row = [
        { key: 'top8FirstItem', title: 'Top 8' },
        { key: 'top8SecondItem', title: 'Top 8' },
        { key: 'top8ThirdItem', title: 'Top 8' },
        { key: 'top8FourthItem', title: 'Top 8' }
    ]
    const top16Row = [
        { key: 'top16FirstItem', title: 'Top 16' },
        { key: 'top16SecondItem', title: 'Top 16' },
        { key: 'top16ThirdItem', title: 'Top 16' },
        { key: 'top16FourthItem', title: 'Top 16' },
        { key: 'top16FifthItem', title: 'Top 16' },
        { key: 'top16SixthItem', title: 'Top 16' },
        { key: 'top16SeventhItem', title: 'Top 16' },
        { key: 'top16EighthItem', title: 'Top 16' },
    ];




    return (
        <>
            <Box
                sx={{
                    widht: '100%',
                    display: 'flex',
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }}>
                <IconButton>
                    <VscAdd />
                </IconButton>

            </Box >
        </>
    )
}
