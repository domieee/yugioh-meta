import {
    useState,
    useEffect
} from 'react'

import {
    TextField,
    Typography,
    Autocomplete,
    Box,
    Button,
    Stack
} from '@mui/material'

import { GiTrophy, GiTabletopPlayers } from "react-icons/gi";
import { IconContext } from "react-icons"

import countries from '../utils/data.json'

import TournamentTree from './TournamentTreeRow';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTournamentStore } from '../tournamentStore';
import { updateProgress } from '@/app/interfaceStore';

export default function NationalTournamentInterface() {

    const [value, setValue] = useState(countries[0]);
    const [inputValue, setInputValue] = useState('');

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;

    const [calendarValue, setCalendarValue] = useState(dayjs(formattedDate).startOf('day'));
    const [dateValue, setDateValue] = useState(1);
    let tournamentStore = useTournamentStore(state => state)

    const handleChange = (event) => {
        const newValue = event.target.value;
        tournamentStore.setTotalParticipants(newValue)
        console.log(tournamentStore.totalParticipants)
        console.log(tournamentStore.date)
    }

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        // Allow only numeric characters (0-9)
        if (!/^[0-9]+$/.test(keyValue)) {
            event.preventDefault();
        }
    };

    useEffect(() => {
        tournamentStore.setLocation(inputValue);
        console.log(tournamentStore.location);
        updateProgress(100)
        setTimeout(() => updateProgress(0), 500)
    }, [inputValue]);

    console.log(countries)
    return (
        <>
            <Box
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'>
                <Stack
                    width='100%'
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={0}>
                    <Box sx={{
                        width: '220px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant="overline" display="block" >
                            Location
                        </Typography>
                        <Autocomplete
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            inputValue={inputValue}
                            onInputChange={(event, newInputValue) => {
                                setInputValue(newInputValue);
                                console.log(inputValue)
                            }}
                            id="country-select-demo"
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                        alt=""
                                    />
                                    {option.label} ({option.code})
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    inputProps={{
                                        ...params.inputProps
                                    }}
                                />
                            )}
                        />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['Typography', 'DatePicker']}>
                                <Box
                                    sx={{ display: 'flex', flexDirection: 'column' }}
                                >
                                    <Typography variant="overline" display="block" >
                                        Date
                                    </Typography>
                                    <DatePicker

                                        value={calendarValue}
                                        onChange={(newValue) => {
                                            const selectedDate = new Date(newValue); // Convert to Date format
                                            console.log(selectedDate);
                                            tournamentStore.setDate(selectedDate);

                                        }}
                                    />
                                </Box>
                            </DemoContainer>
                        </LocalizationProvider >
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant="overline" display="block" >
                            Total Participants
                        </Typography>
                        <TextField
                            size='small'
                            value={tournamentStore.totalParticipants}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            id="outlined-number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                                min: 1,
                            }} />
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
