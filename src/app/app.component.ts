import { Component, OnInit } from '@angular/core';
import { DataService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {


  newPost:any={};

  posts!:any[];


  constructor(private dataService:DataService){}


  ngOnInit(): void {
   this.getPost();
  
   
  }



  getPost(){

    this.dataService.getData().subscribe(response =>{

      this.posts = response;

  

    });

  }


  addNewPost(){

    this.dataService.createPost(this.newPost).subscribe(response =>{
      console.log("Yangi post yaratildi:" , response);

      this.posts.push(response);
      

    } , error =>{
      console.log("Xatolik!");
      

    });

  }



  deletPost(postId:number){
    if(confirm("O'chirishini xoxlaysizmi:!")){
      this.dataService.deletePost(postId).subscribe(response =>{
        console.log("O'chirildi");


        this.posts = this.posts.filter(postId => this.posts !== postId)

     
        

      }, error =>{
        console.log("Xatolik!");
        
      })
    }

  }

    


  updatePost(postId: number, postData: any){
    this.dataService.updatePost(postId ,postData).subscribe(response =>{
      console.log("Ma'lumot o'zgardi:" , response);
      

    }, error =>{
      console.log("Xatolik!");
      

    });

  }

  editPost(post:any){
    const updateData = {
      title:"Post o'zgardi",
      body:"Body o'zgardi",
      userId:post.userId


    };

this.updatePost(post.id ,post)

  }




  

    

}
