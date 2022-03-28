import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.scss']
})
export class ErrorComponentComponent implements OnInit {
  public textError: string = '';
  public showError: boolean = false;
  public subscriptions = new Subscription();

  constructor(private api: PixabayService) {
    this.subscriptions.add(
      this.api.getError().subscribe((data) => {
        this.showMessageError();
        this.textError = data;
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public showMessageError() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 2000);
  }

}
