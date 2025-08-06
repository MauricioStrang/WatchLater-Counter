import { Injectable } from '@angular/core';
import { loadGapiInsideDOM, gapi } from 'gapi-script';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAuthService {
  private clientId = '432953629020-6654v485km5i0vkrdjma5ph3tdadg2d8.apps.googleusercontent.com';
  private scope = 'https://www.googleapis.com/auth/youtube.readonly';

  constructor() {
    this.initClient();
  }

  async initClient() {
    await loadGapiInsideDOM();
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: this.clientId,
        scope: this.scope,
      });
    });
  }

  signIn() {
    const authInstance = gapi.auth2.getAuthInstance();
    return authInstance.signIn();
  }

  isSignedIn(): boolean {
    return gapi.auth2.getAuthInstance().isSignedIn.get();
  }
}