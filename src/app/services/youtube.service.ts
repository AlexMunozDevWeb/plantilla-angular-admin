import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyA7KcJbfj9iWYSumOazeV6_cQ--yfX1_Bo';
  private playlist = 'UUK59dYVs3Wgwoe73nDTH6jw';
  private nextPageToken = '';

  constructor( private http: HttpClient ) { 
    
  }

  obtenerVideos() {
    const url = `${ this.youtubeUrl }/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '12')
      .set('playlistId', this.playlist)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken)

    return this.http.get<YoutubeResponse>( url, { params: params })
              .pipe(

                map( resp => {
                  this.nextPageToken = resp.nextPageToken;
                  return resp.items;
                }),

                map( items => items.map( video => video.snippet))

              )
  }
}
