import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [

  //App home page
  {
    path: '',
    component: HomePage,
    pathMatch: 'full'
  },

  //Wordpress 
  {
    path: 'wp',
    loadChildren: () => import('./wp/wp.module').then(m => m.WpPageModule)
  },

  //Google maps
  {
    path: 'maps',
    component: MapsHomePage,
    pathMatch: 'full'
  },
  {
    path: 'basicMap',
    component: BasicMapPage,
    pathMatch: 'full'
  },
  {
    path: 'directionsMap',
    component: DirectionsMapPage,
    pathMatch: 'full'
  },

  //UI Library
  {
    path: 'templates',
    component: TemplatesPage,
    pathMatch: 'full'
  },
  {
    path: 'page1',
    component: Page1Page,
    pathMatch: 'full'
  },
  {
    path: 'page2',
    component: Page2Page,
    pathMatch: 'full'
  },
  {
    path: 'page3',
    component: Page3Page,
    pathMatch: 'full'
  },
  {
    path: 'page4',
    component: Page4Page,
    pathMatch: 'full'
  },
  {
    path: 'page5',
    component: Page5Page,
    pathMatch: 'full'
  },
  {
    path: 'page6',
    component: Page6Page,
    pathMatch: 'full'
  },
  {
    path: 'page8',
    component: Page8Page,
    pathMatch: 'full'
  },
  {
    path: 'page9',
    component: Page9Page,
    pathMatch: 'full'
  },
  {
    path: 'page10',
    component: Page10Page,
    pathMatch: 'full'
  },
  {
    path: 'page11',
    component: Page11Page,
    pathMatch: 'full'
  },
  {
    path: 'page12',
    component: Page12Page,
    pathMatch: 'full'
  },
  {
    path: 'page13',
    component: Page13Page,
    pathMatch: 'full'
  },
  {
    path: 'page14',
    component: Page14Page,
    pathMatch: 'full'
  },
  {
    path: 'page15',
    component: Page15Page,
    pathMatch: 'full'
  },
  {
    path: 'page16',
    component: Page16Page,
    pathMatch: 'full'
  },
  {
    path: 'page17',
    component: Page17Page,
    pathMatch: 'full'
  },
  {
    path: 'page18',
    component: Page18Page,
    pathMatch: 'full'
  },
  {
    path: 'page19',
    component: Page19Page,
    pathMatch: 'full'
  },
  {
    path: 'page20',
    component: Page20Page,
    pathMatch: 'full'
  },
  {
    path: 'page21',
    component: Page21Page,
    pathMatch: 'full'
  },
  {
    path: 'page22',
    component: Page22Page,
    pathMatch: 'full'
  },
  {
    path: 'page23',
    component: Page23Page,
    pathMatch: 'full'
  },
  {
    path: 'page24',
    component: Page24Page,
    pathMatch: 'full'
  },
  {
    path: 'page25',
    component: Page25Page,
    pathMatch: 'full'
  },
  {
    path: 'page26',
    component: Page26Page,
    pathMatch: 'full'
  },
  {
    path: 'page27',
    component: Page27Page,
    pathMatch: 'full'
  },
  {
    path: 'page28',
    component: Page28Page,
    pathMatch: 'full'
  },
  {
    path: 'page29',
    component: Page29Page,
    pathMatch: 'full'
  },
  {
    path: 'page30',
    component: Page30Page,
    pathMatch: 'full'
  },
  {
    path: 'page31',
    component: Page31Page,
    pathMatch: 'full'
  },
  {
    path: 'page32',
    component: Page32Page,
    pathMatch: 'full'
  },
  {
    path: 'page33',
    component: Page33Page,
    pathMatch: 'full'
  },
  {
    path: 'page34',
    component: Page34Page,
    pathMatch: 'full'
  },
  {
    path: 'page35',
    component: Page35Page,
    pathMatch: 'full'
  },
  {
    path: 'page36',
    component: Page36Page,
    pathMatch: 'full'
  },
  {
    path: 'page37',
    component: Page37Page,
    pathMatch: 'full'
  },
  {
    path: 'page38',
    component: Page38Page,
    pathMatch: 'full'
  },
  {
    path: 'page39',
    component: Page39Page,
    pathMatch: 'full'
  },
  {
    path: 'page40',
    component: Page40Page,
    pathMatch: 'full'
  },
  {
    path: 'page41',
    component: Page41Page,
    pathMatch: 'full'
  },
  {
    path: 'page42',
    component: Page42Page,
    pathMatch: 'full'
  },
  {
    path: 'page43',
    component: Page43Page,
    pathMatch: 'full'
  },
  {
    path: 'page44',
    component: Page44Page,
    pathMatch: 'full'
  },
  {
    path: 'page45',
    component: Page45Page,
    pathMatch: 'full'
  },
  {
    path: 'page46',
    component: Page46Page,
    pathMatch: 'full'
  },
  {
    path: 'page7',
    component: Page7Page,
    pathMatch: 'full'
  },
  {
    path: 'select',
    component: SelectLocationPage,
    pathMatch: 'full'
  },
  {
    path: 'page16',
    component: Page16Page,
    pathMatch: 'full'
  },
  {
    path: 'page20',
    component: Page20Page,
    pathMatch: 'full'
  },
  {
    path: 'page26',
    component: Page26Page,
    pathMatch: 'full'
  },
  {
    path: 'page33',
    component: Page33Page,
    pathMatch: 'full'
  },
  {
    path: 'page34',
    component: Page34Page,
    pathMatch: 'full'
  },

  {
    path: 'animations',
    component: AnimationsPage,
    pathMatch: 'full'
  },
  {
    path: 'alerts',
    component: AlertsPage,
    pathMatch: 'full'
  },

  {
    path: 'animations',
    component: AnimationsPage,
    pathMatch: 'full'
  },
  {
    path: 'loadings',
    component: LoadingsPage,
    pathMatch: 'full'
  },
  {
    path: 'chartbank',
    component: ChartbankPage,
    pathMatch: 'full'
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
