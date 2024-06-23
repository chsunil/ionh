import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WpPageRoutingModule } from './wp-routing.module';


import { WpHomePage } from './../wordpress/wp-home/wp-home.page';
import { PostPage } from './../wordpress/post/post.page';
import { SearchPage } from './../wordpress/search/search.page';
import { AccountPage } from './../wordpress/account/account.page';
import { WpLoginPage } from './../wordpress/wp-login/wp-login.page';
import { WpSignupPage } from './../wordpress/wp-signup/wp-signup.page';
import { SavedPage } from './../wordpress/saved/saved.page';
import { CategorySearchPage } from './../wordpress/category-search/category-search.page';
import { WpPagePage } from '../wordpress/wp-page/wp-page.page';
import { WpPage } from './wp.page';
import { WpPages } from './../wordpress/wp-pages/wp-pages';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WpPageRoutingModule
  ],
  declarations: [CategorySearchPage, WpPage, WpHomePage, PostPage, SearchPage, AccountPage, WpLoginPage, WpSignupPage, SavedPage, WpPagePage, WpPages],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WpPageModule { }
