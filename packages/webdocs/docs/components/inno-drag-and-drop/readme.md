import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {InnoDragAndDrop} from '@innomotics/brand-experience-react-lib';

# inno-drag-and-drop

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <div class="component-display columns" style={{display: 'flex', flexDirection: 'row'}}>
      <div class="light-bg">
        <span class="bg-title">light background</span>
        <InnoDragAndDrop variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="UPLOAD_FAILED" variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop disabled variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="LOADING" variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="UPLOAD_SUCCESS" variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
      </div>
      <div class="dark-bg">
        <span class="bg-title">dark background</span>
          <InnoDragAndDrop variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
          </InnoDragAndDrop>
          <InnoDragAndDrop state="UPLOAD_FAILED" variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop disabled variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="LOADING" variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="UPLOAD_SUCCESS" variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
      </div>
    </div>
  </TabItem>
  <TabItem value="Angular" label="Angular">
    ```html
    <div class="component-display columns">
      <div class="light-bg">
       <span class="bg-title">light background</span>
       <inno-drag-and-drop variant="dark" [texts]="yourTextObj">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="UPLOAD_FAILED" variant="dark" [texts]="yourTextObj">
       </inno-drag-and-drop>
       <inno-drag-and-drop disabled variant="dark" [texts]="yourTextObj">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="LOADING" variant="dark" [texts]="yourTextObj">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="UPLOAD_SUCCESS" variant="dark" [texts]="yourTextObj">
       </inno-drag-and-drop>
    </div>
    <div class="dark-bg">
       <span class="bg-title">dark background</span>
        <inno-drag-and-drop variant="light" [texts]="yourTextObj">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="UPLOAD_FAILED" variant="light" [texts]="yourTextObj">
       </inno-drag-and-drop>
       <inno-drag-and-drop disabled variant="light" [texts]="yourTextObj">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="LOADING" variant="light" [texts]="yourTextObj">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="UPLOAD_SUCCESS" variant="light" [texts]="yourTextObj">
       </inno-drag-and-drop>
    </div>
  </div>
    ```
  </TabItem>
  <TabItem value="React" label="React">
    ```tsx
    <div class="component-display columns" style={{display: 'flex', flexDirection: 'row'}}>
      <div class="light-bg">
        <span class="bg-title">light background</span>
        <InnoDragAndDrop variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="UPLOAD_FAILED" variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop disabled variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="LOADING" variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="UPLOAD_SUCCESS" variant="dark" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
      </div>
      <div class="dark-bg">
        <span class="bg-title">dark background</span>
          <InnoDragAndDrop variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
          </InnoDragAndDrop>
          <InnoDragAndDrop state="UPLOAD_FAILED" variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop disabled variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="LOADING" variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
        <InnoDragAndDrop state="UPLOAD_SUCCESS" variant="light" texts={{
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }}>
        </InnoDragAndDrop>
      </div>
    </div>
    ```
  </TabItem>
  <TabItem value="webcomponent" label="Web component">
    ```html
    <script>
      document.querySelectorAll("inno-drag-and-drop").forEach(el => {
        el.texts = {
          firstLineText: "Drag & Drop",
          secondLineText: "Browse files",
          orText: "or",
          dragText: "Please drop your files here",
          loadingText: "Loading...",
          uploadFailedText: "Something went wrong. Please try again. ",
          uploadSuccessText: "File uploaded successfully.",
          acceptedFileTypesText: "*File must be .pdf",
          uploadDisabledText: "File upload is disabled"
        }
      });
    </script>
    <div class="component-display columns">
      <div class="light-bg">
       <span class="bg-title">light background</span>
       <inno-drag-and-drop variant="dark">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="UPLOAD_FAILED" variant="dark">
       </inno-drag-and-drop>
       <inno-drag-and-drop disabled variant="dark">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="LOADING" variant="dark">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="UPLOAD_SUCCESS" variant="dark">
       </inno-drag-and-drop>
    </div>
    <div class="dark-bg">
       <span class="bg-title">dark background</span>
        <inno-drag-and-drop variant="light">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="UPLOAD_FAILED" variant="light">
       </inno-drag-and-drop>
       <inno-drag-and-drop disabled variant="light">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="LOADING" variant="light">
       </inno-drag-and-drop>
       <inno-drag-and-drop state="UPLOAD_SUCCESS" variant="light">
       </inno-drag-and-drop>
    </div>
  </div>
    ```
  </TabItem>
</Tabs>

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type                                                                                                                        | Default                                                                                                                                                                                                                                        |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`   | `accept`   | The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload). "https://www.w3schools.com/tags/att_input_accept.asp"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `string`                                                                                                                    | `undefined`                                                                                                                                                                                                                                    |
| `disabled` | `disabled` | Disable all input events                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `boolean`                                                                                                                   | `false`                                                                                                                                                                                                                                        |
| `multiple` | `multiple` | If multiple is true the user can drop or select multiple files                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `boolean`                                                                                                                   | `false`                                                                                                                                                                                                                                        |
| `state`    | `state`    | After a file is uploaded you can set the upload component to a defined state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `UploadFileState.LOADING \| UploadFileState.SELECT_FILE \| UploadFileState.UPLOAD_FAILED \| UploadFileState.UPLOAD_SUCCESS` | `UploadFileState.SELECT_FILE`                                                                                                                                                                                                                  |
| `texts`    | --         | 'firstLineText' and 'secondLineText': will be used by state = UploadFileState.SELECT_FILE, <br/><br/>'orText': The word 'or' or its equivalent translation. Hidden if only 'firstLineText' or only 'secondLineText' is used, <br/><br/>'dragText': displayed when file is dragged over the component, can be omitted, <br/><br/>'loadingText': will be used by state = UploadFileState.LOADING, <br/><br/>'uploadFailedText': will be used by state = UploadFileState.UPLOAD_FAILED, <br/><br/>'uploadSuccessText': will be used by state = UploadFileState.UPLOAD_SUCCESSED, <br/><br/>'acceptedFileTypesText': label for accepted file types, <br/><br/>'uploadDisabledText': label for disabled state | `DragAndDropTexts`                                                                                                          | `{     firstLineText: null,     secondLineText: null,     orText: null,     dragText: null,     loadingText: null,     uploadFailedText: null,     uploadSuccessText: null,     acceptedFileTypesText: null,     uploadDisabledText: null   }` |
| `variant`  | `variant`  | Color variant of the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `"dark" \| "light"`                                                                                                         | `'dark'`                                                                                                                                                                                                                                       |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `filesChanged` |             | `CustomEvent<File[]>` |


## Methods

### `setFilesToUpload(obj: any) => Promise<void>`



#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| `obj` | `any` |             |

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [inno-icon](../inno-icon)
- [inno-loader](../inno-loader)

### Graph
```mermaid
graph TD;
  inno-drag-and-drop --> inno-icon
  inno-drag-and-drop --> inno-loader
  style inno-drag-and-drop fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
