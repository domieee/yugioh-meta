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
    Button,
    Divider,
    Chip
} from '@mui/material'

import LoadingButton from '@mui/lab/LoadingButton';

import { VscAdd, VscTrash } from "react-icons/vsc";

import Cookies from 'js-cookie';

import { useTournamentStore } from '../tournamentStore';
import TournamentTreeItem from './TournamentTreeItem';
import { useRouter } from 'next/navigation';


export default function TournamentTree({ treeRow, currentInterfaceState, interfaceIndex, chipIcon }) {
    console.log("🚀 ~ file: TournamentTreeRow.jsx:30 ~ TournamentTree ~ currentInterfaceState:", currentInterfaceState)
    console.log("🚀 ~ file: TournamentTreeRow.jsx:30 ~ TournamentTree ~ treeRow:", treeRow)



    const [top16, setTop16] = useState(false)

    const router = useRouter()
    let tournamentStore = useTournamentStore(state => state)


    return (
        <>
            <Box
                sx={{
                    widht: '100%',
                    display: 'flex'
                }}>
                <IconButton>
                    {currentInterfaceState - 1 === interfaceIndex ? <VscTrash /> : null}
                </IconButton>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        width: '100%'
                    }}>
                        <Divider sx={{
                            alignSelf: 'center'
                        }} width='100%' light orientation="horizontal" textAlign='left'>
                            <Chip
                                sx={{
                                    width: '100px',
                                    cursor: 'default', // Set the default cursor style
                                    '&:hover': {
                                        cursor: 'pointer', // Set the cursor style when hovering
                                    },
                                }}
                                variant='outlined'
                                icon={chipIcon}
                                label={treeRow[0].title}
                            />

                        </Divider>
                    </Box>
                </Box>

            </Box >
            <Box>
                {treeRow.map((item, index) => (<TournamentTreeItem key={index} data={item} />))}
            </Box>

        </>
    )
}
