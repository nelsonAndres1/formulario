import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Gener02 } from "../models/gener02";
import { global } from "./global";

@Injectable()
export class Nomin150Service {
    public url: string;
    public identity: any;
    public token: any;
    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
    }



/*     Route::get('/api/formulario/searchnomin216',[App\Http\Controllers\FormularioController::class,'nomin216']);
Route::get('/api/formulario/searchgener08',[App\Http\Controllers\FormularioController::class,'gener08']); */


    


    searchNomin216(pclave:any){
        const response = new Promise(
            resolve=>{
                this._http.get(global.url+`nomin150/searchNomin216?search=${pclave}`).subscribe(data =>{
                    resolve(data);
                }, err => {
                    console.log(err);
                });
            });
            return response;
    }
    
    searchgener08(pclave:any){
        const response = new Promise(
            resolve=>{
                this._http.get(global.url+`formulario/searchgener08?search=${pclave}`).subscribe(data =>{
                    resolve(data);
                }, err => {
                    console.log(err);
                });
            });
            return response;
    }

    getGener18(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/gener18', params, { headers: headers });

    }
    getGener19(user: any){
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/gener19', params, { headers: headers });
    }

    

    getGener08(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/gener08', params, { headers: headers });

    }

    get_nomin216(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin/get_nomin216', params, { headers: headers });

    }

    

    getGener14(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/gener14', params, { headers: headers });

    }

    getGener17(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/gener17', params, { headers: headers });

    }

    getGener15(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/gener15', params, { headers: headers });

    }
    getNomin200(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/nomin200', params, { headers: headers });

    }
    getNomin216(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/nomin216', params, { headers: headers });

    }

    getBarrio(user: any): Observable<any> {
        let json = JSON.stringify(user);
        let params = 'json='+json;
        console.log("parametros!");
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/getBarrio', params, { headers: headers });

    }

    existe(user: any): Observable<any> {
        let json = JSON.stringify(user);
        let params = 'json='+json;
        console.log("parametros!");
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin/existe', params, { headers: headers });

    }
    

    








}