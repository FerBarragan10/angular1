import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  cambio:boolean=true;
  clase:string="card text-white bg-dark mb-3";
  leyenda:string="cambiarClaseColor";
  claseButton:string="btn btn-dark btn-block";
  frase:any={
    mensaje:"a la gilada ni cabida, yo la miro desde arriba",
    autor:"un turro"
  }
  mostrar:boolean=true;
  heroes:string[]=['superman','batman','spiderman','flash'];
  constructor() { }

  ngOnInit() {
  }
  cambiarColorACard(){
    if(this.cambio){
      this.clase="card text-white bg-success mb-3";
      this.claseButton="btn btn-success btn-block";
      this.leyenda="te re cabio boton";
      this.cambio=!this.cambio;
    }
    else{
      this.clase="card text-white bg-dark mb-3";
      this.claseButton="btn btn-dark btn-block";
      this.cambio=!this.cambio;
    }
    }
    

 mostrarUOcultar(){
   this.mostrar=!this.mostrar;
 }
}
