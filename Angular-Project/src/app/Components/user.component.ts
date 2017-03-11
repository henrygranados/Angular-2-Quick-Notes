import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {

  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {

    this.name = 'Henry';
    this.email = "henry@gmail.com",
      this.address = {
        street: '123 Main Street',
        city: "Denver",
        state: "CO"
      }
    this.hobbies = ['Music', 'Movies', 'Sport'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies(){
    if(this.showHobbies == true){
      this.showHobbies = false;
    }else{
      this.showHobbies = true;
    }
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }

  test(){
    alert("This is a test");
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post{
 id : number;
 name: string;
 email : string;
}
