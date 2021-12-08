import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardcoverComponent } from './hardcover/hardcover.component';
import {HttpClientModule} from '@angular/common/http';
import { BookServiceService } from './service/book-service.service';



@NgModule({
  declarations: [
    AppComponent,
    HardcoverComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
