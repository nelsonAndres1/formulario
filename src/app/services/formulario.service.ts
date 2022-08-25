import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gener02} from "../models/gener02";
import {global} from "./global";


@Injectable()

export class FormularioService{
    public url : string;
    constructor(public _http : HttpClient) {
        this.url = global.url;
    }
    searchGener02(pclave : any){
        const response = new Promise(
            resolve=>{
                this._http.get(global.url+`formulario/searchNomin150?search=${pclave}`).subscribe(data =>{
                    resolve(data);
                }, err => {
                    console.log(err);
                });
            });
            return response;
    }

    saveNomin440(user: any): Observable<any> {
        let json = JSON.stringify(user);
        let params = 'json=' + json;
        console.log("aqui!");
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'formulario/saveNomin440', params, { headers: headers });
    }
    consultaNomin440(user: any): Observable<any> {
        let json = JSON.stringify(user);
        let params = 'json=' + json;
        console.log("aqui!");
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'formulario/consultaNomin440', params, { headers: headers });
    }


    
}