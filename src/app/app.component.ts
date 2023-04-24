import { Component, OnInit } from '@angular/core';
interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image?:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title="Que miras bobo";
  public ArregloTarjetas: Tarjeta[]=[]
  ngOnInit(): void {
    this.ArregloTarjetas=[
      {titulo:"Video 1",subtitulo:"Subtitulo Video 1",image:"https://uisek.edu.ec/wp-content/uploads/2021/02/joe-carrion.jpg"},
      {titulo:"Video 2",subtitulo:"Subtitulo Video 2",image:"https://uisek.edu.ec/wp-content/uploads/2021/02/joe-carrion.jpg"},
      {titulo:"Video 2",subtitulo:"Subtitulo Video 2",image:"https://uisek.edu.ec/wp-content/uploads/2021/02/joe-carrion.jpg"},
    ]
  }
}