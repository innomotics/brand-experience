import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core';
import { DragAndDropTexts } from './drag-and-drop-texts';

@Component({
  tag: 'inno-drag-and-drop',
  styleUrl: 'inno-drag-and-drop.scss',
  scoped: true,
})
export class InnoDragAndDrop {

  /**
   * Color variant of the component.
   */
  @Prop() variant: 'dark' | 'light' = 'dark';

  /**
   * The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload).
   * "https://www.w3schools.com/tags/att_input_accept.asp"
   */
  @Prop() accept: string;

  /**
   * If multiple is true the user can drop or select multiple files
   */
  @Prop() multiple: boolean = false;

  /**
   * Disable all input events
   */
  @Prop({ mutable: true }) disabled: boolean = false;

  /**
   * After a file is uploaded you can set the upload component to a defined state
   */
  @Prop({ mutable: true }) state: 'SELECT_FILE' | 'LOADING' | 'UPLOAD_FAILED' | 'UPLOAD_SUCCESS' = 'SELECT_FILE';

  /**
   * 'firstLineText' and 'secondLineText': will be used by state = 'SELECT_FILE',
   * <br/><br/>'orText': The word 'or' or its equivalent translation. Hidden if only 'firstLineText' or only 'secondLineText' is used,
   * <br/><br/>'dragText': displayed when file is dragged over the component, can be omitted,
   * <br/><br/>'loadingText': will be used by state = 'LOADING',
   * <br/><br/>'uploadFailedText': will be used by state = 'UPLOAD_FAILED',
   * <br/><br/>'uploadSuccessText': will be used by state = 'UPLOAD_SUCCESS',
   * <br/><br/>'acceptedFileTypesText': label for accepted file types,
   * <br/><br/>'uploadDisabledText': label for disabled state
   */
  @Prop({ mutable: true }) texts: DragAndDropTexts = {
    firstLineText: null,
    secondLineText: null,
    orText: null,
    dragText: null,
    loadingText: null,
    uploadFailedText: null,
    uploadSuccessText: null,
    acceptedFileTypesText: null,
    uploadDisabledText: null
  };

  @Event() filesChanged: EventEmitter<Array<File>>;

  @Element() hostElement!: HTMLInnoDragAndDropElement;

  @State() isFileOver = false;

  private filesToUpload: Array<File>;

  get inputElement(): HTMLInputElement {
    return this.hostElement.querySelector('#upload-browser');
  }

  private fileDropped(evt: DragEvent) {
    evt.preventDefault();
    if (this.disabled) {
      return;
    }

    const file: File | FileList = evt.dataTransfer.files;
    this.isFileOver = false;

    this.filesToUpload = this.convertToFileArray(file);
    this.filesChanged.emit(this.filesToUpload);
  }

  private fileOver(event: DragEvent) {
    if (this.state !== 'LOADING') {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    }

    if (!this.multiple && event.dataTransfer.items.length > 1) {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.effectAllowed = 'none';
      event.dataTransfer.dropEffect = 'none';
    } else {
      this.isFileOver = true;
    }
  }

  private fileLeave() {
    this.isFileOver = false;
  }

  private fileChangeEvent(event: any) {
    if (this.disabled) {
      return;
    }
    this.filesToUpload = this.convertToFileArray(event.target.files);

    this.filesChanged.emit(this.filesToUpload);

    // Workaround for bug in native input element, that prevents the user from uploading
    // a file with the same name as the most recent one, but with changed content.
    this.inputElement.type = '';
    this.inputElement.type = 'file';
  }

  private convertToFileArray(filesFromEvent: FileList | File): File[] {
    let files = [];
    if (filesFromEvent instanceof FileList) {
      files = Array.from(filesFromEvent);
    } else {
      files = [filesFromEvent];
    }
    return files;
  }

  @Method()
  async setFilesToUpload(obj: any) {
    this.filesToUpload = obj;
  }

  private renderBasic() {
    let renderFirstLine: boolean = this.texts.firstLineText != null && this.texts.firstLineText.replace(/\s/g, '').length > 0;
    let renderSecondLine: boolean = this.texts.secondLineText != null && this.texts.secondLineText.replace(/\s/g, '').length > 0;
    let renderOr: boolean = renderFirstLine && renderSecondLine;
    let renderFileTypesText: boolean = this.texts.acceptedFileTypesText != null && this.texts.acceptedFileTypesText.replace(/\s/g, '').length > 0;
    let ignoreDragText: boolean = this.texts.dragText == null || this.texts.dragText.replace(/\s/g, '').length === 0

    return (
      <div class="state">
        <inno-icon icon='upload' size={48}></inno-icon>
        <div class={{ "drag-and-drop-texts": true, "show-always": ignoreDragText }}>
          {renderFirstLine ? <span class="first-line-text">{this.texts.firstLineText}</span> : null}
          {renderOr ? <span class="or-text">{this.texts.orText}</span> : null}
          {renderSecondLine ? <span class="second-line-text">{this.texts.secondLineText}</span> : null}
        </div>
        <div class={{ "drag-text": true, hidden: ignoreDragText }}>{this.texts.dragText}</div>
        {renderFileTypesText ? <span class="file-types-text">{this.texts.acceptedFileTypesText}</span> : null}
      </div>
    );
  }

  private renderDisabled() {
    return (
      <div class="state">
        <inno-icon icon='close' size={48}></inno-icon>
        <span class="disabled-text">{this.texts.uploadDisabledText}</span>
      </div>
    );
  }

  private renderLoading() {
    return (
      <div class="state">
        <inno-loader size={48} variant={this.variant === 'dark' ? 'light' : 'dark'}></inno-loader>
        <span class="loading-text">{this.texts.loadingText}</span>
      </div>
    );
  }

  private renderSuccess() {
    return (
      <div class="state">
        <inno-icon icon='check_checkbox' size={48}></inno-icon>
        <span class="loading-text">{this.texts.uploadSuccessText}</span>
      </div>
    );
  }

  private renderUploadState() {
    if (this.disabled) {
      return this.renderDisabled();
    }

    switch (this.state) {
      case 'LOADING':
        return this.renderLoading();
      case 'UPLOAD_SUCCESS':
        return this.renderSuccess();
      case 'SELECT_FILE':
      case 'UPLOAD_FAILED':
      default:
        return this.renderBasic();
    }
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'file-upload-area': true,
            'file-over':
              this.state !== 'LOADING' && this.isFileOver,
            checking: this.state === 'LOADING',
            success: this.state === 'UPLOAD_SUCCESS',
            disabled: this.disabled,
            dark: this.variant === 'dark',
            light: this.variant === 'light'
          }}
          onDrop={(e) => {
            if (this.state !== 'LOADING') {
              this.fileDropped(e);
            }
          }}
          onDragOver={(e) => this.fileOver(e)}
          onDragLeave={() => this.fileLeave()}
          draggable={!this.disabled}
          onClick={() => this.inputElement.click()}
        >
          {this.renderUploadState()}
          <div>
            <input
              multiple={this.multiple}
              type="file"
              class="upload-browser"
              id="upload-browser"
              onChange={(e) => {
                this.fileChangeEvent(e);
              }}
              accept={this.accept}
            />
          </div>
        </div>
        {this.state === 'UPLOAD_FAILED'
          ? <span class={{ "error-text": true, dark: this.variant === 'dark', light: this.variant === 'light' }}>{this.texts.uploadFailedText}</span> : null}
      </Host>
    );
  }

}
