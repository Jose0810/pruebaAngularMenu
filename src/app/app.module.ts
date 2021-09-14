

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComidaRapidaComponent } from './conponents/component/comida-rapida/comida-rapida.component';
import { PostresComponent } from './conponents/component/postres/postres.component';
import { BebidasComponent } from './conponents/component/bebidas/bebidas.component';
import { CoverComponent } from './conponents/component/cover/cover.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    ComidaRapidaComponent,
    PostresComponent,
    BebidasComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
