import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //Atributos
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  resultado: String = '';
  //Método
  calcularIMC() {
    this.imc = this.peso / (this.altura * this.altura);
    if (this.imc < 18.5) {
      this.resultado = "Baixo peso.";
    } else if (this.imc <= 25) {
      this.resultado = "Normal";
    }
    else if (this.imc <= 30) {
      this.resultado = "Sobrepeso";
    } else {
      this.resultado = "Obesidade";
    }
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> f9bd205a72625d407e58f94fca26f27044e7a9ba
