import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes:string[]=['SpiderMan','Ironman','Hulk','Thor'];
  heroeBorrado:string='';

  borrarHeroe():void{
    console.log("Borrando...");
    this.heroeBorrado=this.heroes.shift()||"";
  }

}
