import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Goku'];

  borrarHeroe(index:number): void{
    this.heroes.splice(index, 1);
  }
}
