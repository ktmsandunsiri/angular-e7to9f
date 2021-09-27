import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kastane-dropdown',
  templateUrl: './kastane-dropdown-component.html',
  styleUrls: ['./kastane-dropdown-component.scss'],
})
export class KastaneDropdownComponent implements OnInit {
  @Output() change = new EventEmitter<number>();
  selectedItem: any;
  selectedVal: number = 0;
  @Input('idField') idField: string = 'id';
  @Input('nameField') nameField: string = 'name';

  @Input('options') options: any[] = [];

  @Input('selected')
  set selected(val: number) {
    this.selectedVal = val;
    this.selectedItem = this.options.find((opt) => opt[this.idField] == val);
  }
  @Input('outline') outline = false;
  @Input('shadow') shadow = true;
  @Input('small') small = false;

  ngOnInit() {
    this.selectedItem =
      this.options && this.options.length
        ? this.options[this.selectedVal]
        : null;
    // this.orderChangeEvent.emit(this.selectedItem[this.idField]);
  }

  handleOnChange(selectedItm: any) {
    this.selectedItem = selectedItm;
    this.selectedVal = this.selectedItem[this.idField];
    this.change.emit(this.selectedVal);
  }
}
