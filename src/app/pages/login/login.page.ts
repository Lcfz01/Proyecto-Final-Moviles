import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;

  constructor(
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) {
    this.email = '';
    this.password = '';
  }

  async login() {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      this.presentToast('¡Bienvenido!', 'success');
      this.router.navigate(['/lista-qr']);
    } catch (error) {
      this.presentToast('Error: Revise sus credenciales o haga una cuenta', 'danger');
    }
  }

  crearCuenta() {
    this.navCtrl.navigateForward('/crear-cuenta');
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
