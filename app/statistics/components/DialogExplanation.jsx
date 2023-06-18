import { useState, forwardRef } from 'react';
import {
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
} from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogExplanation({ item }) {
    const [open, setOpen] = useState(false);

    const dialogContext = {
        'winner-breakdown': {
            title: 'Winner Breakdown',
            context: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...',
        },
        'overall-breakdown': {
            title: 'Overall Breakdown',
            context: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...',
        },
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton onClick={handleClickOpen} aria-label="Example">
                <QuestionMarkIcon style={{ width: '16px' }} />
            </IconButton>

            <Dialog
                TransitionComponent={Transition}
                open={open}

                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {dialogContext[item]?.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogContext[item]?.context}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}