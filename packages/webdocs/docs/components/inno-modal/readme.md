import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoModal, InnoModalHeader, InnoModalContent, InnoModalFooter} from '@innomotics/brand-experience-react-lib';
import InnoModalExample from '@site/src/components/InnoModalExample/InnoModalExample'

# inno-modal

<Tabs>
  <TabItem value="preview" label="Preview" default>
  <div class="component-display">
    <div class="dark-bg">
    <span class="bg-title">Modal example</span>
    <InnoModalExample></InnoModalExample>
    </div>
  </div>
  </TabItem>
  <TabItem value="angular" label="Angular" default>
  <div class="component-display">
  <div class="dark-bg">
    <span class="bg-title">Import the root module to import the service</span>
    ```ts
      import { ComponentsModule } from '@innomotics/brand-experience-angular-lib';

      @NgModule({
        imports: [
          ComponentsModule,
          ComponentsModule.forRoot(),
        ]
      })
      export class Module {}
    ```

  </div>
  </div>

  <div class="component-display">
  <div class="dark-bg">
    <span class="bg-title">Create a template</span>

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

  </div>
  </div>

  <div class="component-display">
  <div class="dark-bg">
    <span class="bg-title">Import the service and open the modal</span>

    ```ts
      import { InnoModalService } from '@innomotics/brand-experience-angular-lib';

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
  </div>
  </TabItem>
  <TabItem value="react" label="React" default>
  <div class="component-display">
  <div class="dark-bg">
    <span class="bg-title">Use the provided function to show the modal.</span>

    ```tsx
      export default function InnoModalExample() {
        const modalRef = useRef<ModalRef>(null);

        const open = () => {
          const content = (
            <Modal ref={modalRef}>
              <InnoModalHeader showClose={false}>Header title</InnoModalHeader>
              <InnoModalContent>
                <div>
                  <span>Modal content</span>
                </div>
              </InnoModalContent>
              <InnoModalFooter>
                <InnoButton onClick={() => modalRef.current?.close(null)}>
                  Close
                </InnoButton>
                <InnoButton onClick={() => modalRef.current?.close(null)}>
                  Confirm
                </InnoButton>
              </InnoModalFooter>
            </Modal>
          );

          showModal({
            size: "720",
            content: content,
            backdrop: true,
            centered: true,
            closeOnEscape: false,
            closeOnBackdropClick: false,
          });
        };

        return (
          <div className="modal-sizes-example">
            <InnoButton onClick={() => open()}>Open modal</InnoButton>
          </div>
        );
      }
    ```

  </div>
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
