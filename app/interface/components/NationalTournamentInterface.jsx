'use client'

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
    Stack,
    Select,
    MenuItem
} from '@mui/material'

import { GiTrophy, GiTabletopPlayers } from "react-icons/gi";
import { IconContext } from "react-icons"

import countries from '../utils/data.json'
import citys from '../utils/cityData.json'

import TournamentTree from './TournamentTreeRow';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { useTournamentStore } from '../tournamentStore';
import { updateProgress } from '@/app/interfaceStore';

export default function NationalTournamentInterface() {

    let tournamentStore = useTournamentStore(state => state)

    const [value, setValue] = useState(tournamentStore.tournamentType === 'national' ? countries[0] : citys[0]);
    const [inputValue, setInputValue] = useState('');

    const [dateValue, setDateValue] = useState(dayjs('2022-04-17'));

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;

    const [calendarValue, setCalendarValue] = useState(dayjs(formattedDate).startOf('day'));



    const handleChange = (event) => {
        const newValue = event.target.value;
        tournamentStore.setTotalParticipants(newValue)
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
                marginBlock={2}
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'>
                <Stack
                    width='100%'
                    direction={{
                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                        lg: 'row'
                    }}
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={0}>

                    <Box sx={{
                        width: '220px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant="overline" display="block" >
                            Tournament Type
                        </Typography>
                        <Select
                            size='small'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tournamentStore.tournamentType}
                            onChange={e => tournamentStore.setTournamentType(e.target.value)}>
                            <MenuItem value={'national'}>National</MenuItem>
                            <MenuItem value={'regional'}>Regional</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{
                        width: '220px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography variant="overline" display="block" >
                            Location
                        </Typography>
                        <Autocomplete
                            size='small'
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
                            options={tournamentStore.tournamentType === 'national' ? countries : citys}
                            autoHighlight
                            getOptionLabel={(option) => {
                                if (tournamentStore.tournamentType === 'national') {
                                    return option.label;
                                } else {
                                    return option.toponymName;
                                }
                            }}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${tournamentStore.tournamentType === 'national' ? option?.code?.toLowerCase() : option.countryCode.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${tournamentStore.tournamentType === 'national' ? option?.code?.toLowerCase() : option.countryCode.toLowerCase()}.png 2x`}
                                        alt=""
                                    />
                                    {tournamentStore.tournamentType === 'national' ? option.label : ''} {tournamentStore.tournamentType === 'national' ? option.code : option.toponymName}
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
                        width: '220px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        < Typography variant="overline" display="block" >
                            Date
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer sx={{ paddingTop: 0 }} components={['DateField']}>

                                <DateField
                                    size='small'
                                    value={tournamentStore.date}
                                    onChange={(newValue) => {
                                        console.log(newValue)
                                        tournamentStore.setDate(newValue)
                                    }}
                                    format='DD/MM/YYYY'
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>

                    <Box sx={{
                                                width: '220px',
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
                            inputProps={{
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                                min: 1,
                            }} />
                    </Box>
                </Stack >
            </Box >
        </>
    )
}
