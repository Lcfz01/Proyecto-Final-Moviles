import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';


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
    private firestore: AngularFirestore,
    private toastController: ToastController
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
  addItem() {
    const newItem = {
      codigo: this.generateCode(),
      status: 'Sin generar'
    };

    this.firestore.collection('codigosQR').add(newItem)
      .then(() => {
        this.presentToast('Elemento agregado', 'success');
        //Mostrar mensaje
      })
      .catch(error => {
        this.presentToast('Error al agregar el elemento, intente más tarde', 'danger');
      });
  }

  generateCode(): String{
    const now = new Date();
    const uniqueString = now.toISOString().replace(/[-:.TZ]/g, '');
    return uniqueString;
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

