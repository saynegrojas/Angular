import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;

  // P2C
  // variable of the event we are emitting
  @Output() onAddBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    //  send event up to parent component
    this.onAddBtn.emit();
  }
}
