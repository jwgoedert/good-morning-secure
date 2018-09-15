import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GeoLocationService } from '../../services/geo-location.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit {
  public dateObj = Date.now();
  public location;
  errorMsg: string; 
  currentLocation: Coordinates = null;
  constructor( private ref: ChangeDetectorRef,
    private geoLocationService: GeoLocationService) {

   }

  ngOnInit() {
    console.log('date', this.dateObj);
    this.searchByCurrent();
    this.getCurrentLocation();
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
}
