import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Gener02 } from "../models/gener02";
import { global } from "./global";


@Injectable()
export class ReporteService {

    public url: string;
    constructor(public _http: HttpClient) {
        this.url = global.url;
    }

    reporte(use: any): Observable<any>{
        let json = JSON.stringify(use);
        let params = 'json=' + json;
        console.log("aqui!");
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'reporte/reporte', params, { headers: headers });

    }

}