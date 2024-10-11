'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { InnoToggle as InnoToggleElement, defineCustomElement as defineInnoToggle } from "@innomotics/brand-experience/dist/components/inno-toggle.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type InnoToggleEvents = { onCheckedChange: EventName<CustomEvent<boolean>> };

const InnoToggle: StencilReactComponent<InnoToggleElement, InnoToggleEvents> = /*@__PURE__*/ createComponent<InnoToggleElement, InnoToggleEvents>({
    tagName: 'inno-toggle',
    elementClass: InnoToggleElement,
    react: React,
    events: { onCheckedChange: 'checkedChange' } as InnoToggleEvents,
    defineCustomElement: defineInnoToggle
});

export default InnoToggle;