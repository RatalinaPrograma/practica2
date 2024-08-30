import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  comuna: string = "lo espejo";
  edad: number = 25;
  nombreUsuario: string = "Angela";

  arreglo: any = {
    nombre: 'José',
    apellido: 'Gutierrez',
    edad: 29
  }

  lista: any = [
    {
      id: 1,
      nombre: 'María'
    },
    {
      id: 2,
      nombre: 'José'
    },
    {
      id: 3,
      nombre: 'Juan'
    }
  ]

  constructor(private router:Router, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }
  irPagina(){
    //creamos la variable de contexto
    let navigationextras: NavigationExtras = {
      state:{
        com: this.comuna,
        ed: this.edad,
        user: this.nombreUsuario
      }
    }
    //crear la logica de programación que requiero
    //this.presentAlert('Titulo alerta','Mensaje de la Alerta');
    this.presentToast('bottom');
    this.router.navigate(['/agregar'], navigationextras);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hola mundo',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }

  async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
