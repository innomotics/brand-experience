'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { InnoSelectItem as InnoSelectItemElement, defineCustomElement as defineInnoSelectItem } from "@innomotics/brand-experience/dist/components/inno-select-item.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type InnoSelectItemEvents = {
    onItemSelected: EventName<CustomEvent<any>>,
    onItemFavorited: EventName<CustomEvent<any>>,
    onItemUnfavorited: EventName<CustomEvent<any>>,
    onItemLabelChanged: EventName<CustomEvent<any>>
};

const InnoSelectItem: StencilReactComponent<InnoSelectItemElement, InnoSelectItemEvents> = /*@__PURE__*/ createComponent<InnoSelectItemElement, InnoSelectItemEvents>({
    tagName: 'inno-select-item',
    elementClass: InnoSelectItemElement,
    react: React,
    events: {
        onItemSelected: 'itemSelected',
        onItemFavorited: 'itemFavorited',
        onItemUnfavorited: 'itemUnfavorited',
        onItemLabelChanged: 'itemLabelChanged'
    } as InnoSelectItemEvents,
    defineCustomElement: defineInnoSelectItem
});

export default InnoSelectItem;