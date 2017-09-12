import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ClickValueService {
  searchValue = new Subject;

  constructor() { }

}
