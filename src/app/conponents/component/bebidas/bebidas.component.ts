import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynamicSlides = [
    {
      id: "1",
      src:'assets/Comidas/bebidas/naturales.jpg',
      alt:'Bebid',
      title:'Bebidas Naturales',
      description:'Té verde, Té de limón, Tamarindo, Fresa, Piña, Pera, Papaya, Mora, Frutas'
    },
    {
      id: "2",
      src:'assets/Comidas/bebidas/gaseosas.jpg',
      alt:'Side 2',
      title:'Gaseosas',
      description:'Coca-cola, Fanta (Naranja,Uva,Kolita), Sprite'
    },
    {
      id: "3",
      src:'assets/Comidas/bebidas/batidos.jpg',
      alt:'Side 3',
      title:'Batidos',
      description:'Fresa, Piña, Pera, Papaya, Mora, Banano (En agua o en leche)'
    },
    {
      id: "4",
      src:'assets/Comidas/bebidas/sAlcohol.jpg',
      alt:'Side 4',
      title:'Bebidas sin alcohol',
      description:'Piña colada, Horchata, Limonada de sandía y menta, Granizado de limón'
    },
    {
      id: "5",
      src:'assets/Comidas/bebidas/alcohol.jpg',
      alt:'Side 4',
      title:'Bebidas con alcohol',
      description:'Cerveza, Vino, Sidra, Ron, Ginebra, Vodka, Whisky'
    },
    {
      id: "6",
      src:'assets/Comidas/bebidas/especial.jpg',
      alt:'Side 4',
      title:'Bebida especial sabor gourmet',
      description:'Una bebida hecha con receta única del restaurante'
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
