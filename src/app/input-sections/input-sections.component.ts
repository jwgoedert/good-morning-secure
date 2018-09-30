import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-sections',
  templateUrl: './input-sections.component.html',
  styleUrls: ['./input-sections.component.css']
})
export class InputSectionsComponent implements OnInit {
  public message: string;
  public location;
  public time;
  public recording;

  @Output() messageEvent = new EventEmitter<string>();

  @Output() locationEvent = new EventEmitter<string>();

  @Output() timeEvent = new EventEmitter<string>();

  @Output() recordingEvent = new EventEmitter<string>();
  
  @Input() locTest: string;

  @Input() locPrompt: string;

  @Input() timePrompt: string;

  @Input() recordingPrompt: string;
  @Input() prompt: string;


  constructor() { }

  ngOnInit() {
    this.message = 'this is a message';
    this.locTest = 'location Test';
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  setLocation() {
    this.locationEvent.emit(this.location);
  }

  setTime() {
    this.time.emit(this.time)
  }

  setRecording() {
    this.recordingEvent.emit(this.recording);
  }
}
