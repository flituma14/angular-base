import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'ContadorApp';
  public numero: number = 0;


  public sumar():void{
    this.numero++;
  }

  public restar():void{
    this.numero--;
  }

}
