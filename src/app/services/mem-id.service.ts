import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemIdService {
  public memId = new BehaviorSubject<string>("");
  currMemId = this.memId.asObservable();

  constructor() { }
  changeId(id: string) {
    this.memId.next(id);
  }
}
