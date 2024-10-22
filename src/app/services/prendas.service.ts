import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrendasService {

  constructor() { }

  private prendas: Prenda[]=[
    {
      id: 1,
      nombre: "HIT ME HARD AND SOFT WORLD TOUR Pullover Hoodie",
      descripcion: "Sudadera",
      precio: 100,
      foto: './assets/sudadera1.png'
    },
    {
      id: 2,
      nombre: "Billie Photo Tour Tee",
      descripcion: "Camiseta",
      precio: 45,
      foto: './assets/camiseta1.png'
    },
    {
      id: 3,
      nombre: "DO YOU KNOW HOW TO BEND? Thermal Long Sleeve",
      descripcion: "Suéter",
      precio: 60,
      foto: './assets/sueter1.png'
    },
    {
      id: 4,
      nombre: "Billie Yellow Tour Zip Hoodie",
      descripcion: "Sudadera",
      precio: 110,
      foto: './assets/sudadera2.png'
    },
    {
      id: 5,
      nombre: "Shark Raglan Tee",
      descripcion: "Camiseta",
      precio: 45,
      foto: './assets/camiseta2.png'
    },
    {
      id: 6,
      nombre: "DO YOU KNOW HOW TO BEND? Ringer Tee",
      descripcion: "Camiseta",
      precio: 45,
      foto: './assets/camiseta3.png'
    }
    ];

    getPrendas(){
      return this.prendas;
    }

    getPrenda(idx: number){
      return this.prendas[idx];
    }
}

export interface Prenda{
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  foto: string;
}