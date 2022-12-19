import { Component, OnInit, Renderer2 } from '@angular/core';
import { Formulario } from '../models/formulario';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormularioService } from '../services/formulario.service';
import { Router } from '@angular/router';
import { Nomin150Service } from '../services/nomin150.service';
import { Barrio } from '../models/barrio';
import Swal from 'sweetalert2';
@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css'],
	providers: [FormularioService, Nomin150Service]
})
export class FormularioComponent implements OnInit {
	selected = 'option2';
	public formulario: Formulario;
	public forma!: FormGroup;
	public banDire: any = false;
	public direccion: any;
	datos: any;
	data: any;
	bandera: any = false;
	dirpart1: string = "";
	dirpart2: string = "";
	dirpart3: string = "";
	dirpart4: string = "";
	dirpart5: string = "";
	dirpart6: string = "";
	dirpart7: string = "";
	dirpart8: string = "";
	dirpart9: string = "";
	dirpart10: string = "";
	dirpart11: string = "";
	dirpart12: string = "";
	dirpart13: string = "";
	dirpart14: string = "";
	dirpart15: string = "";
	dirpart16: string = "";


	menum_dirpart1 = [
		{ value: "AU", label: "AUTOPISTA" },
		{ value: "AV", label: "AVENIDA" },
		{ value: "AC", label: "AVENIDA CALLE" },
		{ value: "AK", label: "AVENIDA CARRERA" },
		{ value: "CL", label: "CALLE" },
		{ value: "CR", label: "CARRERA" },
		{ value: "CT", label: "CARRETERA" },
		{ value: "CV", label: "CIRCUNVALAR" },
		{ value: "DG", label: "DIAGONAL" },
		{ value: "TV", label: "TRANSVERSAL" },
		{ value: "TC", label: "TRONCAL" },
		{ value: "VT", label: "VARIANTE" },
		{ value: "VI", label: "VÍA" },
	];

	menum_dirpart3 = [
		{ value: "A", label: "A" },
		{ value: "B", label: "B" },
		{ value: "C", label: "C" },
		{ value: "D", label: "D" },
		{ value: "E", label: "E" },
		{ value: "F", label: "F" },
		{ value: "G", label: "G" },
		{ value: "H", label: "H" },
		{ value: "I", label: "I" },
		{ value: "J", label: "J" },
		{ value: "K", label: "K" },
		{ value: "L", label: "L" },
		{ value: "M", label: "M" },
		{ value: "N", label: "N" },
		{ value: "O", label: "O" },
		{ value: "P", label: "P" },
		{ value: "Q", label: "Q" },
		{ value: "R", label: "R" },
		{ value: "S", label: "S" },
		{ value: "T", label: "T" },
		{ value: "U", label: "U" },
		{ value: "V", label: "V" },
		{ value: "X", label: "X" },
		{ value: "Y", label: "Y" },
		{ value: "Z", label: "Z" },
	];

	menum_dirpart4 = [
		{ value: "BIS", label: "BIS" },
		{ value: "1", label: "1" },
		{ value: "2", label: "2" },
	];

	menum_dirpart5 = [
		{ value: "NORTE", label: "NORTE" },
		{ value: "OESTE", label: "OESTE" },
		{ value: "SUR", label: "SUR" },
	];

	menum_dirpart11 = [
		{ value: "BQ", label: "BLOQUE" },
		{ value: "EQ", label: "ESQUINA" },
		{ value: "IN", label: "INTERIOR" },
		{ value: "KM", label: "KILÓMETRO" },
		{ value: "MZ", label: "MANZANA" },
		{ value: "MD", label: "MÓDULO" },
		{ value: "PI", label: "PISO" },
		{ value: "PL", label: "PLANTA" },
		{ value: "SC", label: "SECTOR" },
		{ value: "SM", label: "SUPERMANZANA" },
		{ value: "TO", label: "TORRE" },
	];

