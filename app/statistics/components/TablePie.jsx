'use client'

import * as React from 'react'
import Box from '@mui/material/Box';
import PieChart from "./PieChart"
import TableMUI from "./TabelMUI"
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function TablePie({ winnerJson, topCutJson, item }) {

    const [open, setOpen] = useState({ state: false, dialog: '' })

    const handleClickOpen = (dialogItem) => {
        setOpen({ state: true, dialog: dialogItem });
    };

    const handleClose = (dialogItem) => {
        setOpen({ state: false, dialog: dialogItem });
    };

    const theme = createTheme({
        breakpoints: {
            values: {
                xxs: 0, // small phone
                xs: 300, // phone
                sm: 600, // tablets
                md: 900, // small laptop
                lg: 1200, // desktop
                xl: 1536 // large screens
            }
        }
    });

    {/*  // TODO: In the dialogContext: Delete the Lorem Ipsum and replace it with real text */ }

    const dialogContext = {
        winnerbreakdown: {
            title: 'Winner Breakdown', context: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        overallbreakdown: {
            title: 'Overall Breakdown', context: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        }
    }


    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent='center'
                bgcolor="background.paper"
                backgroundColor='#272727'
                p={1}
                borderRadius={2}
                elevation={3}
                marginBottom={2}
                maxWidth={700}
                marginInline='auto'
                boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                sx={{
                    minWidth: {
                        xs: '380px',
                        sm: '380px',
                        md: '380px',
                        lg: '1280px'
                    }
                }}
            >
                <Box sx={{
                    display: 'flex',
                    height: '50px',
                    alignItems: 'start',
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'start',
                        lg: 'space-between'
                    }
                }}>
                    <Typography
                        variant="h5"
                        sx={{
                            justifyContent: {
                                xs: 'center',
                                sm: 'center',
                                md: 'center',
                                lg: 'center'
                            },
                            paddingInline: {
                                xs: '0px',
                                sm: '0px',
                                md: '100px'
                            }
                        }}>
                        {winnerJson ? "Winner Breakdown" : " Overall Top Cut Breakdown"}
                    </Typography>
                    <IconButton
                        onClick={() => handleClickOpen(item === 'winner-breakdown' ? 'winner-breakdown' : 'overall-breakdown')}
                        aria-label="Example">
                        <QuestionMarkIcon style={{ width: '16px' }} />
                    </IconButton>
                </Box>
                <Box
                    paddingLeft='100px'>
                    <Typography variant='body2'>Some potential data</Typography>
                    <Typography variant='body2'>Some potential data</Typography>
                    <Typography variant='body2'>Some potential data</Typography>
                </Box>
                <Box
                    theme={theme}
                    justifyContent='space-evenly'
                    alignItems='center'
                    display="flex"
                    flexDirection="row"

                    p={2}
                    borderRadius={4}
                    minHeight={430}

                    sx={{
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row'
                        }
                    }}>
                    <div className="canvasContainer">
                        <PieChart data={winnerJson || topCutJson} />
                    </div>
                    <div className="tableContainer">
                        <TableMUI
                            table='winner-breakdown'
                            data={winnerJson || topCutJson} />
                    </div>
                </Box>
            </Box >

            <Dialog
                TransitionComponent={Transition}
                open={open.state}
                onClose={() => handleClose(item === 'winner-breakdown' ? 'winner-breakdown' : 'overall-breakdown')}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {open.dialog === 'winner-breakdown' ? dialogContext.winnerbreakdown.title : dialogContext.overallbreakdown.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {open.dialog === 'winner-breakdown' ? dialogContext.winnerbreakdown.context : dialogContext.overallbreakdown.context}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(item === 'winner-breakdown' ? 'winner-breakdown' : 'overall-breakdown')} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>

    )
}
