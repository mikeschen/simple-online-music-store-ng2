import { Component, OnInit } from '@angular/core';
import { Spotify } from '../spotify';
import {Artist} from '../../Artist';
import { Album } from '../album.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [Spotify, AlbumService]
})
export class ArtistComponent {
	 searchRes: Artist[];
   albumRes: Artist[];
   hideSearch: boolean;
   hideAlbum: boolean;

  constructor(private spotify: Spotify, private albumService: AlbumService) { }

  searchArtist(url: string) {
  	this.spotify.searchArtist(url)
  	 .subscribe(res => {
     		this.searchRes = res.artists.items;
     })
     this.hideSearch = false;
     this.hideAlbum = true;
  }

  getArtistById(id: string) {
    this.spotify.getArtistById(id)
      .subscribe(res => {
        this.albumRes = res.items;
      })
    this.hideSearch = true;
    this.hideAlbum = false;
  }

  submitArtist(title: string, artist: string, image: string, timestamp: string) {
    var timestamp = new Date().toString();
    var newAlbum: Album = new Album(title, artist, image, timestamp);
    console.log(newAlbum);
    this.albumService.addAlbum(newAlbum);
  }
}
