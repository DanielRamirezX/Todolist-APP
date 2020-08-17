import {ListaItem} from './lista-item.model';

export class Lista {
 id: number;
 titulo: string;
 creadaEn: Date;
 terminadaEn: Date;
 completado: boolean;
 items: ListaItem[];

 constructor( titulo: string) {
     this.titulo = titulo;
     this.creadaEn = new Date();
     this.completado = false;
     this.items = [];

     this.id = new Date().getTime();
 }

}
