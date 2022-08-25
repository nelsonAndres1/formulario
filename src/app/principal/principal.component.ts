import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FormularioService } from '../services/formulario.service';
import { Nomin02 } from '../models/nomin02';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [FormularioService]
})

export class PrincipalComponent implements OnInit{
  displayedColumns: string[] = ['Documento', 'Nombre'];

  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  usuarios=[]
  constructor(
   private _formularioService: FormularioService
    
  ) {
    this._formularioService.consultaNomin440(new Nomin02('')).subscribe(
      response=>{
        console.log("Respuesta de uusarios");
        console.log(response);
        this.usuarios=response;
        console.log(this.usuarios);
        console.log(this.usuarios);
      }
    )
   
  }
  ngOnInit(): void {
   
  }
}


