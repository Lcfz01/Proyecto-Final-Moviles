import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-qr',
  templateUrl: './lista-qr.page.html',
  styleUrls: ['./lista-qr.page.scss'],
})
export class ListaQrPage implements OnInit {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
  }
  async logout() {
    try {
      await this.afAuth.signOut();
      console.log('Logout exitoso');
      // Navegar a la página de login
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  }
}

