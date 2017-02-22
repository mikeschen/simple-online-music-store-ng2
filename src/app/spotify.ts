import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class Spotify {
	private searchUrl: string;
	private getArtistAlbums: string;

	constructor(private _http:Http) {

	}
	
	public searchArtist (value) {
		this.searchUrl = 'https://api.spotify.com/v1/search?type=artist&q=' + value;
    return this._http.get(this.searchUrl)
         .map(response => response.json())
	}
	
	public getArtistById (id) {
		this.getArtistAlbums = 'https://api.spotify.com/v1/artists/' + id + '/albums';
		console.log(this.getArtistAlbums);
		return this._http.get(this.getArtistAlbums)
			.map(response => response.json())
	}
}