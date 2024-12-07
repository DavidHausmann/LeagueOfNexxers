import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Champion } from 'src/app/common/models/common.model';
import { ServicesService } from 'src/app/common/services/service/services.service';
import { StorageService } from 'src/app/common/services/storage/storage.service';

@Component({
  selector: 'app-list-champions',
  templateUrl: './list-champions.component.html',
  styleUrls: ['./list-champions.component.scss']
})
export class ListChampionsComponent implements OnInit {
  @Output() championSelected = new EventEmitter();
  public dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'icon',
    'name',
    'actions'
  ];
  loading = false;
  constructor(
    private service: ServicesService,
    private router: Router,
    private storage: StorageService,
    private toastr: ToastrService,
  ) {
    this.dataSource = new MatTableDataSource<any>();
  }
  ngOnInit(): void {
    this.loading = true;
    this.service.getChampions().subscribe(
      success => {
        this.dataSource = new MatTableDataSource<any>(success);
      },
      error => {
        this.toastr.error(error.error?.message);
      }
    ).add(() => this.loading = false);
  }

  goToDetails(champion: Champion): void {
    this.service.setChampionSelected(champion);
    this.router.navigateByUrl('detalhes-do-campeao');
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  backToLogin(): void {
    this.storage.sessionStorageClear();
    this.router.navigateByUrl('');
  }
}
