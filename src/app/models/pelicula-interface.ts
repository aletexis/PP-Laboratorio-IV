import { ActorInterface } from './actor-interface'

export interface PeliculaInterface {
    id?:string;
    nombre?:string;
    tipo?:string;
    fecha_de_estreno?:string;
    foto_pelicula?:string;
    cantidad_publico?:number;
    actor?:ActorInterface;
}
