import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { SchemaFormModule, WidgetRegistry } from 'ngx-schema-form';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetRegistryPrimeNG } from 'src/widgets/WidgetRegistryPrimeNG';
import { InputWidget } from 'src/widgets/input.widget';
import { RadioWidget } from 'src/widgets/radio.widget';
import { ParagraphWidget } from 'src/widgets/paragraph.widget';
import { MyFormComponent } from './myform/myform.component';

/** PrimeNG */
import { InputTextModule } from 'primeng/inputtext'
import { RadioButtonModule } from 'primeng/radiobutton'
import {CardModule} from 'primeng/card'

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    MyFormComponent,
    InputWidget,
    RadioWidget,
    ParagraphWidget
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SchemaFormModule.forRoot(),

    InputTextModule,
    RadioButtonModule,
    CardModule
  ],
  providers: [{ provide: WidgetRegistry, useClass: WidgetRegistryPrimeNG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
