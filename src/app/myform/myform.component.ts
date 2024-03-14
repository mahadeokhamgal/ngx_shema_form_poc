import { Component, OnInit } from '@angular/core';
import validators from './schema-form-validators'
@Component({
  selector: 'myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyFormComponent implements OnInit {
  schemaObject: any = schema_json
  currentModel: object = {}
  customValidators = {
    '/forename': (value: any, formProperty: any, formPropertyGroup: any) => {
      return getNameValidationError(value, formProperty, formPropertyGroup)
    },
    '/name': (value: any, formProperty: any, formPropertyGroup: any) => {
      return getNameValidationError(value, formProperty, formPropertyGroup)
    }
  }
  rerenderCounter = 0
  propertyCounter = 0
  constructor() { }

  ngOnInit() {
  }

  rerenderForm(event: any) {
    // this.schemaObject = null
    this.schemaObject = schema_json
    this.rerenderCounter += 1

    schema_json.properties.paragraph.title = `YOU RE-RENDERED THIS FORM ${this.rerenderCounter} TIMES`
  }

  addNewProperty(event:any) {
    const name = `newProperty${this.propertyCounter}`
    this.schemaObject.fieldsets[0].fields.push(name)
    this.schemaObject.properties[name] = {
      type: 'string',
      title: `New property (${this.propertyCounter})`,
      description: 'A new property'
    }
  }
}

var schema_json = {
  properties: {
    "paragraph": {
      "type": "string",
      "title": "Paragraph",
      "description": "Example text for a non input widget",
      "default": "Set here some value that should end into model.",
      "widget": {
        "id": "paragraph"
      }
    },
    "name": {
      "type": "string",
      "title": "Name",
      "description": "Example of validation with Z-Schema. (Only uppercase allowed, type some text here)",
      "placeholder": "e.g: DOE",
      "pattern": "^[A-Z]{1,}$",
      "minLenght": 1,
      "maxLength": 10
    },
    "forename": {
      "type": "string",
      "title": "Given name",
      "description": "Your given name here. Has a custom validator. (Must not be the same as 'Name')",
      "placeholder": "e.g: John"
    },
    "gender": {
      "type": "string",
      "title": "Gender",
      "description": "Select gender here",
      "widget": {
        "id": "radio"
      },
      "oneOf": [
        {
          "enum": [
            ""
          ],
          "description": "None"
        },
        {
          "enum": [
            "m"
          ],
          "description": "Male"
        },
        {
          "enum": [
            "f"
          ],
          "description": "Female"
        },
        {
          "enum": [
            "x"
          ],
          "description": "Other"
        }
      ]
    }
  },
  "required": [
    "name"
  ]
};

/**
 * 
 */
const getNameValidationError = (value: any, formProperty: any, formPropertyGroup: any) => {
  const forenameProperty = formProperty.findRoot().getProperty('forename')
  const nameProperty = formProperty.findRoot().getProperty('name')
  const valid = (forenameProperty.value !== nameProperty.value)

  if (!valid) {
    if (forenameProperty.path !== formProperty.path) {
      forenameProperty.updateValueAndValidity(true, false)
    }
    const error = {
      code: 'MUST_NOT_MATCH_NAME',
      path: `#${forenameProperty.path}`,
      message: '"Forename" must be different then "Name"',
      params: [value]
    }
    return error
  }
  return null
}