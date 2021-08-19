import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-encuentra-numero',
  templateUrl: './encuentra-numero.component.html',
  styles: [
  ]
})
export class EncuentraNumeroComponent implements OnInit {

  public numeroAleatorio = Math.floor(Math.random()*100) + 1;

  public intentos: any;
  public ultimo_resultado: any;
  public mayor_menor : any;

  public guessSubmit: any;
  public guessField: any;
  public botonReinicio: any;

  public contador_intentos = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.intentos = document.querySelector('.intentos');
    this.ultimo_resultado = document.querySelector('.ultimo-resultado');
    this.mayor_menor = document.querySelector('.mayor-o-menor');
    this.guessSubmit = document.querySelector('.guessSubmit'); 
    this.guessField = document.querySelector('.guessField');
    this.botonReinicio = document.querySelector('.reiniciar_juego');
  }

  probar_numero( forma: NgForm ){

    console.log(forma.value.guess_number + '  ' + this.numeroAleatorio );
    console.log(this.ultimo_resultado);

    if(this.contador_intentos === 0){
      this.intentos.textContent = 'Anteriores intentos: ' + forma.value.guess_number + ' ';
    }else{
      console.log(forma.value.guess_number);
      this.intentos.textContent += forma.value.guess_number + ' ';
    }
    
    if(forma.value.guess_number ===''){
      this.intentos.textContent += '0 ';
    }


    if(forma.value.guess_number === this.numeroAleatorio){
      this.ultimo_resultado.classList.add('alert','alert-success');
      this.ultimo_resultado.textContent = 'Felicidades! Lo adivinastes!';
      this.gameOver();

    }else if(this.contador_intentos === 10){

      this.ultimo_resultado.textContent = '!!!GAME OVER!!!';
      this.gameOver();

    }else{

      this.ultimo_resultado.textContent = '¡Incorrecto!';
      
      if (forma.value.guess_number > this.numeroAleatorio) {
          this.mayor_menor.textContent = 'El número introducido es menor!';
      } else if (forma.value.guess_number < this.numeroAleatorio) {
          this.mayor_menor.textContent = 'El número introducido es mayor!';
      }

    }

    this.contador_intentos++;
  }

  gameOver(){
    this.mayor_menor.textContent = '';
    this.guessSubmit.classList.add('d-none');
    this.guessField.disabled = true;
    this.botonReinicio.classList.remove('d-none');
  }

  resetGame() {
    this.contador_intentos = 0;

    const resetParas = document.querySelectorAll('.resultados p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    this.botonReinicio.classList.add('d-none');

    this.guessSubmit.classList.remove('d-none');
    this.guessField.disabled = false;

    this.ultimo_resultado.classList.remove('alert','alert-success');
    this.guessField.value = '';
    this.guessField.focus();

    this.numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }

}
