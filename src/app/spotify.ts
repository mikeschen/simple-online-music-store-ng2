import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class Spotify {
	private searchUrl: string;
	url: string;
	searchRes: string;

	constructor(private _http:Http) {

	}
	
	public searchArtist (value) {
		this.searchUrl = 'https://api.spotify.com/v1/search?type=artist&q=' + value;
   return this._http.get(this.searchUrl)
         .map(response => response.json())
	}
	
	public getArtistById (id) {
		return this.url + 'artists/' + id;
	}
}