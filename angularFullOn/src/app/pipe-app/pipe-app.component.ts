import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pipe-app',
  templateUrl: './pipe-app.component.html',
  styleUrls: ['./pipe-app.component.scss']
})
export class PipeAppComponent {
   // @ViewChild('enternum') enternum : ElementRef | undefined;
   error: string =""
   @ViewChild('enternum') enternum! : ElementRef ;
  //  @Output('enternums') enternums = new EventEmitter<string>(); 
   enteredNumber : number = 0 ;
  getEnteredNumber(enternum: HTMLInputElement) {
     console.log(enternum.value);
     if(isNaN(parseInt(enternum.value))) {
      this.error = "invalid number;"
      throw new Error('invalid number');
     }
     else {
      this.error =""
      this.enteredNumber = parseInt(enternum.value);
     }
     
    // console.log(this.enternum?.nativeElement.value);
    // this.enternums.emit(enternum.value);
  }
}
