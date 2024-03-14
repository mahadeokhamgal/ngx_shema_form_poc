import { Component, OnInit } from '@angular/core';
import { SchemaFormModule, WidgetRegistry } from 'ngx-schema-form';
import { ControlWidget } from 'ngx-schema-form';

@Component({
  selector: 'dynamic-dropdown-widget',
  template: './dynamic-dropdown-widget.component.html',
})
export class DynamicDropdownWidgetComponent implements ControlWidget, OnInit {
  selectedOption: any;
  options: {label: string, value: any}[];
  control:any;
  formProperty:any;
  errorMessages: any;
  id:string;
  name:string;
  schema:any;
  ngAfterViewInit(){
    console.log("afterview init");
    
  }

  constructor(public widgetRegistry: WidgetRegistry){
    this.widgetRegistry.register('dynamicDropDown', DynamicDropdownWidgetComponent);
    this.options= [];
    this.id = '';
    this.name = '';
  }

  ngOnInit() {
    this.fetchOptions();
  }
  fetchOptions(){
    this.options = [{label:'def', value:'def'}];
  }
}
