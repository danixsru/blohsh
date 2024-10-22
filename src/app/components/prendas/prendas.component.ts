import { Component } from '@angular/core';
import { Prenda, PrendasService } from '../../services/prendas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prendas',
  templateUrl: './prendas.component.html',
  styleUrl: './prendas.component.css'
})
export class PrendasComponent {
  prendas: Prenda[]=[];
  term: string = '';

  constructor(
    private _prendasService:PrendasService, 
    private router:Router, 
    private route:ActivatedRoute){
  }

  verPrenda(idx:number){
    const index = this.prendas.indexOf(this.prendas[idx]);
    this.router.navigate(['/prenda', idx]);
    console.log(idx);
  }

  ngOnInit():void{
    this.prendas = this._prendasService.getPrendas();
  }

}
