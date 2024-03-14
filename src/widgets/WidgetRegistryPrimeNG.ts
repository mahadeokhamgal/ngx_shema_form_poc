import { WidgetRegistry, DefaultWidgetRegistry } from "ngx-schema-form";
import { InputWidget } from "./input.widget";
import { RadioWidget } from "./radio.widget";
import { ParagraphWidget } from "./paragraph.widget";

export class WidgetRegistryPrimeNG extends DefaultWidgetRegistry {
  constructor() {
    super();
    this.register("radio", RadioWidget);
    this.register("string", InputWidget);
    this.register("paragraph", ParagraphWidget);
  }
}
