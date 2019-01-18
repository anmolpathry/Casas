import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';
import { InformacionPage } from '../informacion/informacion';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  info = InformacionPage;
  fav = FavoritosPage;

  favoritos = [];

  Casas = [
    {
    Colonia: "Barrio Analco",
    Precio: "$3,900,000",
    Imagen:"../assets/Casa1.jpg",
    Recamaras: "5",
    Banos: "3",
    Estacionar: "4",
    Tiempo: "50 años"
  },
  {
    Colonia: "Residencia Puerta de Hierro",
    Precio: "$14,490,000",
    Imagen:"../assets/Casa2.jpg",
    Recamaras: "4",
    Banos: "4",
    Estacionar: "3",
    Tiempo: "2 años"
  },
  {
    Colonia: "Constitucion",
    Precio: "$1,120,000",
    Imagen:"../assets/Casa3.jpg",
    Recamaras: "3",
    Banos: "3",
    Estacionar: "1",
    Tiempo: "0 años"
  },
  {
    Colonia: "Bugambilias 1ra Secc",
    Precio: "$7,490,000",
    Imagen:"../assets/Casa4.jpg",
    Recamaras: "4",
    Banos: "5",
    Estacionar: "4",
    Tiempo: "5 años"
  },

  {
    Colonia: "Bugambilias",
    Precio: "$7,400,000",
    Imagen:"../assets/Casa5.jpg",
    Recamaras: "5",
    Banos: "5",
    Estacionar: "4",
    Tiempo: "0 años"
  },

  {
    Colonia: "El Secreto Residencial",
    Precio: "$2,030,000",
    Imagen:"../assets/Casa6.jpg",
    Recamaras: "3",
    Banos: "3",
    Estacionar: "2",
    Tiempo: "2 años"
  },

  {
    Colonia: "Alcazar",
    Precio: "$14,500,000",
    Imagen:"../assets/Casa7.jpg",
    Recamaras: "5",
    Banos: "5",
    Estacionar: "6",
    Tiempo: "0 años"
  },

  {
    Colonia: "Colinas de San Javier",
    Precio: "$24,000,000",
    Imagen:"../assets/Casa8.jpg",
    Recamaras: "5",
    Banos: "4",
    Estacionar: "6",
    Tiempo: "20 años"
  },
  {
    Colonia: "Bosque de Los Lagos",
    Precio: "$19,900,000",
    Imagen:"../assets/Casa9.jpg",
    Recamaras: "3",
    Banos: "5",
    Estacionar: "6",
    Tiempo: "0 años"
  },
  {
    Colonia: "Solares",
    Precio: "$4,290,000",
    Imagen:"../assets/Casa10.jpg",
    Recamaras: "3",
    Banos: "4",
    Estacionar: "3",
    Tiempo: "0 años"
  }
  
];


ClickInfo(c){
 this.navCtrl.push(this.info, {Casa: c, favoritos: this.favoritos});
}

ClickFav(){
  this.navCtrl.push(this.fav, {favoritos: this.favoritos});
}

}

