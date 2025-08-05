import { Component } from '@angular/core';
import { YoutubeAuthService } from './youtube-auth.service';
import { YoutubeService } from './youtube.service';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number | null = null;

  constructor(
    private authService: YoutubeAuthService,
    private youtubeService: YoutubeService
  ) {}

  async signIn() {
    await this.authService.signIn();
  }

  async fetchWatchLater() {
    this.count = await this.youtubeService.getWatchLaterCount();
  }
}