	menum_dirpart13 = [
		{ value: "AP", label: "APARTAMENTO" },
		{ value: "BG", label: "BODEGA" },
		{ value: "CS", label: "CASA" },
		{ value: "CN", label: "CONSULTORIO" },
		{ value: "DP", label: "DEPOSITO" },
		{ value: "LC", label: "LOCAL" },
		{ value: "LM", label: "LOCAL MEZZANINE" },
		{ value: "LT", label: "LOTE" },
		{ value: "MN", label: "MEZZANINE" },
		{ value: "OF", label: "OFICINA" },
		{ value: "PN", label: "PENT-HOUSE" },
		{ value: "PD", label: "PREDIO" },
		{ value: "PU", label: "PUESTO" },
		{ value: "SS", label: "SEMISÓTANO" },
		{ value: "SO", label: "SÓTANO" },
		{ value: "ST", label: "SUITE" },
		{ value: "TZ", label: "TERRAZA" },
		{ value: "UN", label: "UNIDAD" },
	];

	menum_dirpart15 = [
		{ value: "AD", label: "ADMINISTRACIÓN" },
		{ value: "AE", label: "AEROPUERTO" },
		{ value: "AG", label: "AGRUPACIÓN" },
		{ value: "AL", label: "ALTILLO" },
		{ value: "BR", label: "BARRIO" },
		{ value: "BL", label: "BULEVAR" },
		{ value: "CU", label: "CÉLULA" },
		{ value: "CE", label: "CENTRO COMERCIAL" },
		{ value: "CQ", label: "CIRCULAR" },
		{ value: "CD", label: "CIUDADELA" },
		{ value: "CO", label: "CONJUNTO RESIDENCIAL" },
		{ value: "COR", label: "CORREGIMIENTO" },
		{ value: "CC", label: "CUENTAS CORRIDAS" },
		{ value: "DS", label: "DEPOSITO SÓTANO" },
		{ value: "ED", label: "EDIFICIO" },
		{ value: "EN", label: "ENTRADA" },
		{ value: "ET", label: "ETAPA" },
		{ value: "ES", label: "ESTACIÓN" },
		{ value: "EX", label: "EXTERIOR" },
		{ value: "FI", label: "FINCA" },
		{ value: "GA", label: "GARAJE" },
		{ value: "GS", label: "GARAJE SÓTAN" },
		{ value: "PQ", label: "PARQUE" },
		{ value: "PA", label: "PARQUEADERO" },
		{ value: "PJ", label: "PASAJE" },
		{ value: "PS", label: "PASEO" },
		{ value: "PT", label: "PEATONAL" },
		{ value: "PR", label: "PORTERÍA" },
		{ value: "RP", label: "ROUND POINT (GLORIETA)" },
		{ value: "UL", label: "UNIDAD RESIDENCIAL" },
		{ value: "UR", label: "URBANIZACIÓN" },
		{ value: "ZN", label: "ZONA" }
	
	];

	menum_tipviv = [
		{ value: '3', label: 'FAMILIAR' },
		{ value: '2', label: 'ARRENDADA' },
		{ value: '1', label: 'PROPIA' },
	];

	menum_estrato = [
		{ value: '1', label: 'ESTRATO 1' },
		{ value: '2', label: 'ESTRATO 2' },
		{ value: '3', label: 'ESTRATO 3' },
		{ value: '4', label: 'ESTRATO 4' },
		{ value: '5', label: 'ESTRATO 5' },
		{ value: '6', label: 'ESTRATO 6' },
	];


	datoDireccion: any;
	tipdoc: any;
	tipciu: any;
	tippai: any;
	tipsex: any;
	estado_civil: any;
	raza: any;
	cantidad = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	profesiones: any;
	dataG8: any;
	dataNa: any;
	dataRe: any;
	data216: any;
	grupoSanguineo: any;
	barrios:any=[];
	profesiones2: any;
	bandera_excepcion: any;

