import { GeoLocationService } from './services/geo-location.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

import { AppComponent } from './app.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent
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
