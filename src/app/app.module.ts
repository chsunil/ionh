import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Storage related imports
import { Storage } from '@ionic/storage';
import { StorageService } from './storage.service';

//Google Maps integration
import { MapsHomePage } from './google-maps/maps-home/maps-home.page';
import { BasicMapPage } from './google-maps/basic-map/basic-map.page';
import { DirectionsMapPage } from './google-maps/directions-map/directions-map.page';
import { SelectLocationPage } from './google-maps/select-location/select-location.page';

//UI library
import { HomePage } from './home/home.page'; //Home page of the app
import { LoadingsPage } from './ui/loadings/loadings.page';
import { AnimationsPage } from './animations/animations.page';
import { AlertsPage } from './ui/alerts/alerts.page';
import { ChartbankPage } from './chartbank/chartbank.page';
import { StarRatingComponent } from '../star-rating/star-rating.component';

//--Templates
import { TemplatesPage } from './templates/templates/templates.page';
import { Page1Page } from './templates/page1/page1.page';
import { Page2Page } from './templates/page2/page2.page';
import { Page3Page } from './templates/page3/page3.page';
import { Page4Page } from './templates/page4/page4.page';
import { Page5Page } from './templates/page5/page5.page';
import { Page6Page } from './templates/page6/page6.page';
import { Page7Page } from './templates/page7/page7.page';
import { Page8Page } from './templates/page8/page8.page';
import { Page9Page } from './templates/page9/page9.page';
import { Page10Page } from './templates/page10/page10.page';
import { Page11Page } from './templates/page11/page11.page';
import { Page12Page } from './templates/page12/page12.page';
import { Page13Page } from './templates/page13/page13.page';
import { Page14Page } from './templates/page14/page14.page';
import { Page15Page } from './templates/page15/page15.page';
import { Page16Page } from './templates/page16/page16.page';
import { Page17Page } from './templates/page17/page17.page';
import { Page18Page } from './templates/page18/page18.page';
import { Page19Page } from './templates/page19/page19.page';
import { Page20Page } from './templates/page20/page20.page';
import { Page21Page } from './templates/page21/page21.page';
import { Page22Page } from './templates/page22/page22.page';
import { Page23Page } from './templates/page23/page23.page';
import { Page24Page } from './templates/page24/page24.page';
import { Page25Page } from './templates/page25/page25.page';
import { Page26Page } from './templates/page26/page26.page';
import { Page27Page } from './templates/page27/page27.page';
import { Page28Page } from './templates/page28/page28.page';
import { Page29Page } from './templates/page29/page29.page';
import { Page30Page } from './templates/page30/page30.page';
import { Page31Page } from './templates/page31/page31.page';
import { Page32Page } from './templates/page32/page32.page';
import { Page33Page } from './templates/page33/page33.page';
import { Page34Page } from './templates/page34/page34.page';
import { Page35Page } from './templates/page35/page35.page';
import { Page36Page } from './templates/page36/page36.page';
import { Page37Page } from './templates/page37/page37.page';
import { Page38Page } from './templates/page38/page38.page';
import { Page39Page } from './templates/page39/page39.page';
import { Page40Page } from './templates/page40/page40.page';
import { Page41Page } from './templates/page41/page41.page';
import { Page42Page } from './templates/page42/page42.page';
import { Page43Page } from './templates/page43/page43.page';
import { Page44Page } from './templates/page44/page44.page';
import { Page45Page } from './templates/page45/page45.page';
import { Page46Page } from './templates/page46/page46.page';




@NgModule({
  declarations: [AppComponent, ChartbankPage,
    StarRatingComponent,
    TemplatesPage,Page1Page, Page2Page, Page3Page, Page4Page, Page5Page, Page6Page,
    Page8Page, Page9Page, Page10Page, Page11Page, Page12Page, Page13Page, Page14Page, Page15Page, Page16Page,
    Page17Page, Page18Page, Page19Page, Page20Page, Page21Page, Page22Page, Page23Page, Page24Page, Page25Page, Page26Page,
    Page27Page, Page28Page, Page29Page, Page30Page, Page31Page, Page32Page, Page33Page, Page34Page, Page35Page, Page36Page, Page37Page, Page38Page,
    Page39Page, Page40Page, Page41Page, Page42Page, Page43Page, Page44Page, Page45Page, Page46Page, Page7Page,
    LoadingsPage, AnimationsPage, AlertsPage, 
    HomePage, MapsHomePage, BasicMapPage, DirectionsMapPage, SelectLocationPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Storage, StorageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
