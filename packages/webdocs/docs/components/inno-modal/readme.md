import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoModal, InnoModalHeader, InnoModalContent, InnoModalFooter} from '@innomotics/brand-experience-react-lib';
import InnoModalExample from '@site/src/components/InnoModalExample/InnoModalExample'

# inno-modal

<Tabs>
  <TabItem value="preview" label="Preview" default>
  <div class="component-display">
    <div class="dark-bg">
    <span class="bg-title-big">Modal example</span>
    <InnoModalExample></InnoModalExample>
    </div>
  </div>
  </TabItem>
  <TabItem value="overview" label="Overview" default>
  <div class="component-display">
    <div class="dark-bg">
    <span class="bg-title-big">Overview</span>

    General information about the modal component.

    <span class="bg-title-big">Usage</span>

    The framework specific API should be used to manage the modal windows.

    The content of the modal is customizable but there are predefined components
    which can be used if no custom layout is required.

    <span class="bg-title-big">General components</span>

    These components are available to provide a default layout.

    Example:

    ```html
      <inno-modal>
        <inno-modal-header>modal title</inno-modal-header>
        <inno-modal-content>
          More details about the modal content
        </inno-modal-content>
        <inno-modal-footer>
          Footer content
        </inno-modal-footer>
      </inno-modal>
    ```

    <span class="bg-title-big">InnoModal</span>

    The main wrapper of the modal context.
    Optional to defined but the content will be wrapped in a modal component.

    <span class="bg-title-big">InnoModalHeader</span>

    Provide a default header with a title and a close button.

    <span class="bg-title-big">InnoModalContent</span>

    Wrap the provided content with the necessary styling.

    <span class="bg-title-big">InnoModalFooter</span>

    Wrap the provided content with the necessary styling.

    </div>

  </div>
  </TabItem>
  <TabItem value="angular" label="Angular">
    <Tabs>
      <TabItem value="angular-configuration" label="Configuration" default>
      <div class="component-display">
        <div class="dark-bg">
        <span class="bg-title-big">Configuration</span>
        
        Import the provided module into the application root module.

        Module example:

        ```ts
          import { ComponentsModule } from '@innomotics/brand-experience-angular-lib';

          @NgModule({
            imports: [
              // Import the modal components
              ComponentsModule,

              // Import Modal service
              ComponentsModule.forRoot(),
            ]
          })
          export class ApplicationRootModule {}
        ```

        Standalone component example:

        ```ts
        import { ComponentsModule } from '@innomotics/brand-experience-angular-lib';

        bootstrapApplication(PhotoAppComponent, {
          providers: [
            importProvidersFrom(
              ComponentsModule.forRoot()
            ),
          ]
        });

        ```
        </div>
      </div>
      </TabItem>
      <TabItem value="angular-api" label="API">
      <div class="component-display">
        <div class="dark-bg">
        <span class="bg-title-big">Description of the API surface</span>

        Overview about the core API.

        **Parameters:**

        | Name      | Description                                |
        | --------- | ------------------------------------------ |
        | `TData`   | Type of data propperty of the config input |
        | `TReason` | Type of the return value of dismiss        |

        <span class="bg-title-big">InnoModalService</span>

        Central service to open modal.

        ```ts
        class InnoModalService {
          open<TData = any, TReason = any>(config: ModalConfig<TData>) => Promise<ModalInstance>
        }
        ```

        <span class="bg-title-big">Usage</span>

        Inject into a component and use the `open` method to open a modal.

        <span class="bg-title-big">Methods</span>

        <span class="bg-title-big">`open`</span>

        **Parameters**

        | Name      | Type        | Description                |
        | --------- | ----------- | -------------------------- |
        | `config`  | ModalConfig | Modal configuration object |

        **Returns:**

        Type: `ModalInstance`

        A reference to the created modal instance.

        <span class="bg-title-big">ModalConfig</span>

        Configuration of the opened modal instance.

        Same as the inno-modal configuration but the content can be a  `TemplateRef` or an Angular component.

        | Name       | Type              | Description                   |
        | ---------- | ----------------- | ----------------------------- |
        | `content`  | `TemplateRef`     | Reference to an `ng-template` |
        | `content`  | `Čomponent class` | Angular component class       |

        <span class="bg-title-big">ModalInstance</span>

        Reference to the opened modal instance.

        ```ts
          interface ModalInstance<TReason = any> {
            htmlElement: HTMLInnoModalElement;

            onClose: TypedEvent<TReason>;

            onDismiss: TypedEvent<TReason>;
          }
        ```

        **Properties**

        | Name          | Type                   | Description                               |
        | ------------- | ---------------------- | ----------------------------------------- |
        | `htmlElement` | `HTMLInnoModalElement` | Reference to the created modal DOM object |
        | `onClose`     | `TypedEvent<TReason>`  | Close event subscription handler          |
        | `onDismiss`   | `TypedEvent<TReason>`  | Dismiss event subscription handler        |

        <span class="bg-title-big">ActiveModal</span>

        Reference to the active modal instance.

        Can be injected into the components defined as the content of the modal to get reference to the active modal instance.

        ```ts
          class InnoActiveModal<TData = any, TReason = any> {
            get data(): TData | undefined;

            close(reason: TReason): void;

            dismiss(reason?: TReason): void;
          }

        ```

        | Name      | Type     | Description                                 |
        | --------- | -------- | ------------------------------------------- |
        | `data`    | property | Provided configuration data                 |
        | `close`   | function | Close the modal with the provided reaso     |
        | `dismiss` | function | Dissmiss the modal with the provided reason |

        </div>
      </div>
      </TabItem>
      <TabItem value="angular-template" label="Modal by template">
        <div class="component-display">
        <div class="dark-bg">
          <span class="bg-title">Using the API by providing a template as the content of the modal</span>

          ### **Define the template**

          Create a template and define the content of the modal component.

          The modal variable (let-modal) can be used to get reference to the active modal instance.

          ```html
            <ng-template #modalRef let-modal>
              <inno-modal>
                <inno-modal-header>{{ modal.data.title }}</inno-modal-header>
                <inno-modal-content>
                  More details about the modal content
                </inno-modal-content>
                <inno-modal-footer>
                  Footer content
                </inno-modal-footer>
              </inno-modal>
            </ng-template>
          ```

          A custom component can be used instead to define the content of the template.

          ```html
            <ng-template #modalRef>
              <my-component></my-component>
            </ng-template>
          ```

          Import the service and open the modal by providing
          the defined template as the content of the modal.

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
                  data: { title: 'modal title' },
                  closeOnBackdropClick: false,
                  backdrop: true,
                  centered: true,
                  title: 'title',
                  closeOnEscape: false,
                });
              }
            }

          ```
          Template component example:


          ```ts
            @Component({ selector: 'app-my-component' })
            export class MyComponent {
              title = '';

              constructor(readonly activeModal: InnoActiveModal) {}

              examples() {
                // Using the provided data
                this.title = this.activeModal.data.title;

                // Closing the modal
                this.activeModal.close('close reason');
              }
            }
          ```

        </div>
        </div>
      </TabItem>
      <TabItem value="angular-component" label="Modal by component">
        <div class="component-display">
        <div class="dark-bg">
          <span class="bg-title">Using the API by providing a component as the content of the modal</span>

          Import the modal service and open the modal
          by providing the content as an Angular component.

          ```ts
            import { InnoModalService } from '@innomotics/brand-experience-angular-lib';

            @Component({})
            export class ModalExampleComponent {
              constructor(private readonly modalService: InnoModalService) {}

              async openModal() {
                const ref = await this.modalService.open({
                  // Define the content as the class of the Component
                  content: ModalByContentComponent,
                  data: { title: 'example' },

                  // Additional settings
                  closeOnBackdropClick: false,
                  backdrop: true,
                  centered: true,
                  title: 'title',
                  closeOnEscape: false,
                });
              }
            }

          ```

          In the component the InnoActiveModal can be injected
          to get reference to the actual modal instance.

          ```ts
            @Component({ selector: 'app-modal-by-component' })
            export class ModalByContentComponent {
              title = '';

              constructor(readonly activeModal: InnoActiveModal) {}

              examples() {
                // Using the provided data
                this.title = this.activeModal.data.title;

                // Closing the modal
                this.activeModal.close('close reason');
              }
            }
          ```

        </div>
        </div>
      </TabItem>
    </Tabs>

  </TabItem>
  <TabItem value="react" label="React">
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
  <TabItem value="vue" label="Vue">
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
