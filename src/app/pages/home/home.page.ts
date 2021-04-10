import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core'; // Native version
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (Capacitor.platform === 'web') {
      this.initializeYoutubePlayerPluginWeb();
    } else {
      // Native
      this.initializeYoutubePlayerPluginNative();
    }
  }

  async initializeYoutubePlayerPluginWeb() {
    const options = {
      playerId: 'youtube-player',
      playerSize: { width: 640, height: 360 },
      videoId: 'tDW2C6rcH6M',
    };
    const result = await YoutubePlayerWeb.initialize(options);
    console.log('playerReady', result);
  }

  async initializeYoutubePlayerPluginNative() {
    const { YoutubePlayer } = Plugins;
    const options = { width: 640, height: 360, videoId: 'tDW2C6rcH6M' };
    const playerReady = await YoutubePlayer.initialize(options);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result = await YoutubePlayerWeb.destroy('youtube-player');
    console.log('destroyYoutubePlayer', result);
  }
}
