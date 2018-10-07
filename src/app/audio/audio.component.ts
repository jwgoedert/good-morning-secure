import { Component, OnInit } from '@angular/core';
import {BinaryClient} from 'binaryjs-client';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  public client; 

  constructor() { }

  ngOnInit() {
    this.initClient();
  }
  initClient() {
    this.client = new BinaryClient('wss://browser-pcm-stream.dop/ws');

    this.client.on('open', function() {
        console.log('Init client');
    }
  }
  //var client = new BinaryClient('wss://browser-pcm-stream.dop/ws');
  //var client = new BinaryClient('ws://localhost:9000');

  startRecording = function() {
    console.log('start recording');
  };


}
