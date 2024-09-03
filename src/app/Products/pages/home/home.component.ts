import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LOADPRODUCTS } from 'src/app/state/actions/loadProducts';
import { AppState } from 'src/app/state/app.state';
import { selectLoading } from 'src/app/state/selector/products.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private store = inject(Store<AppState>);
  loading$: Observable<boolean> = new Observable();

  constructor() {}

  ngOnInit() {
    console.log('GFDS');
    this.store.dispatch(LOADPRODUCTS());

    console.log(this.loading$);
    this.loading$ = this.store.select(selectLoading);
  }
}
