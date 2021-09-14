import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida-rapida',
  templateUrl: './comida-rapida.component.html',
  styleUrls: ['./comida-rapida.component.css']
})
export class ComidaRapidaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynamicSlides = [
    {
      id: "1",
      src:'assets/Comidas/comidasRapidas/hamburguesa.png',
      alt:'',
      title:'Hamburguesas',
      description:'Convencional (Carne, Pollo, Pescado, Vegetariana)'
    },
    {
      id: "2",
      src:'assets/Comidas/comidasRapidas/papas.jpg',
      alt:'Side 2',
      title:'Papas',
      description:'Fritas, Tostadas, Gajo'
    },
    {
      id: "3",
      src:'assets/Comidas/comidasRapidas/pescado.jpg',
      alt:'Side 3',
      title:'Dedos de pescado',
      description:'Dedos de pescado con acompañamientos (Papas fritas o ensalada)'
    },
    {
      id: "4",
      src:'assets/Comidas/comidasRapidas/pizza.png',
      alt:'Side 4',
      title:'Pizza',
      description:'Convencional (Jamon y queso), Napolitana(Conv + hongos) Hawaiana (Conv + piña)'
    },
    {
      id: "5",
      src:'assets/Comidas/comidasRapidas/pollo.jpg',
      alt:'Side 4',
      title:'Pollo Frito',
      description:'Pollo frito (Salsa BBQ, Salsa Picante, Mostaza, Mostaza dulce)'
    },
    {
      id: "6",
      src:'assets/Comidas/comidasRapidas/tacos.jpg',
      alt:'Side 4',
      title:'Tacos',
      description:'Convencionales'
    },
  ]

  customOptions: any =   {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

}
