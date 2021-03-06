import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListPromiseComponent } from './hero-list/hero-list.component.promise';

import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';

import { HeroData } from './hero-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { requestOptionsProvider } from './default-request-options.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroListPromiseComponent,
    WikiComponent,
    WikiSmartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(HeroData)
  ],
  providers: [ requestOptionsProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
