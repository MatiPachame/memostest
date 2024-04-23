import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pieza } from '../../clases/pieza';

@Component({
  selector: 'app-pieza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pieza.component.html',
  styleUrl: './pieza.component.css'
})
export class PiezaComponent {
  
  @Input('acavengaelvalordelapieza')
  public pieza: Pieza = new Pieza();

  @Output() salida = new EventEmitter<void>();

  public dorso: string = "https://imgs.search.brave.com/hS-3fAVxnh2IuEhl0DJ3CTst5XyuIHsuZbX-XuezqA0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dGV4dHVyYS1wYXJl/ZC1sYWRyaWxsb18y/My0yMTQ3OTYwMjQ2/LmpwZz9zaXplPTYy/NiZleHQ9anBn";


  public  emitirEvento(): void {
   this.salida.emit(); 
  }
}
