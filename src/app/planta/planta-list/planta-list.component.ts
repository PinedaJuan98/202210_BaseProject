import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  ngOnInit(): void {
    this.getPlantas();
  }

  get darPlantasInterior(): number{
    let totalInterior: number = 0;

    for(let index = 0; index <this.plantas.length; index ++)
    {
      let planta: Planta = this.plantas[index];
      if(planta.tipo == "Interior")
      {
        totalInterior+=1;
      }
    }

    return totalInterior;
  }

  get darPlantasExterior(): number{
    let totalExterior: number = 0;

    for(let index = 0; index <this.plantas.length; index ++)
    {
      let planta: Planta = this.plantas[index];
      if(planta.tipo == "Exterior")
      {
        totalExterior+=1;
      }
    }

    return totalExterior;
  }

}
