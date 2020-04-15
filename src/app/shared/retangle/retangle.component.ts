import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cyber-retangle',
  templateUrl: './retangle.component.html',
  styleUrls: ['./retangle.component.scss']
})
export class RetangleComponent implements OnInit {
  @Input('side') side: any;
  constructor() { }

  ngOnInit(): void {
  }

}
