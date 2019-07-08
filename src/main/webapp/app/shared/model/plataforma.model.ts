import { IGame } from 'app/shared/model/game.model';

export interface IPlataforma {
  id?: number;
  nome?: string;
  games?: IGame[];
}

export class Plataforma implements IPlataforma {
  constructor(public id?: number, public nome?: string, public games?: IGame[]) {}
}
