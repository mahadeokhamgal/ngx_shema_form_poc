import { Component } from '@angular/core'
import { ControlWidget } from 'ngx-schema-form'

@Component({
    selector: 'my-custom-radio',
    template: `
      <label [attr.for]="id">
          {{ schema.hasOwnProperty('title') ? schema.title : formProperty.path }}
      </label>
      <div *ngFor="let option of schema.oneOf" class="radio">
          <p-radioButton
                  [name]="name"
                  [value]=""
                  [attr.disabled]="schema.readOnly"
                  [formControl]="control"
                  label="{{option.description || (schema.hasOwnProperty('title') ? schema.title :formProperty.path) + ' '}}"
          ></p-radioButton>
      </div>
      <div><small>{{schema.description}}</small></div>
  `
})
export class RadioWidget extends ControlWidget {

}