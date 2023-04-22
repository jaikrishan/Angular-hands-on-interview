import { Directive, ElementRef, HostBinding, HostListener, OnInit , Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit{

  constructor(private elementRef : ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = "red";
  }

  @HostBinding('style.color') color!: string;

  @HostListener('mouseover') onMouseOver() {
    // let part = this.elementRef.nativeElement.style.backgroundColor ='pink';
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','pink');
    // alert('highlighted');
    this.color = 'green';
  }



}
