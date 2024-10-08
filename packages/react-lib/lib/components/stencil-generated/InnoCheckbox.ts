'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { InnoCheckbox as InnoCheckboxElement, defineCustomElement as defineInnoCheckbox } from "@innomotics/brand-experience/dist/components/inno-checkbox.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type InnoCheckboxEvents = { onValueChange: EventName<CustomEvent<boolean>> };

const InnoCheckbox: StencilReactComponent<InnoCheckboxElement, InnoCheckboxEvents> = /*@__PURE__*/ createComponent<InnoCheckboxElement, InnoCheckboxEvents>({
    tagName: 'inno-checkbox',
    elementClass: InnoCheckboxElement,
    react: React,
    events: { onValueChange: 'valueChange' } as InnoCheckboxEvents,
    defineCustomElement: defineInnoCheckbox
});

export default InnoCheckbox;
