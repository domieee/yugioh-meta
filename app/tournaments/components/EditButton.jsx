import React from 'react'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import { useStore } from '../../components/store'

export default function EditButton() {
    let role = useStore((state) => state.role)
    return (
        role === 'administrator' || role === 'moderator' ?
            <IconButton
                onClick={() => handleClickOpen(item === 'winner-breakdown' ? 'winner-breakdown' : 'overall-breakdown')
                } aria-label="Example" >

                <EditIcon fontSize='small' />
            </IconButton > :
            null
    )
}   
