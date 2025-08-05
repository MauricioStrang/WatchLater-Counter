import { Injectable } from '@angular/core';
import { gapi } from 'gapi-script';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  async loadClient() {
    await gapi.client.load('youtube', 'v3');
  }

  async getWatchLaterCount(): Promise<number> {
    await this.loadClient();
    const response = await gapi.client.youtube.playlistItems.list({
      part: 'id',
      playlistId: 'WL',
      maxResults: 50
    });
    return response.result.pageInfo.totalResults ?? 0;
  }
}