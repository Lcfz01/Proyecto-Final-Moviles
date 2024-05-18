import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-qr',
  templateUrl: './lista-qr.page.html',
  styleUrls: ['./lista-qr.page.scss'],
})

export class ListaQrPage implements OnInit {

  items!: Observable<any[]>;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.items = this.firestore.collection('codigosQR').valueChanges();
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

