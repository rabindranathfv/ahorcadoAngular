import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  palabra = 'RABINDRANATH';
  palabraOculta = '';
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  intentos = 0;
  constructor() {
    this.palabraOculta = '_ '.repeat( this.palabra.length );
  }

  comprobar(letra) {
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for (let index = 0; index < this.palabra.length; index++) {
      const element = this.palabra[index];
      if ( element === letra ) {
        palabraOcultaArr[index] = letra;
      }

    }
    this.palabraOculta = palabraOcultaArr.join(' ');
  }
}
