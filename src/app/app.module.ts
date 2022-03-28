import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebComponent } from './components/smarts/web/web.component';
import { ImageSearchComponent } from './components/dummies/image-search/image-search.component';
import { ImagesCardComponent } from './components/dummies/images-card/images-card.component';
import { NavbarComponent } from './components/dummies/navbar/navbar.component';
import { ErrorComponentComponent } from './shared/error-component/error-component.component';
import { SpinnerComponentComponent } from './shared/spinner-component/spinner-component.component';


@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    ImageSearchComponent,
    ImagesCardComponent,
    NavbarComponent,
    ErrorComponentComponent,
    SpinnerComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
