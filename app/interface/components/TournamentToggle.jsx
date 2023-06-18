import { useState } from 'react'
import {
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material'

import { useTournamentStore } from '../tournamentStore';

export default function TournamentToggle() {

    const [alignment, setAlignment] = useState('national');

    let tournamentStore = useTournamentStore(state => state)

    const handleChange = (event, newAlignment) => {

        console.log(newAlignment)
        if (tournamentStore.tournamentType === newAlignment) {
            event.preventDefault()
            return
        }
        tournamentStore.setTournamentType(newAlignment)
    }

    return (
        <ToggleButtonGroup
            color="primary"
            value={tournamentStore.tournamentType}
            exclusive
            onChange={handleChange}
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
