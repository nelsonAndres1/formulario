import { Component, OnInit } from '@angular/core';
import { Formulario } from '../models/formulario';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormularioService } from '../services/formulario.service';
import { Router } from '@angular/router';
import { Nomin150Service } from '../services/nomin150.service';
import { Nomin02 } from '../models/nomin02';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inicio-formulario',
  templateUrl: './inicio-formulario.component.html',
  styleUrls: ['./inicio-formulario.component.css'],
  providers: [FormularioService, Nomin150Service]
})
export class InicioFormularioComponent implements OnInit {

  data: any;
  bandera: any;
  autorizo=true;
  constructor(private _formulario: FormularioService, private _nomin150service: Nomin150Service, private route: Router) { }

  ngOnInit(): void {

  }
  getGener02(pclave: any) {

    const keyword = pclave.target.value;
    if (keyword.length > 0) {
      const search = this._formulario.searchGener02(keyword).then(response => {
        this.data = response;
        console.log(this.data);
      })
    } else {

      console.log("aquiiiiiiiiiiiiiiiiiiiiiiii")
    }


  }
  authorize() {
    this.autorizo=false;
  }
  getDatos(result: any) {

    this._nomin150service.existe(new Nomin02(result.docemp)).subscribe(
      response => {
        if (response.bandera == true) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Sus datos ya han sido actualizados!'
          });
        
        } else {
          console.log("si exsite");
          console.log(result);
          this.bandera = true;
          this.route.navigate(['formulario']);
          localStorage.setItem('usuarioConsultado', JSON.stringify(result));
        }
      }
    )
    /*  */
  }

  existe
}
