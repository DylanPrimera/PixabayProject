import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from '../util/interfaces/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  private error$ = new Subject<string>();
  private searchWord$ = new Subject<string>();
  private category$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  public getImages(word: string, imagesPerPage: number, category?: string): Observable<ApiResponse> {
    const KEY = '25413824-b00b7725362dcf9824477e95a';
    if (!category) {
      const URL = `https://pixabay.com/api/?key=${KEY}&q=${word}&per_page=${imagesPerPage}`;
      return this.http.get<ApiResponse>(URL);

    } else {
      const URL = `https://pixabay.com/api/?key=${KEY}&q=${word}&per_page=${imagesPerPage}&category=${category}`;
      return this.http.get<ApiResponse>(URL);
    }
  }

  public setSearchWord(word: string): void {
    this.searchWord$.next(word);
  }

  public setCategory(category: string): void {
    this.category$.next(category);
  }

  public setError(error: string): void {
    this.error$.next(error);
  }
  public getSearchWord(): Observable<string> {
    return this.searchWord$.asObservable();
  }

  public getCategory(): Observable<string> {
    return this.category$.asObservable();
  }

  public getError(): Observable<string> {
    return this.error$.asObservable();
  }


}
