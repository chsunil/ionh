import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WpPage } from './wp.page';
//Wordpress integration
import { WpHomePage } from './../wordpress/wp-home/wp-home.page';
import { PostPage } from './../wordpress/post/post.page';
import { SearchPage } from './../wordpress/search/search.page';
import { WpLoginPage } from './../wordpress/wp-login/wp-login.page';
import { WpSignupPage } from './../wordpress/wp-signup/wp-signup.page';
import { SavedPage } from './../wordpress/saved/saved.page';
import { CategorySearchPage } from './../wordpress/category-search/category-search.page';
import { AccountPage } from '../wordpress/account/account.page';
import { WpPagePage } from '../wordpress/wp-page/wp-page.page';
import { WpPages } from '../wordpress/wp-pages/wp-pages';

const routes: Routes = [
  {
    path: '',
    component: WpPage,
    children: [
      {
        path: 'home',

        children: [
          {
            path: '',
            component: WpHomePage,
          },]
      },
      {
        path: 'post/:id',
        component: PostPage,

      },
      {
        path: 'pages',
        component: WpPages,

      },
      {
        path: 'page/:id',
        component: WpPagePage,

      },
      {
        path: 'catsearch/:id',
        component: CategorySearchPage,

      },
      {
        path: 'saved',
        component: SavedPage,

      },
      {
        path: 'search',
        component: SearchPage,

      },
      {
        path: 'login',
        component: WpLoginPage,

      },
      {
        path: 'signup',
        component: WpSignupPage,

      },
      {
        path: 'account',
        component: AccountPage,

      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WpPageRoutingModule { }
