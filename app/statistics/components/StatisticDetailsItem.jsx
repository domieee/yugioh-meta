import { Grid, Paper, Box, Typography, Divider, Skeleton, Stack } from '@mui/material'
import React from 'react'
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';

import { Tooltip, IconButton } from '@mui/material'

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export default function StatisticDetailsItem({ data, icon, itemTitle }) {
    console.log("🚀 ~ file: StatisticDetailsItem.jsx:5 ~ StatisticDetailsItem ~ data:", data)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [placement, setPlacement] = React.useState();

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    // Please note that the majority of this data may not represent specified decks. If that is the case, these data will still be included in the calculation. However, the next largest decks with a valid value will be displayed. You can get a more detailed overview in the Overall Breakdown on the page below.


    React.useEffect(() => {
        const handleWindowClick = (event) => {
            if (anchorEl && !anchorEl.contains(event.target)) {
                handleClick();
            }
        };

        window.addEventListener('onmouseenter', handleWindowClick);

        return () => {
            window.removeEventListener('onmouseleave', handleWindowClick);
        };
    }, [anchorEl]);


    const open = Boolean(anchorEl);

    const id = open ? 'simple-popper' : undefined;


    const dataProvider = () => {
        if (data.indicesOfLowestResult.length === 1) {
            return (
                <Typography>{data.value}</Typography>
            )
        } else {
            return (
                <Box sx={{

                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography>
                        {`${data.value} and ${data?.indicesOfLowestResult.length - 1} more`}
                    </Typography>
                    <Tooltip title='Show other items'>
                        <IconButton
                            sx={{
                                width: '20px',
                                height: '20px'
                            }}
                            aria-describedby={id}
                            onClick={handleClick}>
                            <ArrowDropDownRoundedIcon sx={{
                                rotate: 'deg(90)'
                            }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            )
        }
    }

    return (
        <>
            <Grid
                item
                xs={12}
                sm={6}
                md={5}
                lg={6}
                sx={{
                    width: '100%'
                }}>
                <Typography variant='h7'>{itemTitle}</Typography>

                <Paper
                    elevation={1}
                    sx={{
                        marginTop: '5px',
                        bgcolor: 'rgba(0,0,0,0)'
                    }}>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px'
                        }}>
                        <Box
                            sx={{
                                width: '20px',
                                marginInline: " 25px",
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                boxShadow: '0'
                            }}>
                            {icon}
                        </Box>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                marginRight: '25px'
                            }}
                        />
                        <Box>
                            <Typography
                                sx={{
                                    color: 'rgba(255,255,255,0.6)'
                                }} variant='overline'>Deck&#40;s&#41; </Typography>

                            {data === undefined ?
                                <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.25rem', width: 100 }} /> : dataProvider()
                            }

                            <Typography
                                sx={{
                                    color: 'rgba(255,255,255,0.6)'
                                }} variant='overline'>Count</Typography>
                            {data === undefined ? <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.25rem', width: 100 }} /> : <Typography>{data.count}</Typography>}
                            <Typography
                                sx={{
                                    color: 'rgba(255,255,255,0.6)'
                                }} variant='overline'>Percentage</Typography>
                            {data === undefined ? <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.25rem', width: 100 }} /> : <Typography>{data.percentage}%</Typography>}
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Popper onClick={handleClick} sx={{ zIndex: 2000 }} id={id} open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper elevation={1}>
                            <Stack>

                                {data?.indicesOfLowestResult.map((item, index) => (
                                    <Box
                                        sx={{
                                            padding: '5px 12px',
                                        }}
                                        key={index}>
                                        <Typography>{item}</Typography>
                                    </Box>
                                ))}

                            </Stack>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    )
}
