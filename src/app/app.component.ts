import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MemotestComponent } from "./componentes/memotest/memotest.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FormsModule, CommonModule, MemotestComponent]
})
export class AppComponent {
  title = 'Memotest';
}
