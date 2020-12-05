import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service' 
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private dataService: DataService, private cookieService: CookieService) { }

  ngOnInit() { }
  delete() {
    let id = this.cookieService.get('deleteId')
    this.dataService.delete(id).subscribe(err => {
      if (err) {
        console.log(err)
      } else {
        console.log("Delete Success")
      }
    })
  }
}