	constructor(private renderer: Renderer2, private _formulario: FormularioService, private _nomin150service: Nomin150Service, private route: Router) {
		this.formulario = new Formulario('', '', '', '','', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, '', '', '', '','','','','','','','','','');
		this.datos = localStorage.getItem('usuarioConsultado');
		this.datos = this.datos.replace(/ /g, "");
		this.datos = JSON.parse(this.datos + '');
		console.log("datos!");
		console.log(this.datos);
		this.formulario = this.datos;
		this.datoDireccion = JSON.parse(localStorage.getItem('usuarioConsultado') + '');
		this.formulario.direccion = '';
		this.bandera_excepcion = false;
		if(this.formulario.docemp == '30730465'){
			this.bandera_excepcion = true;
		}
		

		//llamado tipos de documentos
		this._nomin150service.getGener18(this.formulario).subscribe(
			response => {
				this.tipdoc = response;
			}
		);

		//llamado tipos de ciudades

		this._nomin150service.getGener08(this.formulario).subscribe(
			response => {
				console.log("gener18");
				console.log(response);
				this.tipciu = response;
			}
		);

		//llamado a paises

		this._nomin150service.getGener14(this.formulario).subscribe(
			response => {
				this.tippai = response;
				console.log(this.tippai);
			}
		);

		//llamado a sexo

		this._nomin150service.getGener17(this.formulario).subscribe(
			response => {
				this.tipsex = response;
			}
		);

		//llamado a estado civil

		this._nomin150service.getGener15(this.formulario).subscribe(
			response => {
				this.estado_civil = response;
			}
		);

		//llamado a raza

		this._nomin150service.getNomin200(this.formulario).subscribe(
			response => {
				this.raza = response;
			}
		);

		//llamado profesiones

		this._nomin150service.getNomin216(this.formulario).subscribe(
			response => {
				console.log("nomin216");
				this.profesiones = response;
				console.log(response);
			}
		);

		this._nomin150service.get_nomin216(this.formulario).subscribe(
			response => {
				console.log("profesiones");
				this.profesiones2=response;
			}
		)
		
		//llamado grupo sanguineo


		this._nomin150service.getGener19(this.formulario).subscribe(
			response=>{
				console.log("gener19 -  GS");
				this.grupoSanguineo=response;
				console.log(this.grupoSanguineo);
			}
		)
		
	}

	ngOnInit(): void {
		
	}

	getNomin16(pclave: any) {
		const keyword = pclave.target.value;
		if (keyword.length > 0) {
			const search = this._nomin150service.searchNomin216(keyword).then(response => {
				this.data216 = response;
				console.log("respuesta_respuesta!!!");
				console.log(this.data216);
			})
		} else {

		}
	}

	//Ciudad de expedición
	getGener08(pclave: any) {

		const keyword = pclave.target.value;
		const search = this._nomin150service.searchgener08(keyword).then(response => {
			this.data = response;
			console.log(this.data);
		})


	}
	//Holaaaaa
	//Ciudad de Nacimiento
	getGener08Na(pclave: any) {

		const keyword = pclave.target.value;
		const search = this._nomin150service.searchgener08(keyword).then(response => {
			this.dataNa = response;
			console.log(this.dataNa);
		})


	}

	getGener08Re(pclave: any) {

		const keyword = pclave.target.value;
		const search = this._nomin150service.searchgener08(keyword).then(response => {
			this.dataRe = response;
			console.log(this.dataRe);
		})


	}

	getDatosGener216(datosGener08) {
		this.formulario.codpro = datosGener08.codpro;
		this.formulario.nompro = datosGener08.detalle;
		this.data216 = [];
	}

	getDatosGener08(datosGener08) {
		this.formulario.ciuexp = datosGener08.codciu;
		this.formulario.nomciuexp = datosGener08.detciu;
		this.data = [];
	}
	getDatosGener08Na(datosGener08) {
		this.formulario.ciunac = datosGener08.codciu;
		this.formulario.nomciunac = datosGener08.detciu;
		this.dataNa = [];
	}

	getDatosGener08Re(datosGener08) {
		this.formulario.ciures = datosGener08.codciu;
		this.formulario.nomciures = datosGener08.detciu;
		this.dataRe = [];
		this.comprobarBarrio();
	}
	

	funcionDireccion() {
		this.banDire = true;
	}

	funcionDireccion2() {
		this.banDire = false;

	}

