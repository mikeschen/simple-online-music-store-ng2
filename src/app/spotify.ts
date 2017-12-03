import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class Spotify {
  static BASE_URL =  'https://api.spotify.com/v1';

	private searchUrl: string;
	private getArtistAlbums: string;

	constructor(private _http:Http) {}

  query(
    URL: string,
    params?: Array<string>
  ): Observable<any[]> {
    let queryURL = `${Spotify.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const apiKey = environment.spotifyApiKey;
    const headers = new Headers({
      Authorization: `Bearer ${apiKey}`
    });
    const options = new RequestOptions({
      headers: headers
    });

    return this._http
      .request(queryURL, options)
      .map((res: any) => res.json());
  }

  searchArtist(query: string): Observable<any> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=artist`
    ]);
  }

  getArtistById(id: string): Observable<any> {
    return this.query(`/artists/${id}/albums`);
  }
}
