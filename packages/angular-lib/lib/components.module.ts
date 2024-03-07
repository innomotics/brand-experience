import { APP_INITIALIZER, NgModule, NgZone } from "@angular/core";
import { DIRECTIVES } from "./stencil-generated";
import { appInitialize } from "./app-initialize";
import { DOCUMENT } from '@angular/common';
import { defineCustomElements } from "@innomotics/ix/loader";

const DECLARATIONS = [
    ...DIRECTIVES
];

@NgModule({
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: () => appInitialize,
            multi: true,
            deps: [DOCUMENT, NgZone]
        },
        {
            provide: APP_INITIALIZER,
            useFactory: () => defineCustomElements,
            multi:true
        }
    ]
})
export class ComponentsModule { }