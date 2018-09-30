import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { GeoLocationService } from '../../services/geo-location.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit {
  public dateObj = Date.now();
  public location;
  public time;
  public recording;
  public message;
  public inputFields;
  public slideshowText;
  public slideIndex = 0;
  public errorMsg: string; 
  public currentLocation: Coordinates = null;
  public inputDisplayArray: Array<any>;
  constructor( private ref: ChangeDetectorRef,
    private geoLocationService: GeoLocationService) {

   }

  ngOnInit() {
    console.log('date', this.dateObj);
    // this.location = 'Location Test';
    this.searchByCurrent();
    this.getCurrentLocation();
    this.setInitialFields();
  }
  getCurrentLocation() {
    console.log('location', this.location);
    this.location = navigator.geolocation.getCurrentPosition(loc => console.log('location', loc.coords.latitude, loc.coords.longitude));
    console.log('location', this.location);
  }
  getUrl()
  {
    // return "url('../../assets/images/aerial-aerial-view-aeroplane-59519.jpg')";
    return "url('https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjBzaeO9KvdAhVE1qwKHSUYCKUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbackground%2F&psig=AOvVaw2KB5X5eHJMZqQvvwFTKX5F&ust=1536513266533453')";
 
  }
  autoCompleteCallback(selectedData: any) {
    console.log('selectedData', selectedData);
  }
  searchByCurrent() { 
    console.log('hitting search');
    let self = this;
    const accuracy = { enableHighAccuracy: true }; 
    self.geoLocationService.getLocation(accuracy).subscribe( function(position) {
      console.log('positiontop', position);
    self.currentLocation = position; 
    self.ref.detectChanges();
    console.log('position', position);
    }, function(error) { 
      self.errorMsg = error; 
      self.ref.detectChanges(); 
      console.log('no location', error);
    } );
    console.log('CurrentLocation', self.currentLocation);
  }

  changeText(){
    console.log('changingText');
  }

  receiveMessage($event){
    this.message = $event;
    console.log('message', this.message);
  }

  getTime($event){
    this.time = $event

    console.log('time', this.time);
  }

  getLocation($event) {
    this.location = $event;
    console.log('location', this.location);
  }

  getRecording($event) {
    this.recording = $event;
    console.log('recording', this.recording);
  }

  setInitialFields() {
    this.inputFields =  [{
      step:1,
      prompt:'Tell us where you are',
      inputBox:'this.location'
    },
    {
      step:2,
      prompt:'Tell us when you wake up',
      inputBox:'this.time'
    },
    {
      step:3,
      prompt:'Say good morning',
      inputBox:''
    },
  ];
  this.slideshowText = [
    {value:1, display:'Global Good Morning is a project\b Collecting good mornings from\b around the world'},
    {value:2, display:'We hope to hear as many people,\b languages, time zones and voices\b as possible. When we get enough,\b we’ll make a sculpture that helps a\b viewer feel the turning of the\b earth. '},
    {value:3, display:'It doesn’t matter when you wake\b up or when your morning is. We\b just want to hear your voice, know\b the time and where you are in the\b world.'},]
  }
  changeSlide(n) {
    this.showSlide(this.slideIndex += n);
  }

  showSlide(n) {
    if(n > this.slideshowText.length - 1) {
      this.slideIndex = 0;
    }
    if (n < 0) {
      this.slideIndex = this.slideshowText.length - 1;
    }
  }
  
}
