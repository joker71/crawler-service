import {Component, OnInit} from '@angular/core';
import {ReposService} from '../../../_service/repos.service';

@Component({
  selector: 'app-release',
  standalone: false,
  templateUrl: './release.component.html',
  styleUrl: './release.component.css'
})
export class ReleaseComponent implements OnInit{

  data: any[] = [];
  pageSize = 10;
  pageIndex: number = 0;
  total: number = 0;


  filter_value:any = {
    page: this.pageIndex,
    limit: this.pageSize
  }
  pageSizeOptions: number[] = [5, 10, 15];


  constructor(private service: ReposService){}
  ngOnInit() {
  }

}
