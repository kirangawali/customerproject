import { Directive , ElementRef, OnChanges, OnInit , HostListener} from '@angular/core';

@Directive({
  selector: '[appHhvalidate]'
})
export class HhvalidateDirective implements OnChanges , OnInit{

  @HostListener('blur') OnBlur(){
    if(this.element.nativeElement.value > 23){
      this.element.nativeElement.value = 23;
      console.log(this.element.nativeElement.value);
    }
    console.log(this.element.nativeElement.value);
  }

  constructor(private element :ElementRef) {
    console.log('directive called' + element);
   }
 ngOnChanges(){
  console.log('directive ' +this.element);
 }

 ngOnInit(){
  console.log('called ' +this.element);
 }
}
