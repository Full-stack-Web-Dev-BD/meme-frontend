import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
};

export default function BuyModal({ roundCreateFN, roundNumber }) {
    const [time, setTime] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const submitHandler = (e) => {
        e.preventDefault()
        roundCreateFN(time)
    }
    return (
        <div>
            <button onClick={handleOpen} className='btn  btn-block ' >Cheer to Win ! </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <h5 className='text-center'>Buy Eggs</h5>
                        <form>
                            <form>
                                <h6>Paid</h6>
                                <div className='mb-3'>
                                    <label>Ester Eggs</label>
                                    <input className='form-control' placeholder='Enter Amount (Min-0 ) ' />
                                </div>
                                <div>
                                    <label>Ester Eggs</label>
                                    <input className='form-control' placeholder='Enter Amount (Min-0) ' />
                                </div>
                            </form>
                            <div>
                                <label>Round Time</label>
                                <input className='form-control' value={time} onChange={e => setTime(e.target.value)} required type="number" placeholder='Enter  Session Time (Minutes) ' />
                            </div>
                            <div className='mt-4 text-right'>
                                <button className='btn yellow_btn' type='submit' onClick={e => submitHandler(e)} >Create  </button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
