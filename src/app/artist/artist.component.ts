import { Component, OnInit } from '@angular/core';
import { Spotify } from '../spotify';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [Spotify]
})
export class ArtistComponent {

  constructor(private spotify: Spotify) { }

  searchArtist(url: string) {
  	this.spotify.searchArtist(url);
  }
}
