import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoModal, InnoModalHeader, InnoModalContent, InnoModalFooter} from '@innomotics/ix-react-lib';

# inno-modal

<Tabs>
  <TabItem value="preview" label="Preview" default>
  <div class="component-display">
    <div class="dark-bg">
    <span class="bg-title">light background, layout auto</span>
    </div>
  </div>
  </TabItem>
  <TabItem value="angular" label="Angular" default>
  <div class="component-display">
    ```ts
      import { ComponentsModule } from '@innomotics/ix-angular-lib';

      @NgModule({
        imports: [
          ComponentsModule,
          ComponentsModule.forRoot(),
        ]
      })
      export class Module {}
    ```

    ```html
      <inno-button (click)="openModal()">Open modal</inno-button>

      <ng-template #modalRef let-modal>
        <inno-modal>
          <inno-modal-header>Modal title</inno-modal-header>
          <inno-modal-content>
            More details about the modal content {{ modal.data }}
          </inno-modal-content>
          <inno-modal-footer>
            Footer content
          </inno-modal-footer>
        </inno-modal>
      </ng-template>
    ```

    ```ts
      import { InnoModalService } from '@innomotics/ix-angular-lib';

      @Component({})
      export class ModalExampleComponent {
        @ViewChild('modalRef', { read: TemplateRef })
        modalRef!: TemplateRef<any>;

        constructor(private readonly modalService: InnoModalService) {}

        async openModal() {
          const ref = await this.modalService.open({
            content: this.modalRef,
            closeOnBackdropClick: false,
            backdrop: true,
            centered: true,
            title: 'title',
            closeOnEscape: false,
            data: 'modal data',
          });
        }
      }

    ```

  </div>
  </TabItem>
  <TabItem value="react" label="React" default>
  <div class="component-display">
  </div>
  </TabItem>
  <TabItem value="vue" label="Vue" default>
  <div class="component-display">
  </div>
  </TabItem>
</Tabs>

<!-- Auto Generated Below -->


## Overview

Represents the main frame of the modal component.

## Properties

| Property               | Attribute                 | Description                                                       | Type                                                                         | Default   |
| ---------------------- | ------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------- |
| `animation`            | `animation`               | Should the modal be animated                                      | `boolean`                                                                    | `true`    |
| `backdrop`             | `backdrop`                | Show a backdrop behind the modal dialog                           | `boolean`                                                                    | `true`    |
| `centered`             | `centered`                | Centered modal                                                    | `boolean`                                                                    | `false`   |
| `closeOnBackdropClick` | `close-on-backdrop-click` | Dismiss modal on backdrop click                                   | `boolean`                                                                    | `true`    |
| `closeOnEscape`        | `close-on-escape`         | If set to true the modal can be closed by pressing the Escape key | `boolean`                                                                    | `true`    |
| `size`                 | `size`                    | Modal size                                                        | `"360" \| "480" \| "600" \| "720" \| "840" \| "full-screen" \| "full-width"` | `'720'`   |
| `variant`              | `variant`                 | Theme variant of the component.                                   | `"dark" \| "light"`                                                          | `'light'` |


## Events

| Event           | Description   | Type               |
| --------------- | ------------- | ------------------ |
| `dialogClose`   | Dialog close  | `CustomEvent<any>` |
| `dialogDismiss` | Dialog cancel | `CustomEvent<any>` |


## Methods

### `closeModal<T = any>(reason: T) => Promise<void>`

Close the dialog

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `reason` | `T`  |             |

#### Returns

Type: `Promise<void>`



### `dismissModal<T = any>(reason?: T) => Promise<void>`

Dismiss the dialog

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `reason` | `T`  |             |

#### Returns

Type: `Promise<void>`



### `showModal() => Promise<void>`

Show the dialog.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
