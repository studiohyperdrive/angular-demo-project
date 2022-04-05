import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { RocketFacade } from '../../facades/rocket/rocket.facade';
import { IRocket } from '../../../../modules/repositories/services/rocket/rocket.types';

@Component({
  templateUrl: './rocket-detail.page.html',
})
export class RocketDetailPage implements OnInit {
  public rocket$: Observable<IRocket>;

  constructor(
    private readonly rocketFacade: RocketFacade,
    private readonly route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.rocketFacade.getRocket(parseInt(id));
    this.rocket$ = this.rocketFacade.selectRocket();
  }
}
