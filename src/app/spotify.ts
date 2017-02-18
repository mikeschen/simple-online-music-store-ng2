
import { Injectable } from '@angular/core';


@Injectable()
export class Spotify {

	url: string;

	constructor() {
		this.url = 'https://api.spotify.com/v1/';
	}
	
	public searchArtist (value) {
		console.log(this.url + 'search?type=artist&q=' + value);
		return this.url + 'search?type=artist&q=' + value;
	}
	
	public getArtistById (id) {
		return this.url + 'artists/' + id;
	}
}