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


    getGener18(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/gener18', params, { headers: headers });

    }

    getGener08(user: any): Observable<any> {
        //let json = JSON.stringify(user);
        let params = 'json=';
        console.log("parametros!")
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'nomin150/gener08', params, { headers: headers });

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









}