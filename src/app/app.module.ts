import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { SecondBlockComponent } from './second-block/second-block.component';
import { ThirdBlockComponent } from './third-block/third-block.component';
import { FourthBlockComponent } from './fourth-block/fourth-block.component';
import { FifthBlockComponent } from './fifth-block/fifth-block.component';
import { SixthBlockComponent } from './sixth-block/sixth-block.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

// const appRoutes:Routes=[
//  { path:'home',
//   component: },
//   {
//     path:'login',
//     component:FormComponent
//   }

// ]



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
    FooterComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
