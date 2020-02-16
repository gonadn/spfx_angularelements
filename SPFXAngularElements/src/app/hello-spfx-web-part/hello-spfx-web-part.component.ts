import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-spfx-web-part',
  templateUrl: './hello-spfx-web-part.component.html',
  styleUrls: ['./hello-spfx-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HelloSpfxWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
