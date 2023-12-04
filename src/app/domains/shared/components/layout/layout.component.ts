 import { Component } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { HeaderComponent } from '../header/header.component'
 import { RouterOutlet } from '@angular/router'

 @Component({
     selector: 'app-layout',
     standalone: true,
     imports: [
         CommonModule,
         HeaderComponent,
         RouterOutlet
 ],
     templateUrl: './layout.component.html',
     styleUrl: './layout.component.scss'
 })
 export class LayoutComponent {

 }
