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
  estadoGanador = false;
  estadoPerdedor = false;
  constructor() {
    this.palabraOculta = '_ '.repeat( this.palabra.length );
  }

  comprobar(letra) {
    const existLetra = this.existeLetra(letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for (let index = 0; index < this.palabra.length; index++) {
      const element = this.palabra[index];
      if ( element === letra) {
        palabraOcultaArr[index] = letra;
      }
    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    const ganar = this.ganaste();
  }

  existeLetra(letra) {
    return ( this.palabra.indexOf(letra) >= 0 ) ? this.intentos : this.intentos++;
  }

  ganaste() {
    console.log('la palabra oculta es ' + this.palabraOculta.split(' ').join(''));
    if ( this.intentos === 9 ) {
      this.estadoPerdedor = true;
      console.log('perdiste');
    } else if ( this.palabra === this.palabraOculta.split(' ').join('')) {
      this.estadoGanador = true;
      console.log('ganaste');
    }
  }
}
