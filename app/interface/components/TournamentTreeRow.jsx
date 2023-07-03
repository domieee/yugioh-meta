import {
    useState
} from 'react'

import {
    Box,
    IconButton,
    Divider,
    Chip
} from '@mui/material'

import LoadingButton from '@mui/lab/LoadingButton';

import { VscAdd, VscTrash } from "react-icons/vsc";

import Cookies from 'js-cookie';

import { useTournamentStore } from '../tournamentStore';
import TournamentTreeItem from './TournamentTreeItem';
import { useRouter } from 'next/navigation';


export default function TournamentTree({ treeRow, currentInterfaceState, interfaceIndex, chipIcon, title, variableName }) {
    console.log("🚀 ~ file: TournamentTreeRow.jsx:24 ~ TournamentTree ~ treeRow:", treeRow)
    console.log("🚀 ~ file: TournamentTreeRow.jsx:24 ~ TournamentTree ~ variableName:", variableName)

    const [top16, setTop16] = useState(false)

    const router = useRouter()
    let tournamentStore = useTournamentStore(state => state)


    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex'
                }}>
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
                                    justifyContent: 'center'
                                }}
                                variant='outlined'
                                icon={chipIcon}
                                label={title}
                            />

                        </Divider>
                    </Box>
                </Box>

            </Box >
            <Box>
                {treeRow.map((item, index) => (
                    < TournamentTreeItem key={index} data={item} title={title} interfaceIndex={index} variableName={variableName} />
                ))}
            </Box>

        </>
    )
}
