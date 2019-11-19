import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommService {

  constructor(public httpClient: HttpClient, ) { }
  url = 'http://127.0.0.1:9000/book/recommendations'
  url1 = 'http://127.0.0.1:9000/book/searchByID'

  getRecommendations(all_titles) {
    var titles_str = JSON.stringify(all_titles);
    let params = new HttpParams().set('Titles', titles_str);
    return this.httpClient.get<any>(this.url, { params: params });
  }
  getRecommDetails(id) {
    let params = new HttpParams().set('Book_ID', id);
    return this.httpClient.get<any>(this.url1, { params: params });
  }
}
