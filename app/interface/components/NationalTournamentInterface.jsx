import {
    useState
} from 'react'

import {
    TextField,
    Typography,
    Autocomplete,
    Box,
    Button
} from '@mui/material'

import countries from '../utils/data.json'

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

    const handleChange = (event) => {
        const newValue = event.target.value;
        setDateValue(newValue)
    };


    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        // Allow only numeric characters (0-9)
        if (!/^[0-9]+$/.test(keyValue)) {
            event.preventDefault();
        }
    };

    console.log(countries)
    return (
        <>
            <Typography variant="overline" display="block" >
                Location
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
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
                        }}
                        id="country-select-demo"
                        sx={{ width: 300 }}
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
                    <div>
                        {`${inputValue} `}
                    </div>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography variant="overline" display="block" >
                        Date
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <DemoContainer components={['Typography', 'DatePicker']}>
                            <DatePicker
                                sx={{ width: 300 }}
                                size="small"
                                value={calendarValue}
                                onChange={(newValue) => {
                                    console.log(newValue)
                                    setCalendarValue(dayjs(newValue).startOf('day'))
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider >
                    <div>
                        {`${calendarValue} `}
                    </div>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography variant="overline" display="block" >
                        Total Participants
                    </Typography>
                    <TextField
                        value={dateValue}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        sx={{ width: 300 }}
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
                    <div>
                        {`${dateValue} `}
                    </div>
                </Box>
                <Button
                    title='Submit Tournament'
                />

            </Box>
        </>
    )
}
