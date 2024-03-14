import { Component } from '@angular/core';
import { ObjectLayoutWidget } from 'ngx-schema-form';

@Component({
    selector: 'my-custom-paragraph',
    template: `
    <div style="border:dashed 1px;padding: 0 1em 1em 1em;">
    <h4>{{schema.title}}</h4>
    <p>{{schema.description}}</p>
    </div>
    `
})
export class ParagraphWidget extends ObjectLayoutWidget {

}