	onSubmit(form) {
		console.log("aqui!");
		console.log(this.formulario);

		if(this.formulario.ciuexp=='' || this.formulario.ciunac=='' || this.formulario.ciures==''){
			console.log("faltan datos!");
		}else{
			this.saveNomin440();
		}	

	}



	asignarDireccion() {
		let direccion = $("#div_direccion").html();
		this.forma.controls['direccion'].setValue(direccion);
		$('#div_direccion').html("");
		const element = this.renderer.selectRootElement('#direccion');
		element.focus();
		/* $(('#modal_direccion') as any).modal('close'); */
	}
	addDireccion() {
		let part1 = " # ";
		let part2 = " - ";
		if (this.dirpart1 == '') {
			part1 = "";
			part2 = "";
		}
		let html = this.dirpart1 + " " + this.dirpart2 + this.dirpart3 + " " + this.dirpart4 + " " + this.dirpart5 + part1 + this.dirpart6 + this.dirpart7 + " " + this.dirpart8 + " " + this.dirpart9 + part2 + this.dirpart10 + " " + this.dirpart11 + " " + this.dirpart12 + " " + this.dirpart13 + " " + this.dirpart14 + " " + this.dirpart15 + " " + this.dirpart16;
		$('#div_direccion').html(html);
		this.formulario.direccion = html;
		this.direccion = html;


	}
	getGener02(pclave: any) {

		const keyword = pclave.target.value;
		if (keyword.length > 0) {
			const search = this._formulario.searchGener02(keyword).then(response => {
				this.data = response;
				console.log(this.data);
			})
		} else {
			this.bandera = false;
			console.log("aquiiiiiiiiiiiiiiiiiiiiiiii")
		}


	}
	getDatos(result: any) {
		console.log(result);
		this.bandera = true;
	}
	volver(){
		this.route.navigate(['inicio-formulario']);
	}

	saveNomin440(){

		Swal.fire({
			icon: 'warning',
			title: '¿Esta seguro de guardar los datos?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Guardar',
			denyButtonText: `No Guardar`,
		  }).then((result) => {
			if (result.isConfirmed) {
				
				this._formulario.saveNomin440(this.formulario).subscribe(
					response=>{
						console.log("Respueta de Guardado");
						console.log(response);
						if(response.status=='success'){
		
							Swal.fire({
								position: 'top-end',
								icon: 'success',
								title: 'Sus datos se guardaron con exito!',
								showConfirmButton: false,
								timer: 1500
							  }).then(()=> {
								localStorage.removeItem('usuarioConsultado');
								this.route.navigate(['inicio-formulario']);
							}) 
						}else{
							Swal.fire(
								'Error',
								'Datos no guardados',
								'error'
							  )
						}
					}, error => {
						Swal.fire('Error verifique los datos', error, 'error')
					}
				);
			} else if (result.isDenied) {
			  Swal.fire('Datos no guardados', '', 'info')
			}
		  })
	}
	ordenarAsc(p_array_json, p_key) {
		p_array_json.sort(function (a, b) {
		   return a[p_key] > b[p_key];
		   
		});
	 }

	comprobarBarrio(){
		if(this.formulario.ciures != ''){
			console.log("entrooo!");
			this.formulario.ciures
			this._nomin150service.getBarrio(new Barrio(this.formulario.ciures)).subscribe(
				response=>{
					console.log("Barriosssssss!");
					console.log(response);
					if(response.length==0){
						this.barrios=[{codbar: this.formulario.ciures, codciu: this.formulario.ciures, detalle: this.formulario.nomciures}];
					}else{
						this.barrios=response;
/* 						console.log("barrios");
						this.ordenarAsc(this.barrios,'detalle'); */
						console.log("barrios................................");
						console.log(this.barrios);
					}
				}
			)
		}else{
			console.log("No hay ciudad de residencia");
		}
	}

	comprobar_ciudad(){
		if(this.formulario.paires=='169' || this.formulario.paires==''){
			
		}else{
			this.dataRe=[{'codciu':this.tippai.codpai,'detciu':this.tippai.detpai}];
		}
	}


}
