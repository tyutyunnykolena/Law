import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HeaderComponent } from './header/header.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { SecondBlockComponent } from './second-block/second-block.component';
import { ThirdBlockComponent } from './third-block/third-block.component';
import { FourthBlockComponent } from './fourth-block/fourth-block.component';
import { FifthBlockComponent } from './fifth-block/fifth-block.component';
import { SixthBlockComponent } from './sixth-block/sixth-block.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { UserService } from './user/user.service';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { SetFeaturedComponent } from './set-featured/set-featured.component';
import { AllInformationComponent } from './all-information/all-information.component';
import { TableComponent } from './table/table.component';


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
    HomeComponent,
    RegistrationComponent,
    GeneralInformationComponent,
    MoreDetailsComponent,
    SetFeaturedComponent,
    AllInformationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DpDatePickerModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      
          {
      
            path:'table',
      
            component: TableComponent
      
          }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
