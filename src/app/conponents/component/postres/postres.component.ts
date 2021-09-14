import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {

  constructor() { }


  dynamicSlides = [
    {
      id: "1",
      src:'assets/Comidas/postres/galletas.jpg',
      alt:'',
      title:'Galletas',
      description:'Galletas (Caseras)'
    },
    {
      id: "2",
      src:'assets/Comidas/postres/gelatina.jpg',
      alt:'Side 2',
      title:'Gelatina',
      description:'Fresa, Limón, Uva'
    },
    {
      id: "3",
      src:'assets/Comidas/postres/granizado.jpg',
      alt:'Side 3',
      title:'Granizados',
      description:'Convencionales o con Helado'
    },
    {
      id: "4",
      src:'assets/Comidas/postres/helado.jpg',
      alt:'Side 4',
      title:'Helado',
      description:'Fresa. Chocolate, Vainilla, Chicle'
    },
    {
      id: "5",
      src:'assets/Comidas/postres/pasteles.jpg',
      alt:'Side 5',
      title:'Pasteles',
      description:'Seco, Con cubierta (La que desee)'
    },
    {
      id: "6",
      src:'assets/Comidas/postres/rosquillas.jpg',
      alt:'Side 6',
      title:'Repostería',
      description:'Rosquillas, Pan dulce, Cachos (Dulce de leche), Flautas dulces'
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


  ngOnInit(): void {
  }

  

}
