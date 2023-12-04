 import { Component, Input, SimpleChanges, inject, signal } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { ProductComponent } from '../../components/product/product.component'
 import { RouterLinkWithHref } from '@angular/router'
 import { Product } from '../../../shared/models/product.model'
 import { HeaderComponent } from '../../../shared/components/header/header.component'
 import { CartService } from '../../../shared/services/cart.service'
 import { ProductService } from '../../../shared/services/product.service'
 import { CategoryService } from '@shared/services/category.service'
 import { Category } from '@shared/models/category.model'

 @Component({
     selector: 'app-list',
     standalone: true,
     imports: [
    CommonModule,
    ProductComponent,
    HeaderComponent,
    RouterLinkWithHref
],
     templateUrl: './list.component.html',
     styleUrl: './list.component.scss'
 })
 export default class ListComponent {

     products = signal<Product[]>([])
     categories = signal<Category[]>([])
     private cartService = inject(CartService)
     private productService = inject(ProductService)
     private categoryService = inject(CategoryService)
     @Input() category_id?: string

     //--------------------------------------------------------------------------------------------

     ngOnInit() {

         this.getCategories()

     }

     //--------------------------------------------------------------------------------------------

     ngOnChanges(changes: SimpleChanges) {

         this.getProducts()

     }

     //--------------------------------------------------------------------------------------------

     addToCart(product: Product) {

         this.cartService.addToCart(product)

     }

     //--------------------------------------------------------------------------------------------
     getProducts() {

         this.productService.getProducts(this.category_id).subscribe({
             next: (products) => {
                 this.products.set(products)
             }, error: () => {
                 //manage the posible error
             }
         })
     }

     //--------------------------------------------------------------------------------------------
     getCategories() {

         this.categoryService.getAll().subscribe({
             next: (data) => {
                 this.categories.set(data)
             }, error: () => {
                 //manage the posible error
             }
         })
     }

     //--------------------------------------------------------------------------------------------

 }
