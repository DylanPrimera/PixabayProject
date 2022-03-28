import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PixabayService } from 'src/app/services/pixabay.service';
import { Image } from 'src/app/util/interfaces/image';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent implements OnInit, OnDestroy {
  public images: Image[];
  public subscriptions = new Subscription();
  public searcWord: string;
  public category: string;
  public showSpinner: boolean;

  constructor(private api: PixabayService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.api.getSearchWord().subscribe((word) => {
        this.searcWord = word;
        this.showSpinner = true;
        this.getImages();
      })
    );
    this.subscriptions.add(
      this.api.getCategory().subscribe((category) => {
        this.category = category;
        this.showSpinner = true;
        this.getImages();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getImages(): void {
    this.images = [];
    if (!this.category) {
      setTimeout(() => {
        this.subscriptions.add(
          this.api.getImages(this.searcWord, 20).subscribe((data) => {
            this.showSpinner = false;
            if (data.hits.length === 0) {
              this.api.setError('Sorry, image could not be found');
              this.showSpinner = false;
              return;
            }
            this.images = data.hits;
          }, () => {
            this.api.setError('Server error');
            this.showSpinner = false;
          })
        );
      }, 2000);

    } else {
       setTimeout(() => {
        this.subscriptions.add(
          this.api.getImages(this.searcWord, 20).subscribe((data) => {
            this.showSpinner = false;
            if (data.hits.length === 0) {
              this.api.setError('Sorry, image could not be found');
              this.showSpinner = false;
              return;
            }
            this.images = data.hits;
          }, () => {
            this.api.setError('Server error');
            this.showSpinner = false;
          })
        );
      }, 2000);
    }
  }

}
