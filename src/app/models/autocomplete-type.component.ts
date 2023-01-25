import { Component, NgModule, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { FieldTypeConfig } from '@ngx-formly/core';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'formly-autocomplete-type',
  template: `
    <input
      matInput
      [formControl]="formControl"
      [matAutocomplete]="auto" 
      
    /> 
    <mat-autocomplete #auto="matAutocomplete" >
      <mat-option *ngFor="let value of filter | async | keyvalue"  [value]="value.value">
        {{ value.value}}
      </mat-option>
    </mat-autocomplete>
  `,
})
export class AutocompleteTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {
  filter: any | undefined;

  ngOnInit() {
    console.log(this.filter);
    this.filter = this.formControl.valueChanges.pipe(
      startWith(''),
      tap(value=> console.log(value)),
      map(term => this.props['filter'](term)),
    );
  }

  }
 


@NgModule({
    imports: [
        CommonModule,
        MatAutocompleteModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [AutocompleteTypeComponent],
    providers: [],
})
export class AutocompleteTypeModule { }
