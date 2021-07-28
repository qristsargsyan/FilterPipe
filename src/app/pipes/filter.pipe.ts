import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts:Posts[], searchWord:string = '') : Posts[] {
    if(!searchWord.trim()){
      return posts;
    }
    return posts.filter(post => {
      return post.title.toLowerCase().includes(searchWord.toLowerCase());
    })
  }

}
