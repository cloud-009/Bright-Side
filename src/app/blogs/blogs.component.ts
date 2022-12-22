import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogData: any;
  searchText: string = '';

  constructor() {
    // 
   }

  ngOnInit(): void {
    // 
  }


}
