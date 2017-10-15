import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { SecondBlockComponent } from './second-block/second-block.component';
import { ThirdBlockComponent } from './third-block/third-block.component';
import { FourthBlockComponent } from './fourth-block/fourth-block.component';
import { FifthBlockComponent } from './fifth-block/fifth-block.component';
import { SixthBlockComponent } from './sixth-block/sixth-block.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent,
    FourthBlockComponent,
    FifthBlockComponent,
    SixthBlockComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
