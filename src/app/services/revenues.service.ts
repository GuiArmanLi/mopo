import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RevenueModel } from "../models/RevenueModel";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RevenuesService {
  API: string = "http://localhost:3000/revenues"

  constructor(private http: HttpClient) { }

  getRevenues(): Observable<RevenueModel[]> {
    return this.http.get<RevenueModel[]>(this.API);
  }
}
