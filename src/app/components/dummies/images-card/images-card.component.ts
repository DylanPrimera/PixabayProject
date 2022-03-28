import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/util/interfaces/image';

@Component({
  selector: 'app-images-card',
  templateUrl: './images-card.component.html',
  styleUrls: ['./images-card.component.scss']
})
export class ImagesCardComponent implements OnInit {
  @Input() image: Image;
  constructor() { }

  ngOnInit(): void {
  }

  public showImage(url: string):void {
    window.open(url, '_blank');
  }

}
