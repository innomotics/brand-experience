'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { InnoPopover as InnoPopoverElement, defineCustomElement as defineInnoPopover } from "@innomotics/brand-experience/dist/components/inno-popover.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type InnoPopoverEvents = {
    onInnoPopoverShown: EventName<CustomEvent<void>>,
    onInnoPopoverHidden: EventName<CustomEvent<void>>
};

const InnoPopover: StencilReactComponent<InnoPopoverElement, InnoPopoverEvents> = /*@__PURE__*/ createComponent<InnoPopoverElement, InnoPopoverEvents>({
    tagName: 'inno-popover',
    elementClass: InnoPopoverElement,
    react: React,
    events: {
        onInnoPopoverShown: 'innoPopoverShown',
        onInnoPopoverHidden: 'innoPopoverHidden'
    } as InnoPopoverEvents,
    defineCustomElement: defineInnoPopover
});

export default InnoPopover;