import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cyber-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input('side') side: any;
  constructor() { }

  ngOnInit(): void {
  }

}
