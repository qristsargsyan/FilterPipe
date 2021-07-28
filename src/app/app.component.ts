import { Component } from '@angular/core';

export interface Posts
{
    title:string,
    text:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  searchWord = '';
  
  posts:Posts[] = 
  [
      {title:'sky',text: 'երկինք'},
      {title:'telephone',text:'հեռախոս'},
      {title:'page',text:'էջ'},
      {title:'brain',text:'ուղեղ'},
      {title:'name',text:'անուն'},
      {title:'butterfly',text:'թիթեռ'},
      {title:'chair',text:'աթոռ'},
      {title:'bee',text:'մեղու'}      

  ]
}
