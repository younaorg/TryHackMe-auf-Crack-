import { Game } from "../interfaces";

// eslint-disable-next-line init-declarations
export let game: Game;
export const setGame = (update: Game) => {
  console.log("New Game initialized");
  game = update;
};
