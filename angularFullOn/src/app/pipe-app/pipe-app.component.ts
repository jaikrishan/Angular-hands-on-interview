import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pipe-app',
  templateUrl: './pipe-app.component.html',
  styleUrls: ['./pipe-app.component.scss']
})
export class PipeAppComponent {
   // @ViewChild('enternum') enternum : ElementRef | undefined;
   @ViewChild('enternum') enternum! : ElementRef ;
   @Output('enternums') enternums = new EventEmitter<string>(); 
  getEnteredNumber(enternum: HTMLInputElement) {
    // console.log(enternum.value);
    // console.log(this.enternum?.nativeElement.value);
    this.enternums.emit(enternum.value);
  }
}
