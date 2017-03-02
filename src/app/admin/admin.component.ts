import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent{

  constructor(private albumService: AlbumService) { }

    submitForm(title: string, artist: string, image: string, timestamp: string) {
    var timestamp = new Date().toString();
    var newAlbum: Album = new Album(title, artist, image, timestamp);
    console.log("new album", newAlbum);
    this.albumService.addAlbum(newAlbum);
  }
}
