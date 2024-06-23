import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class WpServicesService {

  siteUrl: string = 'https://psd2web.in'; //Replace with your WordPress URL

  constructor(private http: HttpClient, public storage: StorageService) { }

  getWpSettings() {
    return this.http.get(this.siteUrl + '/wp-json/ionic-app-settings-plugin/v1/settings');
  }

  getPosts(page: any) {
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/posts?page=' + page + '&per_page=10');
  }
  getPages(page: any) {
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/pages?page=' + page + '&per_page=10');
  }
  getComments(post: any, page: any) {
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/comments?post=' + post + '&per_page=10&page=' + page);
  }

  getCategories() {
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/categories?exclude=1');
  }

  searchPosts(query: string, page: any) {
    console.log('qry', query)
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/posts?search=' + query + '&page=' + page + '&per_page=4');
  }

  getPostsByCategory(categoryId: number, page: any) {
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/posts?categories=' + categoryId + '&page=' + page);
  }

  getPost(postId: number) {
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/posts/' + postId);
  }

  getPage(pageId: number) {
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/pages/' + pageId);
  }

  getFeaturedPosts() {
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/posts?sticky=1');
  }

  getUser() {
    return this.storage.getItem('user');
  }

  getStoredSettings() {
    return this.storage.getItem('settings');
  }

  doRegister(user_data: any) {
    return this.http.post(this.siteUrl + '/wp-json/ionic-app-settings-plugin/v1/create-user', user_data);
  }

  doLogin(username: any, password: any) {
    return this.http.post(this.siteUrl + '/wp-json/jwt-auth/v1/token', {
      username: username,
      password: password
    });
  }

  doLogOut() {
    return this.storage.removeTable('user')
  }

  getUserDetails(userId: any) {
    return this.http.get(this.siteUrl + '/wp-json/wp/v2/users/' + userId);
  }

  createComment(postId: any, user: any, comment: any) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer' + user.token }),
    };
    return this.http.post(this.siteUrl + '/wp-json/wp/v2/comments?token=' + user.token, {
      post: postId,
      content: comment,
      author: user.id,
      author_name: user.displayname,
      author_email: user.email,
    }, httpOptions);
  }

  deleteComment(commentId: any, user: any) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer' + user.token }),
    };
    return this.http.delete(this.siteUrl + '/wp-json/wp/v2/comments/' + commentId, httpOptions);

  }

  validateAuthToken(token: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer' + token }),
    };
    return this.http.post(this.siteUrl + '/wp-json/jwt-auth/v1/token/validate?token=' + token,
      {}, httpOptions)
  }

}
