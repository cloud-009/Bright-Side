import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogData: any;
  searchText: string = '';

  constructor(private http: HttpClient) {
    // 
  }

  ngOnInit(): void {
    // 
    this.http.get('http://localhost:3000/blogs').subscribe({
      next: (res) => {
        this.blogData = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
