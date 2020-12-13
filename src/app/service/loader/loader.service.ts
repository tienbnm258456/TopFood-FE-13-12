import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LoaderService {

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  show() {
    this.isOpen = true;
    this.change.emit(this.isOpen);
  }
  hide() {
    this.isOpen = false;
    this.change.emit(this.isOpen);
  }
}
