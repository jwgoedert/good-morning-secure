import { GeoLocationService } from './services/geo-location.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

import { AppComponent } from './app.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { InputSectionsComponent } from './input-sections/input-sections.component';
import { NgbdCarouselBasicComponent } from './ngbd-carousel-basic/ngbd-carousel-basic.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { AudioComponent } from './audio/audio.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    InputSectionsComponent,
    NgbdCarouselBasicComponent,
    TimePickerComponent,
    AudioComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng4GeoautocompleteModule.forRoot()
  ],
  providers: [
    GeoLocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
