import { IGame } from 'app/shared/model/game.model';

export interface IPlataforma {
  id?: number;
  nome?: string;
  game?: IGame;
}

export class Plataforma implements IPlataforma {
  constructor(public id?: number, public nome?: string, public game?: IGame) {}
}
