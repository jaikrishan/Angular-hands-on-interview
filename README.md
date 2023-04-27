# Angular-hands-on-interview

/*
-> http call - normal and observable -> normal CRUD
-> component communication max try - input output
-> ngClass , style , data binding , ngModel
-> lifecycle hook some 
-> pipe
-> directive , hostlistner , host binding 
-> unit test
*/


<!-- <p>{{ myDateValue | date:'M/d/yy' }}</p> -->
<!-- ngClass
type one
    [class.my_class] = "step === 'step1'"
type two
    [ngClass]="{'my_class': step === 'step1'}"
and multiple option:
    [ngClass]="{'my_class': step === 'step1', 'my_class2' : step === 'step2' }"
type three
    [ngClass]="{1 : 'my_class1', 2 : 'my_class2', 3 : 'my_class4'}[step]"
type four
    [ngClass]="step == 'step1' ? 'my_class1' : 'my_class2'" -->


<!-- Angular 4 and 5:

Using else:

<div *ngIf="isValid;else other_content">
    content here ...
</div>

<ng-template #other_content>other content here...</ng-template>
You can also use then else:

<div *ngIf="isValid;then content else other_content">here is ignored</div>
<ng-template #content>content here...</ng-template>
<ng-template #other_content>other content here...</ng-template>
Or then alone:

<div *ngIf="isValid;then content"></div>
<ng-template #content>content here...</ng-template> -->


<!-- 0 is false and 1 is true -->

<!-- if(0) {
    console.log('ok')
} -->

// Subject and Behavior subject
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
  observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  emitData(data) {
    this.observer.next(data);
  }
}

constructor(private appService: AppService) {}

ngOnInit() {
  this.appService.subscriber$.subscribe(data => {
    console.log(data);
  });
}


// deep and shallow

var obj = {
    name : 'jai',
    fullName : {
        name : 'jai krishan'
    }
}
var copyShallow1 = obj;
// var copyShallow1 = {...obj};
var copyShallow2 = Object.assign({},obj);
var deepCopy = JSON.parse(JSON.stringify(obj));

copyShallow1.name = 'Binit';
copyShallow1.fullName.name = ' Binit kumar';

copyShallow2.name = 'Binit';
copyShallow2.fullName.name = ' Binit kumar';

deepCopy.name = 'Binit';
deepCopy.fullName.name = ' Binit kumar';

console.log(obj);
console.log(copyShallow1);
// console.log(copyShallow2);
// console.log(deepCopy);

// Slice - did not change original array and splice - change orig arr

var a = [1,2,3];
a1= a.slice(1);
console.log(a1); => a is 1,2,3 but a1 is 2,3

var a = [1,2,3];
a1= a.splice(1);
console.log(a); => a1 is 2,3 but a is 1 


// Async and await 

function resolveAfter2Sec() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolve after 2 sec')
        },2000)       
        })
}

async function checkPromise() {
    console.log('first call');
    <!-- await resolveAfter2Sec();
    console.log('after call') -->
    const result = await resolveAfter2Sec();
    console.log(result)
}
checkPromise();


let p = new Promise((resolve) => resolve('Resolved'))
p.then(data => console.log(data))

async function foo() {
  return 1;
}
console.log(foo()); // Promise {1}

same as 

function foo() {
  return Promise.resolve(1);
}
console.log(foo());

<!-- await is only valid in async function -->





