import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { LaunchService } from '../../services/launch/launch.service';
import { IPaginatedResponse } from '../../repositories.types';
import { ILaunch } from '../../services/launch/launch.types';

import { LaunchActions } from './launch.const';
import { getLaunchesFailed, getLaunchesSucces } from './launch.actions';
import { of } from 'rxjs';

@Injectable()
export class LaunchEffects {
  constructor(
    private actions$: Actions,
    private launch: LaunchService
  ) { }

  public launches$ =
    createEffect(() => this.actions$.pipe(
      ofType(LaunchActions.getLaunches),
      switchMap(({ offset }) => {
        return this.launch.getLaunches(offset).pipe(
          map(({ results }: IPaginatedResponse<ILaunch>) => getLaunchesSucces({ results })),
          catchError((error: Error) => of(getLaunchesFailed({ error })))
        );
      })
    ));
}
