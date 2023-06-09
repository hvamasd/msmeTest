import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { StepperComponent } from './stepper/stepper.component';
import { DateComponent } from './date/date.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatSelectModule } from '@angular/material/select';
import { UdyamComponent } from './udyam/udyam.component';
import { OtherDetailsComponent } from './other-details/other-details.component';
import { MainComponent } from './main/main.component';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    StepperComponent,
    DateComponent,
    UdyamComponent,
    OtherDetailsComponent,
    MainComponent,
    SliderComponent,
    
  ],
  imports: [
    // NgbModule,
    
    HttpClientModule,
    BrowserModule,
    
    
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatSelectModule,MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
