import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  blogForm!: FormGroup;
  resData: any;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formControls();
    this.getStory();
  }


  formControls() {
    this.blogForm = this.fb.group({
      title: new FormControl(''),
      content: new FormControl('')
    })
  }

  getStory() {
    this.api.getData().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  postStory() {
    this.api.postData(this.blogForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.blogForm.reset();
        this.resData = this.getStory();
        console.log(this.resData);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


}
