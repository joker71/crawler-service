import { Component, OnInit } from '@angular/core';
import { ReposService } from '../../../_service/repos.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ReleaseComponent } from '../release/release.component';

@Component({
  selector: 'app-repos',
  standalone: false,
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css',
})
export class ReposComponent implements OnInit {
  data: any[] = [];
  pageSize = 10;
  pageIndex: number = 0;
  total: number = 0;

  filter_value: any = {
    page: this.pageIndex,
    limit: this.pageSize,
  };
  pageSizeOptions: number[] = [5, 10, 15];

  constructor(private service: ReposService, public matDialog: MatDialog) {}
  ngOnInit(): void {
    this.getList(this.filter_value);
  }
  getList(filterValue: any) {
    this.service.paginate(filterValue).subscribe({
      next: (res) => {
        this.data = res.data;
        this.total = res.total;
      },
      error: (err) => {
        this.data = [];
        console.log(err);
      },
    });
  }

  onChangePaginator(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
    const paginateOptions: any = {
      page: this.pageIndex,
      limit: this.pageSize,
    };
    this.filter_value = { ...paginateOptions };
    this.getList(this.filter_value);
  }
  onDetail(repo: any) {
    let dialog = this.matDialog.open(ReleaseComponent, {
      width: '600px',
      height: '90%',
      data: {
        repo: { ...repo },
      },
    });
    dialog.afterClosed().subscribe((result: any) => {
      console.log(true);
    });
  }
}
