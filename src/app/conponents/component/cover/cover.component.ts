import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {

  }
 
 

 isReadMore = true

 showText() {
    this.isReadMore = !this.isReadMore
 }

}
