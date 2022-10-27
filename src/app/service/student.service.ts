import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchResult} from "../model/SearchResult";
import {Student} from "../model/Student";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  paginate(page:number, limit: number):Observable<SearchResult<Student>> {
    let api_url = environment.api_url + "/students" + "?_page=" + page + "&_limit="+limit;
    console.log(api_url);
    return this.httpClient.get<SearchResult<Student>>(api_url);
  }
}
