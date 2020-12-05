import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { BlogPost } from '../interface/blogPost'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  get(): Observable<BlogPost[]> {
      return this.http.get<BlogPost[]>('/api')
  }
  post(data: any): Observable<BlogPost> {
      return this.http.post<BlogPost>('/api/post', data)
  }
  put(id: any, data: any): Observable<BlogPost> {
    return this.http.put<BlogPost>('/api/put/' + id, data)
  }
  delete(id: any): Observable<BlogPost> {
    return this.http.delete<BlogPost>('/api/delete/' + id)
  }
}
