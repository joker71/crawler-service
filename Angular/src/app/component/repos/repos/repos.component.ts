import { Component, OnInit } from '@angular/core';
import { ReposService } from '../../../_service/repos.service';

@Component({
  selector: 'app-repos',
  imports: [],
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css'
})
export class ReposComponent implements OnInit {
  constructor(private service: ReposService){}
  ngOnInit(): void {
    this.service.paginate({
      page: 0,
      limit: 20
    }).subscribe({
      next: res => {
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
