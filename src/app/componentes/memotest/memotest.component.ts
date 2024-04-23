import { Component } from '@angular/core';
import { Pieza } from '../../clases/pieza';
import { CommonModule } from '@angular/common';
import { PiezaComponent } from '../pieza/pieza.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-memotest',
    standalone: true,
    templateUrl: './memotest.component.html',
    styleUrl: './memotest.component.css',
    imports: [CommonModule, PiezaComponent, FormsModule]
})
export class MemotestComponent {
    public piezas: Array<Pieza> = new Array<Pieza>();
    public dorso: string ='';
    

    constructor(){
      let numeros:Number[] = new Array<Number>();
      

      let cantPiezas = 16;
      while(numeros.length < 16){
        let dorso = 'https://img.freepik.com/foto-gratis/textura-metalica-sucia_1048-4784.jpg';
        
        let valor = Math.floor(Math.random() * cantPiezas/2);
        //Filter metodo de array de javascript, de nuestro array se le pasa una condicion y trae los elementos del array que cumplan esa condicion
        //if(valor< (cantPiezas/2) && numeros.filter(x=>{ return x == valor;}).length<2) Forma 1
        if(valor< (cantPiezas/2) && numeros.filter(x=>x == valor).length<2){ //Forma 2
          numeros.push(valor);
        }
      }
      
      numeros.forEach(element => {
        let imagen = "";
        switch(element){
          case 0:
            imagen = 'https://www.100daysofrealfood.com/wp-content/uploads/2023/09/shutterstock_23429146.jpg';
            break;
          case 1:
              imagen = 'https://cdn.britannica.com/86/75886-050-B481C97E/Apricots.jpg;';
              break;
          case 2:
            imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCy3oYbyuVFpu_1gPqRsxYmFnuhD8TyY33w&s';
            break;
          case 3: 
            imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkZHO6tA9kx87NitXvbqY0xKNfYIwUm3_2KYVV3FoHQ&s';
            break;  
        }
           
        this.piezas.push({imagen: imagen, descubierta: false, seleccionada:false});


      });


    }

    validar(){

      let sel = this.piezas.filter(x=>x.seleccionada && !x.descubierta);
      if(sel.length == 2){
        sel[0].seleccionada = false;
        sel[1].seleccionada = false;
        sel[0].descubierta = sel[1].imagen == sel[0].imagen;
        sel[1].descubierta = sel[1].imagen == sel[0].imagen;

      }

    }


}
