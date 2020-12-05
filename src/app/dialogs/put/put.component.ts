import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service' 

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {
  putForm: FormGroup
  constructor(private cookieSerice: CookieService, private fb: FormBuilder, private dataService: DataService) {
    this.putForm = this.fb.group({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      post: new FormControl(null, Validators.required)
    })
   }
  ngOnInit() { }
  put() {
    let data = {
      title: this.putForm.get('title')?.value,
      description: this.putForm.get('description')?.value,
      post: this.putForm.get('post')?.value
    }
    let id = this.cookieSerice.get('id')
    this.dataService.put(id, data).subscribe(err => {
        if (err) {
          console.log(err)
        } else {
          console.log("PUT Success")
        }
    })
    this.putForm.reset()
  }

}
