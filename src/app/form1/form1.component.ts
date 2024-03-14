import { Component } from '@angular/core';
import { ISchema } from 'ngx-schema-form/lib/model';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.less']
})
export class Form1Component {
  schemaObject : ISchema;
  currentModel: object = {
    "bornOn": "1800-12-12",
    "contributors": [],
    "categories": [],
    "moreInfo": true,
    "survey": {
      "q2": {
        "color": "#aaa000",
        "zip": 15
      }
    },
    "favoriteColor": "#aaa111",
    "category": [],
    "deliveryService": "fedex",
    "colors": []
  }

  constructor() { 
    this.schemaObject = {
      properties : {
        "firstName": {
          "type": "string",
          "title": "firstName",
          "pattern": "[a-z]*",
          "minLength": 1,
          "maxLength": 10
        },
        "lastName": {
          "type": "string",
          "title": "lastName"
        },
        "language": {
          "type": "string",
          "title": "Language",
          "widget": {
            "id": "select"
          },
          "oneOf": [
            {
              "enum": [
                "es"
              ],
              "description": "Spanish"
            },
            {
              "enum": [
                "fr"
              ],
              "description": "French"
            }
          ]
        },
        "hobby": {
          "type": "string",
          "title": "hobby",
          "widget": {
            "id": "array"
          },
          "oneOf": [
            {
              "enum": [
                "1"
              ],
              "description": "111"
            },
            {
              "enum": [
                "2"
              ],
              "description": "222"
            },
            {
              "enum": [
                "3"
              ],
              "description": "333"
            },
            {
              "enum": [
                "4"
              ],
              "description": "444"
            }
          ]
        },
        "gender": {
          "type": "string",
          "title": "gender",
          "widget": {
            "id": "radio"
          },
          "oneOf": [
            {
              "enum": [
                ""
              ],
              "description": "Please Select"
            },
            {
              "enum": [
                "m"
              ],
              "description": "Mail"
            },
            {
              "enum": [
                "w"
              ],
              "description": "Femail"
            }
          ]
        }
      }
    };
    // this.currentModel = model_json;
  }

  ngOnInit() {
    
  }
}

const schema_json = {
  properties : {
    "firstName": {
      "type": "string",
      "title": "firstName",
      "pattern": "[a-z]*",
      "minLength": 1,
      "maxLength": 10
    },
    "lastName": {
      "type": "string",
      "title": "lastName"
    },
    "language": {
      "type": "string",
      "title": "Language",
      "widget": {
        "id": "select"
      },
      "oneOf": [
        {
          "enum": [
            "es"
          ],
          "description": "Spanish"
        },
        {
          "enum": [
            "fr"
          ],
          "description": "French"
        }
      ]
    },
    "hobby": {
      "type": "string",
      "title": "hobby",
      "widget": {
        "id": "array"
      },
      "oneOf": [
        {
          "enum": [
            "1"
          ],
          "description": "111"
        },
        {
          "enum": [
            "2"
          ],
          "description": "222"
        },
        {
          "enum": [
            "3"
          ],
          "description": "333"
        },
        {
          "enum": [
            "4"
          ],
          "description": "444"
        }
      ]
    },
    "gender": {
      "type": "string",
      "title": "gender",
      "widget": {
        "id": "radio"
      },
      "oneOf": [
        {
          "enum": [
            ""
          ],
          "description": "Please Select"
        },
        {
          "enum": [
            "m"
          ],
          "description": "Mail"
        },
        {
          "enum": [
            "w"
          ],
          "description": "Femail"
        }
      ]
    }
  }
}

const model_json = {
  "bornOn": "1800-12-12",
  "contributors": [],
  "categories": [],
  "moreInfo": true,
  "survey": {
    "q2": {
      "color": "#aaa000",
      "zip": 15
    }
  },
  "favoriteColor": "#aaa111",
  "category": [],
  "deliveryService": "fedex",
  "colors": []
}
