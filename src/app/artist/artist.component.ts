import { Component, OnInit } from '@angular/core';
import { Spotify } from '../spotify';
import {Artist} from '../../Artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [Spotify]
})
export class ArtistComponent {
	 searchRes: Artist[];

  constructor(private spotify: Spotify) { }

  searchArtist(url: string) {
  	this.spotify.searchArtist(url)
  	 .subscribe(res => {
     		this.searchRes = res.artists.items;
     })
  }
}
