import { Component } from '@angular/core';
import { ISchema } from 'ngx-schema-form/lib/model';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.less']
})
export class Form4Component {
  currentModel: object;
  schemaObject: ISchema;
  constructor() {
    this.currentModel = {};
    this.schemaObject = {
      properties: {
        "firstName": {
          "type": "string",
          "title": "firstName",
          "pattern": "[a-z]*",
          "minLength": 1,
          "maxLength": 10
        },
        "lastName": {
          "type": "string",
          "title": "lastName",
          "buttons": [
            {
              "label": "changetest",
              "id": "changetest",
              "onClick": "handleButtonClick"
            }
          ]
        },
        "password": {
          type: "string",
          description: "Password",
          buttons: [
            {
              id: 'reset',
              label: 'Reset'
            }
          ]
        }
      },
      "onChange": "handleChange"
    }
  }

  myActions = {
    handleButtonClick: () => {
      console.log("schema onclick");
    }
  }
  onFormChangesFunc(form: any) {
    // console.log('formchanged event', form, this.currentModel, this.schemaObject);

  }
  handleChange(event: any) {
    console.log("schema onchange");

  }

  handleButtonClick(event: any) {
    console.log("schema onclick", event);

  }
}
