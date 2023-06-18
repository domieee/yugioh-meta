
import { useState } from 'react'
import {
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material'

import { useTournamentStore } from '../tournamentStore';

export default function TournamentToggle({ type }) {

    const [alignment, setAlignment] = useState('national');

    let tournamentStore = useTournamentStore(state => state)


    return (
        <ToggleButtonGroup
            color="primary"
            value={type}
            exclusive

            aria-label="Platform">
            <ToggleButton
                size='small'
                value="national">
                National
            </ToggleButton>
            <ToggleButton
                size='small'
                value="regional">
                Regional
            </ToggleButton>
        </ToggleButtonGroup>
    )
}
