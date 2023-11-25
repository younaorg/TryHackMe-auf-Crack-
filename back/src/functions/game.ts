import { Flag, Game } from "../interfaces";
import { createFlag } from "./flag";

export function createGame(prefix: string, flagCount: number): Game {
  const flagPool: Flag[] = [];

  // eslint-disable-next-line no-plusplus
  for (let team: 0 | 1 = 0; team < 2; team++) {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < flagCount; index++) {
      const flag: Flag = {
        flag: createFlag(prefix),
        team: team as 0 | 1,
        submitted: false,
      };

      flagPool.push(flag);
    }
  }

  const game: Game = {
    prefix,
    pool: flagPool,
  };

  return game;
}

export const byTeam = (teamId: number) => (flag: Flag) => flag.team === teamId;
export const byTeamAndSolved = (teamId: number) => (flag: Flag) => flag.team === teamId && flag.submitted;
