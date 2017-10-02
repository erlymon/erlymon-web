import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../models/user'

@Injectable()
export class SessionService {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  get data(): User { return this.dataChange.value; }
  setData(data: User) { this.dataChange.next(data); }

  constructor() { }
}
