import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string;
  password: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

  async registro() {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      console.log('Registro exitoso', user);
      this.router.navigate(['/lista-qr']);
    } catch (error) {
      console.error('Error en el registro', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  }
}


