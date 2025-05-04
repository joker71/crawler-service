import {Component, OnInit} from '@angular/core';
import {ReposService} from '../../../_service/repos.service';

@Component({
  selector: 'app-repos',
  standalone: false,
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css'
})
export class ReposComponent implements OnInit {

  constructor(private reposService: ReposService) {
  }

  ngOnInit() {
    this.reposService.paginate({
      page: 1,
      limit: 10,

    }).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }
}
