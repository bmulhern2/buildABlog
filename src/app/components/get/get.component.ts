import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { FormControl, FormBuilder, Validators, FormGroup, AbstractFormGroupDirective } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { PutComponent } from 'src/app/dialogs/put/put.component';
import { DeleteComponent } from 'src/app/dialogs/delete/delete.component';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GETComponent implements OnInit {
  posts: any
  postForm: FormGroup
  constructor(private cookieService: CookieService, private dialog: MatDialog, private fb: FormBuilder, private dataService: DataService) { 
    this.dataService.get().subscribe(data => {
      this.posts = data
      console.log(this.posts)
    })
    this.postForm = this.fb.group({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      post: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() { }
  addNewPost() {
    let data = {
     title: this.postForm.get('title')?.value,
     description: this.postForm.get('description')?.value,
     post: this.postForm.get('post')?.value
    }
    this.dataService.post(data).subscribe(err => {
      if (err) {
        console.log(err)
      } else {
        console.log("POST Success")
      }
    })
    this.postForm.reset()
  }
  put(id: any) {
      this.cookieService.set('id', id)
      this.dialog.open(PutComponent)
  }
  delete(id: any) {
      this.cookieService.set('deleteId', id)
      this.dialog.open(DeleteComponent)
  }
}
