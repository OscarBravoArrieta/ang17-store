 import { Component, EventEmitter, Input, Output } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { Product } from '../../../shared/models/product.model'
 import { ReversePipe } from '@shared/pipes/reverse.pipe'
 import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe'
 import { RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
    //  img = 'https://picsum.photos/640/640?r=' + Math.random()

     @Input({ required: true } ) product!: Product


     @Output() addToCart = new EventEmitter()

     addToCartHandler() {

         this.addToCart.emit(this.product.title)
     }


}