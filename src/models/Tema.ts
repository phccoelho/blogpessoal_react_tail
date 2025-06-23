import type Postagem from "./Postagem";
 
export default interface Tema{
    id: number;
    descricao: String;
    postagem?: Postagem[] | null;
}