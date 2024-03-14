import { Component } from '@angular/core';
import { ISchema } from 'ngx-schema-form/lib/model';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.less']
})
export class Form3Component {
  schemaObject : ISchema;
  currentModel: object = {
    "demo": {
      "typeTest": {
        "checkboolstring": "false",
        "testboolstringnegative": "true"
      },
      "visibleIfBinding1b": {
        "status1b": "Warn"
      },
      "visibleIfBinding1c": {
        "anyArary1c": []
      }
    }
  };

  constructor() { 
    this.schemaObject = {
      "properties": {
        "demo": {
          "type": "object",
          "properties": {
            "typeTest": {
              "fieldsets": [
                {
                  "id": "bool",
                  "title": "",
                  "description": "# 1. Test boolean",
                  "name": "",
                  "fields": [
                    "checkbool",
                    "testbool",
                    "testboolnegative",
                    "checkboolstring",
                    "testboolstring",
                    "testboolstringnegative"
                  ]
                },
                {
                  "id": "num",
                  "title": "",
                  "description": "# 2. Test number",
                  "name": "",
                  "fields": [
                    "checknum",
                    "testnum",
                    "checknumstring",
                    "testnumstring"
                  ]
                },
                {
                  "id": "num",
                  "title": "",
                  "description": "# 3. Test string",
                  "name": "",
                  "fields": [
                    "checkstring",
                    "teststring"
                  ]
                }
              ],
              "type": "object",
              "properties": {
                "checkbool": {
                  "type": "boolean",
                  "description": "Boolean test (true) as boolean",
                  "widget": {
                    "id": "boolean"
                  }
                },
                "testbool": {
                  "type": "string",
                  "description": "Visible if value is 'true' as boolean",
                  "visibleIf": {
                    "checkbool": true
                  },
                  "widget": {
                    "id": "string"
                  }
                },
                "testboolnegative": {
                  "type": "string",
                  "description": "Visible if value is 'false' as boolean",
                  "visibleIf": {
                    "checkbool": false
                  },
                  "widget": {
                    "id": "string"
                  }
                },
                "checkboolstring": {
                  "type": "string",
                  "widget": {
                    "id": "radio"
                  },
                  "description": "Boolean test (\"true\") as string",
                  "oneOf": [
                    {
                      "description": "String 'true'",
                      "enum": [
                        "true"
                      ]
                    },
                    {
                      "description": "String 'false'",
                      "enum": [
                        "false"
                      ]
                    }
                  ]
                },
                "testboolstring": {
                  "type": "string",
                  "description": "Visible if value is 'true' as string",
                  "visibleIf": {
                    "checkboolstring": "true"
                  },
                  "widget": {
                    "id": "string"
                  }
                },
                "testboolstringnegative": {
                  "type": "string",
                  "description": "Visible if value is 'false' as string",
                  "visibleIf": {
                    "checkboolstring": "false"
                  },
                  "widget": {
                    "id": "string"
                  }
                },
                "checknum": {
                  "type": "number",
                  "description": "Number test (1)",
                  "widget": {
                    "id": "number"
                  }
                },
                "testnum": {
                  "type": "string",
                  "description": "Visible if value is '1' as number",
                  "visibleIf": {
                    "checknum": 1
                  },
                  "widget": {
                    "id": "string"
                  }
                },
                "checknumstring": {
                  "type": "string",
                  "description": "Number test (\"1\") as string",
                  "widget": {
                    "id": "select"
                  },
                  "oneOf": [
                    {
                      "description": "Select a number",
                      "enum": [
                        ""
                      ]
                    },
                    {
                      "description": "Number 1",
                      "enum": [
                        "1"
                      ]
                    },
                    {
                      "description": "Number 2",
                      "enum": [
                        "2"
                      ]
                    }
                  ]
                },
                "testnumstring": {
                  "type": "string",
                  "description": "Visible if value is '1' as string",
                  "visibleIf": {
                    "checknumstring": "1"
                  },
                  "widget": {
                    "id": "string"
                  }
                },
                "checkstring": {
                  "type": "string",
                  "description": "String test (a)",
                  "widget": {
                    "id": "string"
                  }
                },
                "teststring": {
                  "type": "string",
                  "description": "Visible if value is 'a' as string",
                  "visibleIf": {
                    "checkstring": "a"
                  },
                  "widget": {
                    "id": "string"
                  }
                }
              },
              "widget": {
                "id": "object"
              }
            },
            "visibleIfBinding1a": {
              "description": "# 4. Test 'VisibleIf' with default 'one-of' with multiple values",
              "type": "object",
              "properties": {
                "status1a": {
                  "type": "string",
                  "description": "Visible component shows up if status is 'Warn' or 'Fail'",
                  "oneOf": [
                    {
                      "description": "Pass",
                      "enum": [
                        "Pass"
                      ]
                    },
                    {
                      "description": "Warn",
                      "enum": [
                        "Warn"
                      ]
                    },
                    {
                      "description": "Fail",
                      "enum": [
                        "Fail"
                      ]
                    }
                  ],
                  "widget": {
                    "id": "radio"
                  }
                },
                "visibleComponent1a": {
                  "type": "string",
                  "description": "Visible component if status is 'Warn' or 'Fail'",
                  "visibleIf": {
                    "/demo/visibleIfBinding1a/status1a": [
                      "Warn",
                      "Fail"
                    ]
                  },
                  "widget": {
                    "id": "string"
                  }
                }
              },
              "fieldsets": [
                {
                  "id": "fieldset-default",
                  "title": "",
                  "description": "# 4. Test 'VisibleIf' with default 'one-of' with multiple values",
                  "name": "",
                  "fields": [
                    "status1a",
                    "visibleComponent1a"
                  ]
                }
              ],
              "widget": {
                "id": "object"
              }
            },
            "visibleIfBinding1b": {
              "description": "# 5. Test 'VisibleIf' with 'oneOf' condition",
              "type": "object",
              "properties": {
                "status1b": {
                  "type": "string",
                  "description": "Visible component shows up if status is 'Warn' or 'Fail'",
                  "oneOf": [
                    {
                      "description": "Pass",
                      "enum": [
                        "Pass"
                      ]
                    },
                    {
                      "description": "Warn",
                      "enum": [
                        "Warn"
                      ]
                    },
                    {
                      "description": "Fail",
                      "enum": [
                        "Fail"
                      ]
                    }
                  ],
                  "widget": {
                    "id": "radio"
                  }
                },
                "visibleComponent1b": {
                  "type": "string",
                  "description": "Visible component if status is 'Warn' or 'Fail'",
                  "visibleIf": {
                    "oneOf": [
                      {
                        "/demo/visibleIfBinding1b/status1b": [
                          "Warn"
                        ]
                      },
                      {
                        "/demo/visibleIfBinding1b/status1b": [
                          "Fail"
                        ]
                      }
                    ]
                  },
                  "widget": {
                    "id": "string"
                  }
                }
              },
              "fieldsets": [
                {
                  "id": "fieldset-default",
                  "title": "",
                  "description": "# 5. Test 'VisibleIf' with 'oneOf' condition",
                  "name": "",
                  "fields": [
                    "status1b",
                    "visibleComponent1b"
                  ]
                }
              ],
              "widget": {
                "id": "object"
              }
            },
            "visibleIfBinding1c": {
              "description": "# 6. Test 'VisibleIf' with 'oneOf' and '$ANY$' condition",
              "type": "object",
              "properties": {
                "anyString1c": {
                  "type": "string",
                  "description": "Visible component shows up with any string here.",
                  "widget": {
                    "id": "string"
                  }
                },
                "anyNum1c": {
                  "type": "number",
                  "description": "Visible component shows up if any number here",
                  "widget": {
                    "id": "number"
                  }
                },
                "anyBoolean1c": {
                  "type": "boolean",
                  "description": "Visible component shows up if any checked state",
                  "widget": {
                    "id": "checkbox"
                  }
                },
                "anyArary1c": {
                  "type": "array",
                  "widget": {
                    "id": "select"
                  },
                  "items": {
                    "type": "string",
                    "oneOf": [
                      {
                        "description": "Option1",
                        "enum": [
                          "Option1"
                        ]
                      },
                      {
                        "description": "Option2",
                        "enum": [
                          "Option2"
                        ]
                      },
                      {
                        "description": "Option3",
                        "enum": [
                          "Option3"
                        ]
                      },
                      {
                        "description": "Option4",
                        "enum": [
                          "Option4"
                        ]
                      }
                    ],
                    "widget": {
                      "id": "string"
                    }
                  },
                  "description": "Visible component shows up if any selection here"
                },
                "visibleComponent1c": {
                  "type": "string",
                  "description": "Visible if any values exist in a test input",
                  "visibleIf": {
                    "oneOf": [
                      {
                        "anyString1c": [
                          "$ANY$"
                        ]
                      },
                      {
                        "anyNum2c": [
                          "$ANY$"
                        ]
                      },
                      {
                        "anyBoolean2c": [
                          "$ANY$"
                        ]
                      },
                      {
                        "anyArary2c": [
                          "$ANY$"
                        ]
                      }
                    ]
                  },
                  "widget": {
                    "id": "string"
                  }
                }
              },
              "fieldsets": [
                {
                  "id": "fieldset-default",
                  "title": "",
                  "description": "# 6. Test 'VisibleIf' with 'oneOf' and '$ANY$' condition",
                  "name": "",
                  "fields": [
                    "anyString1c",
                    "anyNum1c",
                    "anyBoolean1c",
                    "anyArary1c",
                    "visibleComponent1c"
                  ]
                }
              ],
              "widget": {
                "id": "object"
              }
            },
            "visibleIfBinding2a": {
              "description": "# 7. Test Boolean 'VisibleIf' with 'allOf' condition (check 'Warn' and 'Fail')",
              "type": "object",
              "properties": {
                "status2a": {
                  "type": "boolean",
                  "description": "Pass",
                  "widget": {
                    "id": "checkbox"
                  }
                },
                "status2b": {
                  "type": "boolean",
                  "description": "Warn",
                  "widget": {
                    "id": "checkbox"
                  }
                },
                "status2c": {
                  "type": "boolean",
                  "description": "Fail",
                  "widget": {
                    "id": "checkbox"
                  }
                },
                "visibleComponent2a": {
                  "type": "string",
                  "description": "Visible component if status 'Warn' and 'Fail' are checked",
                  "visibleIf": {
                    "allOf": [
                      {
                        "/demo/visibleIfBinding2a/status2b": [
                          true
                        ]
                      },
                      {
                        "/demo/visibleIfBinding2a/status2c": [
                          true
                        ]
                      }
                    ]
                  },
                  "widget": {
                    "id": "string"
                  }
                }
              },
              "fieldsets": [
                {
                  "id": "fieldset-default",
                  "title": "",
                  "description": "# 7. Test Boolean 'VisibleIf' with 'allOf' condition (check 'Warn' and 'Fail')",
                  "name": "",
                  "fields": [
                    "status2a",
                    "status2b",
                    "status2c",
                    "visibleComponent2a"
                  ]
                }
              ],
              "widget": {
                "id": "object"
              }
            },
            "visibleIfBinding2b": {
              "description": "# 8. Test String 'VisibleIf' with 'allOf' condition (select 'Warn' and 'Fail')",
              "type": "object",
              "properties": {
                "status2a": {
                  "type": "string",
                  "oneOf": [
                    {
                      "description": "...",
                      "enum": [
                        ""
                      ]
                    },
                    {
                      "description": "Pass",
                      "enum": [
                        "Pass"
                      ]
                    },
                    {
                      "description": "Warn",
                      "enum": [
                        "Warn"
                      ]
                    },
                    {
                      "description": "Fail",
                      "enum": [
                        "Fail"
                      ]
                    }
                  ],
                  "widget": {
                    "id": "select"
                  }
                },
                "status2b": {
                  "type": "string",
                  "oneOf": [
                    {
                      "description": "Select 'Warn' here",
                      "enum": [
                        ""
                      ]
                    },
                    {
                      "description": "Pass",
                      "enum": [
                        "Pass"
                      ]
                    },
                    {
                      "description": "Warn",
                      "enum": [
                        "Warn"
                      ]
                    },
                    {
                      "description": "Fail",
                      "enum": [
                        "Fail"
                      ]
                    }
                  ],
                  "widget": {
                    "id": "select"
                  }
                },
                "status2c": {
                  "type": "string",
                  "oneOf": [
                    {
                      "description": "Select 'Fail' here",
                      "enum": [
                        ""
                      ]
                    },
                    {
                      "description": "Pass",
                      "enum": [
                        "Pass"
                      ]
                    },
                    {
                      "description": "Warn",
                      "enum": [
                        "Warn"
                      ]
                    },
                    {
                      "description": "Fail",
                      "enum": [
                        "Fail"
                      ]
                    }
                  ],
                  "widget": {
                    "id": "select"
                  }
                },
                "visibleComponent2b": {
                  "type": "string",
                  "description": "Visible component if status 'Warn' and 'Fail' are checked",
                  "visibleIf": {
                    "allOf": [
                      {
                        "/demo/visibleIfBinding2b/status2b": [
                          "Warn"
                        ]
                      },
                      {
                        "/demo/visibleIfBinding2b/status2c": [
                          "Fail"
                        ]
                      }
                    ]
                  },
                  "widget": {
                    "id": "string"
                  }
                }
              },
              "fieldsets": [
                {
                  "id": "fieldset-default",
                  "title": "",
                  "description": "# 8. Test String 'VisibleIf' with 'allOf' condition (select 'Warn' and 'Fail')",
                  "name": "",
                  "fields": [
                    "status2a",
                    "status2b",
                    "status2c",
                    "visibleComponent2b"
                  ]
                }
              ],
              "widget": {
                "id": "object"
              }
            },
            "updateVisibiltyTest": {
              "type": "object",
              "description": "Test oneOf - Set age to 15, set last name to 'aaa'",
              "properties": {
                "age": {
                  "id": "age",
                  "name": "age",
                  "title": "Age",
                  "type": "string",
                  "widget": {
                    "id": "string"
                  }
                },
                "firstName": {
                  "id": "firstName",
                  "name": "firstName",
                  "title": "First Name",
                  "type": "string",
                  "visibleIfOperator": "and",
                  "widget": {
                    "id": "string"
                  },
                  "visibleIf": {
                    "allOf": [
                      {
                        "lastName": "aaa"
                      },
                      {
                        "age": 15
                      }
                    ]
                  }
                },
                "lastName": {
                  "id": "lastName",
                  "name": "lastName",
                  "title": "Last Name",
                  "type": "string",
                  "widget": {
                    "id": "select"
                  },
                  "oneOf": [
                    {
                      "description": "AAA",
                      "enum": [
                        "aaa"
                      ]
                    },
                    {
                      "description": "BBB",
                      "enum": [
                        "bbb"
                      ]
                    }
                  ]
                }
              },
              "fieldsets": [
                {
                  "id": "fieldset-default",
                  "title": "",
                  "description": "Test oneOf - Set age to 15, set last name to 'aaa'",
                  "name": "",
                  "fields": [
                    "age",
                    "firstName",
                    "lastName"
                  ]
                }
              ],
              "widget": {
                "id": "object"
              }
            }
          },
          "fieldsets": [
            {
              "id": "fieldset-default",
              "title": "",
              "description": "",
              "name": "",
              "fields": [
                "typeTest",
                "visibleIfBinding1a",
                "visibleIfBinding1b",
                "visibleIfBinding1c",
                "visibleIfBinding2a",
                "visibleIfBinding2b",
                "updateVisibiltyTest"
              ]
            }
          ],
          "widget": {
            "id": "object"
          }
        }
      },
      "type": "object",
      "fieldsets": [
        {
          "id": "fieldset-default",
          "title": "",
          "description": "",
          "name": "",
          "fields": [
            "demo"
          ]
        }
      ],
      "widget": {
        "id": "object"
      }
    };
  }

  ngOnInit() {
    
  }
}
