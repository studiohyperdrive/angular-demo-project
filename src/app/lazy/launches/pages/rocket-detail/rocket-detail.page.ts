import { Component } from '@angular/core';

@Component({
  templateUrl: './rocket-detail.page.html',
})
export class RocketDetailPage {
  /**
   * TODO: Our RocketDetailPage should:
   *  1. have a rocket$ observable that will contain our rocket
   *  2. get the rocket through our RocketFacade
   *  3. select the rocket from the store through the RocketFacade
   *
   *  HINT: You will need this to select the id:
   *  constructor(
   *     private readonly route: ActivatedRoute
   *   ) {}
   *
   *   public ngOnInit(): void {
   *     const id = this.route.snapshot.paramMap.get('id');
   *   }
   */
}
