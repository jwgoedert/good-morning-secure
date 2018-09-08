import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  }
  getUrl()
  {
    // return "url('../../assets/images/aerial-aerial-view-aeroplane-59519.jpg')";
    return "url('https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjBzaeO9KvdAhVE1qwKHSUYCKUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbackground%2F&psig=AOvVaw2KB5X5eHJMZqQvvwFTKX5F&ust=1536513266533453')";
 
  }
}
