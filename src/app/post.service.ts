import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, retry, throwError } from 'rxjs';
import { AnimateTimings } from '@angular/animations';



class Post {
  constructor(
    public id: string,
    public title: string,
    public body: string) { }

}


@Injectable({
  providedIn: 'root'
})
export class DataService {



  private apiUrl = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);

  }


  createPost(postDate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, postDate)

  }

  updatePost(postId: number, postData: any): Observable<any> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.put<any>(url, postData)

  }

  deletePost(postId: number): Observable<any> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.delete(url);

  }







}
