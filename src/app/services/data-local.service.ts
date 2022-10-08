import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(private navCtrl:NavController) { }

  async guardarRegistro(format:string,content:string)
  {
    const nuevoRegistro = new Registro(format,content)
    console.log(nuevoRegistro);
  
    //Tarea 1 debeen guardar los registro en la memoria del equipo.

    this.abrirRegistro(nuevoRegistro)



  }

  abrirRegistro(registro:Registro)
  {
    this.navCtrl.navigateForward('/tabs/tab2');
    
    switch(registro.type){


      case 'http':
        //Tarea 2 Abrir el registro en el navegador nativo
        //del dispositivo.
        console.log("Url:",registro);
      case 'geo':
        console.log("GEO",registro);
        //Abrir el mapa
        break;

    }
  }
}
