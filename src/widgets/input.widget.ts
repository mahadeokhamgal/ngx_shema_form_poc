import { Component } from '@angular/core'
import { ControlWidget } from 'ngx-schema-form'

@Component({
  selector: 'my-custom-input',
  template: `
    <label [attr.for]="id">
      {{ schema.hasOwnProperty('title') ? schema.title : formProperty.path }}
    </label>
    <strong *ngIf="-1!==(formProperty.parent.schema.required||[]).indexOf(formProperty.path.split('/').slice(-1)[0])">*</strong>
    <div class="ui-inputgroup">
        <input
          pInputText
          [name]="name"
          [attr.readonly]="schema.readOnly?true:null"
          [attr.type]="this.getInputType()"
          [attr.id]="id"
          [formControl]="control"
          [attr.placeholder]="schema.placeholder"
          [attr.disabled]="schema.readOnly?true:null"
          [attr.maxlength]="schema.maxLength||null"
          [attr.minlength]="schema.minLength||null"
          [attr.size]="schema.widget?.size||null"
        >
    </div>
    <div><small>{{schema.description}}</small></div>
    <ng-container *ngIf="control.dirty">
    <div *ngFor="let error of errorMessages" style="color:red">{{error}}</div>
    </ng-container>
  `
})
export class InputWidget extends ControlWidget {
  getInputType() {
    if (!this.schema.widget.id || this.schema.widget.id === 'string') {
      return 'text';
    } else {
      return this.schema.widget.id;
    }
  }
}