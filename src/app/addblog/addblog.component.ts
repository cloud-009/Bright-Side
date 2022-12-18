import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  submitForm!: FormGroup;
  buttonContainerVisible = false;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formControls();
    this.getStory();
  }

  toggleButtonContainer() {
    this.buttonContainerVisible = !this.buttonContainerVisible;
  }

  showButton() {
    this.buttonContainerVisible = true
  }

  hideButton() {
    this.buttonContainerVisible = false
  }

  formControls() {
    this.submitForm = this.fb.group({
      title: [''],
      content: ['']
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
    this.api.postData(this.submitForm.value).subscribe({
      next: (res) => {
        this.getStory();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
