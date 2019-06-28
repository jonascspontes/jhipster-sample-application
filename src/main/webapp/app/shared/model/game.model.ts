import { IGenero } from 'app/shared/model/genero.model';
import { IPlataforma } from 'app/shared/model/plataforma.model';

export interface IGame {
  id?: number;
  nome?: string;
  ano?: number;
  descricao?: string;
  imagemContentType?: string;
  imagem?: any;
  link?: string;
  generos?: IGenero[];
  plataformas?: IPlataforma[];
}

export class Game implements IGame {
  constructor(
    public id?: number,
    public nome?: string,
    public ano?: number,
    public descricao?: string,
    public imagemContentType?: string,
    public imagem?: any,
    public link?: string,
    public generos?: IGenero[],
    public plataformas?: IPlataforma[]
  ) {}
}
