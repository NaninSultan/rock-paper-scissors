import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>Show rules</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rules
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Rock breaks scissors and therefore rock wins over scissors. Rock loses against paper.
            <br/>
            Scissors cut paper therefore scissors win over paper. Scissors lose against rock.
            <br/>
            Paper covers rock therefore paper wins over rock. Paper loses against Scissors.
            <br/>
            If the player and the computer  make the same selectoion, there is tie.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


