import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/common/services/service/services.service';

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.scss']
})
export class ChampionDetailsComponent {
  constructor(
    public service: ServicesService,
    private router: Router,
  ) {
  }

  backToList(): void {
    this.service.setChampionSelected(null);
    this.router.navigateByUrl('listar-campeoes');
  }
}
