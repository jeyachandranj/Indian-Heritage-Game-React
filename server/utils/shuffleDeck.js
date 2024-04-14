import { players } from "../constants/ipl.js";

export const shuffleDeck = () => {
  const n = players.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [players[i], players[j]] = [players[j], players[i]];
  }
  return players;
};
