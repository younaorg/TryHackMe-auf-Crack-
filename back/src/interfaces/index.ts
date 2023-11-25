export interface Game {
  prefix: string;
  pool: FlagPool;
}

export interface Flag {
  flag: string;
  team: 0 | 1;
  submitted: boolean;
}

type FlagPool = Flag[];
