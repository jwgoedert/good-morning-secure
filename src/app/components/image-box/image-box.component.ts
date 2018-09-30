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
  public lowerToggle = true;
  public lowerText;
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
    this.toggleAbout();
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
      inputBox:'this.location',
      svg: 'assets/images/round-language-24px.svg'
    },
    {
      step:2,
      prompt:'Tell us when you wake up',
      inputBox:'this.time',
      svg: 'assets/images/round-access_time-24px.svg'
    },
    {
      step:3,
      prompt:'Say good morning',
      inputBox:'',
      svg: 'assets/images/round-mic-24px.svg'
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

  toggleAbout() {
    if (this.lowerToggle === true) {
      this.lowerText = `Global Good Mornings is a project by Craig Damrauer. You can look at more of my work at Assorted Bits of Wisdom.

      This project is an outgrowth of something I’ve been pondering for a while. I’m interested in whether I can make something that helps a viewer viscerally intuit the turning of the earth.
      
      I think a really interesting way to do this is to through people. At every moment on earth someone is waking up and headed into the day ahead. If there’s a way to capture these voices there might be a way to allow us to feel the day’s progress as the earth turns.
      
      It’s going to need multiple sets of voices from every timezone in the world. I’d love it to represent the young, the old and everybody in between. I’d love it to represent different languages, different points of view, different modes of waking up.
      
      Drop a line, if you want to talk about this, have ideas or just want to be kept up to date with the progress.
      
      GlobalGoodMorning @ gmail.com`
      this.lowerToggle = false;
    }
    if(this.lowerToggle === false) {
      this.lowerText =    `(this will evolve)     Site Design: Brian Carley  Programming: James Goedert, Antoine xxx  Photos: Unsplash.com`
      this.lowerToggle = true;
    }

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
