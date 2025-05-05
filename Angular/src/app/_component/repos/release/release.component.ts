import { Component, Inject, OnInit } from '@angular/core';
import { ReposService } from '../../../_service/repos.service';
import { PageEvent } from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-release',
  standalone: false,
  templateUrl: './release.component.html',
  styleUrl: './release.component.css',
})
export class ReleaseComponent implements OnInit {
  release: any[] = [];
  pageSize = 5;
  pageIndex: number = 0;
  total: number = 0;

  filter_value: any = {
    page: this.pageIndex,
    limit: this.pageSize,
  };
  pageSizeOptions: number[] = [5, 10, 15];
  repo: any;

  constructor(
    private service: ReposService,
    public dialogRef: MatDialogRef<ReleaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit() {
    this.repo = this.data.repo;
    if (this.repo.id) {
      this.filter_value = { ...this.filter_value, repoId: 509 };
      this.getListRealise();
    }
  }
  getListRealise() {
    this.service.getRelease(this.filter_value).subscribe({
      next: (res) => {
  
        this.release = res.data;
        this.total = res.total;
      },
      error: (err) => {
        this.release = []
        alert('Co loi xay ra');
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
    this.filter_value = { ...paginateOptions, repoId: 509  };
    this.getListRealise();
  }
}
