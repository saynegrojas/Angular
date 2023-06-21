import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  private showAdd: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  // method to toggle showAdd
  toggleAddTask(): void {
    this.showAdd = !this.showAdd;
    this.subject.next(this.showAdd);
  }

  // call when we toggle
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
