import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '../Typography/styles'
import Button from '../Button'
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-input": {
        color: "white"
      },
      "& .MuiInputLabel-root": {
        color: "white"
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#EF7D00"
      },
      "&:hover .MuiInputLabel-root": {
        color: "#EF7D00"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#EF7D00"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#ad6813"
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#ad6813"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ad6813"
      }
    }
});

const ModalEditHostStatus = ({id, title, modalIsOpen, setIsOpen}) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(0)
  const [displayMsg, setDisplayMsg] = useState(false)
  const storagedToken = localStorage.getItem('@App:token');
  const api = axios.create({
    baseURL: 'http://201.49.62.134',
  });

  api.defaults.headers.Authorization = `Token ${storagedToken}`;

    function closeModal() {
        setIsOpen(false);
    }

    function handleEdit(){
      api.patch('/api/vulnerability/274/asset/20/update$', {
        status: checked
      })
      setDisplayMsg(true)
    }

    useEffect(() => {
      if(modalIsOpen === false) {
        setDisplayMsg(false)
      }
    }, [modalIsOpen])

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(43, 42, 82, 0.75)',
                color: '#FFF',
                zIndex: 1,
            },
            content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                border: '1px solid #ccc',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                background: '#27273f',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
                width: 'auto',
                minWidth: '40%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }
            }}
            contentLabel="Example Modal"
        >
        <Typography  onClick={() => setIsOpen(false)}
            variant='h4' style={{margin: '0 1rem 1rem auto', cursor: 'pointer'}}>
            X
        </Typography>    
        <Typography variant='subtitle' style={{marginBottom: '2rem'}}>
            {title}
        </Typography>
        {displayMsg === true ? 
            <div>Foi alterada para corrigida <br /><br />
            </div>
         :
          <FormControl className={classes.root}>
              <InputLabel id="demo-simple-select-helper-label">Selecione a op????o</InputLabel>
              <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={checked}
                  label="Selecione a op????o"
                  onChange={(e) => setChecked(e.target.value)}
              >
              <MenuItem value={0}>J?? foi corrigida</MenuItem>
              <MenuItem value={1}>Ainda n??o foi corrigida</MenuItem>
              </Select>
              <Button onClick={() => handleEdit()}
                style={{background: '#248f42', marginTop: '2rem'}}
              >Confirmar</Button>


          </FormControl>
        }
        </Modal>
    )
}

export default ModalEditHostStatus