import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.email = '';
    this.password = '';
  }

  async login() {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Inicio de sesión exitoso', user);
      // Navegar a la página principal o dashboard
      this.router.navigate(['/lista-qr']);
    } catch (error) {
      console.error('Error en el inicio de sesión', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  }

  crearCuenta() {
    // Navegar a la página de creación de cuenta
    this.navCtrl.navigateForward('/crear-cuenta');
  }
}
