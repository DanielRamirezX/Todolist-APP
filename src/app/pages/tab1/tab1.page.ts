import { Component } from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Lista} from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController ) {}

  async agregarLista() {
    // this.router.navigateByUrl('/tabs/tab1/agregar');

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          handler: () => console.log('Cancelar')
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            console.log( data );
            if ( data.titulo.lenght === 0 ) {
              return;
            }

            const listaId = this.deseosService.crearLista( data.titulo );

            this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);

          }
        }
      ]
    });

    alert.present();

  }


}
