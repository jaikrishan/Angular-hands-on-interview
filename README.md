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




