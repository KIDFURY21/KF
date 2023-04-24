import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  public titulo:string='JIJIJA'
  public image:string='https://phantom-marca.unidadeditorial.es/e49bd9dfe4da27d2d1b65de17f3d2476/resize/1320/f/jpg/assets/multimedia/imagenes/2023/04/19/16819160561291.jpg';
  public Titulo: string ="Test";
  @Input() dataEntrante: any;
  constructor(){ }
  ngOnInit() : void{
    this.image="https://uisek.edu.ec/wp-content/uploads/2021/02/joe-carrion.jpg"
  }

}


