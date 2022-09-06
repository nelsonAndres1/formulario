import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FormularioService } from '../services/formulario.service';
import { ReporteService } from '../services/reporte.service';
import { Nomin02 } from '../models/nomin02';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [FormularioService, ReporteService]
})

export class PrincipalComponent implements OnInit{
  displayedColumns: string[] = ['Documento', 'Nombre'];

  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  usuarios:any;
  filterPost = '';
  constructor(
   private _formularioService: FormularioService,
  private _reporteService: ReporteService
  ) {
    this._reporteService.reporte(new Nomin02('')).subscribe(
      response=>{
        console.log(response);
        this.usuarios=response;
      }
    );
  }
  ngOnInit(): void {
   
  }
}


