import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  NgZone,
} from "@angular/core";
import { DIRECTIVES } from "./stencil-generated";
import { appInitialize } from "./app-initialize";
import { DOCUMENT } from "@angular/common";
import { defineCustomElements } from "@innomotics/ix/loader";
import { SelectValueAccessor } from "./stencil-generated/select-value-accessor";
import { BooleanValueAccessor } from "./stencil-generated/boolean-value-accessor";
import { InnoRadioValueAccessor, StatusMessageService } from "../public-api";
import { InnoModalService } from "./components/inno-modal/inno-modal.service";

const DECLARATIONS = [
  ...DIRECTIVES,
  SelectValueAccessor,
  BooleanValueAccessor,
  InnoRadioValueAccessor,
];

@NgModule({
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => appInitialize,
      multi: true,
      deps: [DOCUMENT, NgZone],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders<ComponentsModule> {
    return {
      ngModule: ComponentsModule,
      providers: [InnoModalService, StatusMessageService],
    };
  }
}
