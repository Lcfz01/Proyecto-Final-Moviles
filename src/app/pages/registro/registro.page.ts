import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string;
  password: string;

  constructor(private afAuth: AngularFireAuth, private router: Router,private toastController: ToastController) {
    this.email = '';
    this.password = '';
    
  }

  ngOnInit() {
  }

  async registro() {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      this.presentToast('Registrado con éxito ¡Bienvenido!', 'success');
      this.router.navigate(['/lista-qr']);
    } catch (error) {
      this.presentToast('Error en el registro', 'danger');
    }
  }
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }
}


