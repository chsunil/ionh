import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page45',
  templateUrl: './page45.page.html',
  styleUrls: ['./page45.page.scss'],
})
export class Page45Page implements OnInit {
  post: any = {};
  comments:any=[];
  constructor() { }

  ngOnInit() {
    this.post = {
      title: 'Exploring the Benefits of Using Ionic Templates for Your Mobile App',
      date: '02/05/2023',
      author: 'MrIonic',
      img: './../../assets/images/course2.jpg',
      description: 'Are you looking for a way to streamline your mobile app development process? Look no further than Ionic templates! These pre-built templates offer a range of benefits that can help you save time and create a more professional-looking app.<br>Firstly, Ionic templates are designed to work seamlessly with the Ionic framework, a popular open-source toolkit for building mobile and desktop apps using web technologies like HTML, CSS, and JavaScript. This means you can quickly and easily integrate pre-built UI components and features into your app without having to start from scratch.<br>In addition, Ionic templates often come with built-in support for popular mobile app features like push notifications, user authentication, and social media integration. This can save you valuable time and effort, as you will not need to build these features from scratch or spend time troubleshooting them.'

    }

    this.comments = [
      { avatar: './../../assets/images/person.jpg', author: 'John Doe', content: 'Here is the comment content. This could be a longer paragraph if needed.', date: '03/05/2023' },
      { avatar: './../../assets/images/person.jpg', author: 'Jane Smith', content: 'This is another comment. It could also be a longer paragraph if needed.', date: '03/06/2023' },
      { avatar: './../../assets/images/person.jpg', author: 'Bob Johnson', content: 'Yet another comment goes here. It can be short or long, depending on the content.', date: '03/07/2023' },
      { avatar: './../../assets/images/person.jpg', author: 'Mary Brown', content: 'One more comment for good measure. This could be the longest one yet!', date: '03/08/2023' },
    ];
    
  }

  scrollToComments(){
    const element = document.getElementById('comment-section');
    console.log(element)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  }
 
}
