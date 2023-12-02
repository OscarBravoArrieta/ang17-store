import { Component, Input, SimpleChanges } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

     @Input({required: true}) duration: number = 0
     @Input({required: true}) message: string  = ''

     constructor() {
         // No async
         // Before render
         console.log('Constructor')
         console.log('-' .repeat(10))
     }
     ngOnChanges(changes: SimpleChanges) {
         //before and during the render
         console.log('Constructor')
         console.log('-' .repeat(10))
         console.log(changes)
         const duration = changes['duration']
         if (duration && duration.currentValue !== duration.previousValue) {
             this.doSomethings()
         }

         console.log(duration)
     }
     //--------------------------------------------------------------------------------------------

     ngOnInit() {

         // Afret render
         // Una vez
         // async, then, subs
         console.log('ngOnInit')
     }

     //--------------------------------------------------------------------------------------------

     ngOnGinit() {
         //After render
         //Una vez
         //async, then, subs
         console.log('ngOnInit')
         console.log('-' .repeat(10))
         console.log('suration => ', this.duration)
         console.log('message => ', this.message)


     }

     //--------------------------------------------------------------------------------------------
      ngAfterViewInit() {
         //After de render
         //After render your childs
         console.log('ngAfterViewInit')
         console.log('-' .repeat(10))

     }
     //--------------------------------------------------------------------------------------------
     ngOnDestroy() {

         console.log('ngOnDestroy')
         console.log('-' .repeat(10))

     }
     //--------------------------------------------------------------------------------------------

     doSomethings() {

         console.log('Change duration')

     }

     //--------------------------------------------------------------------------------------------



}
