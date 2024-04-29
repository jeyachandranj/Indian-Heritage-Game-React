import Button from '@mui/material/Button';
import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const MultiDialogs = ({ startGame }) => {
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);

  const [playerSize, setPlayerSize] = useState(2);

  const [players, setPlayers] = useState([]);

  const colors = ["red", "green", "blue", "violet"];

  function handleCloseFirstDialog() {
    let temp = [];
    for (let i = 0; i < playerSize; i++) {
      temp.push({
        name: "",
        color: colors[i],
      });
    }

    setPlayers([...temp]);

    setOpenFirstDialog(false);
    setOpenSecondDialog(true);
  }

  function handleCloseSecondDialog() {
    setOpenSecondDialog(false);
    startGame(players);
  }

  function handlePlayersValues(index, key, value) {
    const updateItems = [...players];
    updateItems[index] = { ...updateItems[index], [key]: value };
    setPlayers(updateItems);
  }

  return (
    <>
      <Button onClick={() => setOpenFirstDialog(true)} variant='contained'>Play</Button>
      <Dialog open={openFirstDialog} onClose={() => setOpenFirstDialog(false)}>
        <DialogTitle></DialogTitle>
        <DialogContent>
            <div className="input-field">
            <label>How Many Players want to Player</label>
          <Select
            onChange={(e) => setPlayerSize(e.target.value)}
            value={playerSize}
          >
            {colors.map((item, index) => {
              if (index > 0) {
                return (
                  <MenuItem key={index} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                );
              }
            })}
          </Select>
            </div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFirstDialog} variant="contained">Next</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openSecondDialog}
        onClose={() => setOpenSecondDialog(false)}
        maxWidth='300px'
      >
        <DialogContent>
            <div className="players-box">
          {players.map((item, index) => {
            return (
              <div key={index} className="input-field">
                <TextField  label={`player ${index + 1}`} variant="outlined" onChange={(e) =>
                    handlePlayersValues(index, "name", e.target.value)
                  }/>

                <Select
                  value={item.color}
                  onChange={(e) =>
                    handlePlayersValues(index, "color", e.target.value)
                  }
                >
                  {colors.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            );
          })}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSecondDialog} variant="contained" className="btn-primary">Play</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
