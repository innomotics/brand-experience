import { Host, h } from "@stencil/core";
export class InnoDragAndDrop {
    constructor() {
        this.variant = 'dark';
        this.accept = undefined;
        this.multiple = false;
        this.disabled = false;
        this.state = 'SELECT_FILE';
        this.texts = {
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
        this.isFileOver = false;
    }
    filesChanged;
    hostElement;
    filesToUpload;
    get inputElement() {
        return this.hostElement.querySelector('#upload-browser');
    }
    fileDropped(evt) {
        evt.preventDefault();
        if (this.disabled) {
            return;
        }
        const file = evt.dataTransfer.files;
        this.isFileOver = false;
        this.filesToUpload = this.convertToFileArray(file);
        this.filesChanged.emit(this.filesToUpload);
    }
    fileOver(event) {
        if (this.state !== 'LOADING') {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        }
        if (!this.multiple && event.dataTransfer.items.length > 1) {
            event.preventDefault();
            event.stopPropagation();
            event.dataTransfer.effectAllowed = 'none';
            event.dataTransfer.dropEffect = 'none';
        }
        else {
            this.isFileOver = true;
        }
    }
    fileLeave() {
        this.isFileOver = false;
    }
    fileChangeEvent(event) {
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
    convertToFileArray(filesFromEvent) {
        let files = [];
        if (filesFromEvent instanceof FileList) {
            files = Array.from(filesFromEvent);
        }
        else {
            files = [filesFromEvent];
        }
        return files;
    }
    async setFilesToUpload(obj) {
        this.filesToUpload = obj;
    }
    renderBasic() {
        let renderFirstLine = this.texts.firstLineText != null && this.texts.firstLineText.replace(/\s/g, '').length > 0;
        let renderSecondLine = this.texts.secondLineText != null && this.texts.secondLineText.replace(/\s/g, '').length > 0;
        let renderOr = renderFirstLine && renderSecondLine;
        let renderFileTypesText = this.texts.acceptedFileTypesText != null && this.texts.acceptedFileTypesText.replace(/\s/g, '').length > 0;
        let ignoreDragText = this.texts.dragText == null || this.texts.dragText.replace(/\s/g, '').length === 0;
        return (h("div", { class: "state" }, h("inno-icon", { icon: 'upload', size: 48 }), h("div", { class: { "drag-and-drop-texts": true, "show-always": ignoreDragText } }, renderFirstLine ? h("span", { class: "first-line-text" }, this.texts.firstLineText) : null, renderOr ? h("span", { class: "or-text" }, this.texts.orText) : null, renderSecondLine ? h("span", { class: "second-line-text" }, this.texts.secondLineText) : null), h("div", { class: { "drag-text": true, hidden: ignoreDragText } }, this.texts.dragText), renderFileTypesText ? h("span", { class: "file-types-text" }, this.texts.acceptedFileTypesText) : null));
    }
    renderDisabled() {
        return (h("div", { class: "state" }, h("inno-icon", { icon: 'close', size: 48 }), h("span", { class: "disabled-text" }, this.texts.uploadDisabledText)));
    }
    renderLoading() {
        return (h("div", { class: "state" }, h("inno-loader", { size: 48, variant: this.variant === 'dark' ? 'light' : 'dark' }), h("span", { class: "loading-text" }, this.texts.loadingText)));
    }
    renderSuccess() {
        return (h("div", { class: "state" }, h("inno-icon", { icon: 'check_checkbox', size: 48 }), h("span", { class: "loading-text" }, this.texts.uploadSuccessText)));
    }
    renderUploadState() {
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
        return (h(Host, { key: '5e7e15ce8a3c7be30eea722f824d2d8090b51a96' }, h("div", { key: 'a32526fdd9f0f8352f5c3a2c50cff84389c366c3', class: {
                'file-upload-area': true,
                'file-over': this.state !== 'LOADING' && this.isFileOver,
                checking: this.state === 'LOADING',
                success: this.state === 'UPLOAD_SUCCESS',
                disabled: this.disabled,
                dark: this.variant === 'dark',
                light: this.variant === 'light'
            }, onDrop: (e) => {
                if (this.state !== 'LOADING') {
                    this.fileDropped(e);
                }
            }, onDragOver: (e) => this.fileOver(e), onDragLeave: () => this.fileLeave(), draggable: !this.disabled, onClick: () => this.inputElement.click() }, this.renderUploadState(), h("div", { key: '51009940899a1119e573c12d80a73b2b8e86eefc' }, h("input", { key: '4cd582bb6895e97066a83289df98770cdf3ff668', multiple: this.multiple, type: "file", class: "upload-browser", id: "upload-browser", onChange: (e) => {
                this.fileChangeEvent(e);
            }, accept: this.accept }))), this.state === 'UPLOAD_FAILED'
            ? h("span", { class: { "error-text": true, dark: this.variant === 'dark', light: this.variant === 'light' } }, this.texts.uploadFailedText) : null));
    }
    static get is() { return "inno-drag-and-drop"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["inno-drag-and-drop.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["inno-drag-and-drop.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'dark' | 'light'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color variant of the component."
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'dark'"
            },
            "accept": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload).\r\n\"https://www.w3schools.com/tags/att_input_accept.asp\""
                },
                "attribute": "accept",
                "reflect": false
            },
            "multiple": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If multiple is true the user can drop or select multiple files"
                },
                "attribute": "multiple",
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disable all input events"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "state": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "'SELECT_FILE' | 'LOADING' | 'UPLOAD_FAILED' | 'UPLOAD_SUCCESS'",
                    "resolved": "\"LOADING\" | \"SELECT_FILE\" | \"UPLOAD_FAILED\" | \"UPLOAD_SUCCESS\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "After a file is uploaded you can set the upload component to a defined state"
                },
                "attribute": "state",
                "reflect": false,
                "defaultValue": "'SELECT_FILE'"
            },
            "texts": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "DragAndDropTexts",
                    "resolved": "DragAndDropTexts",
                    "references": {
                        "DragAndDropTexts": {
                            "location": "import",
                            "path": "./drag-and-drop-texts",
                            "id": "src/components/inno-drag-and-drop/drag-and-drop-texts.ts::DragAndDropTexts"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "'firstLineText' and 'secondLineText': will be used by state = 'SELECT_FILE',\r\n<br/><br/>'orText': The word 'or' or its equivalent translation. Hidden if only 'firstLineText' or only 'secondLineText' is used,\r\n<br/><br/>'dragText': displayed when file is dragged over the component, can be omitted,\r\n<br/><br/>'loadingText': will be used by state = 'LOADING',\r\n<br/><br/>'uploadFailedText': will be used by state = 'UPLOAD_FAILED',\r\n<br/><br/>'uploadSuccessText': will be used by state = 'UPLOAD_SUCCESS',\r\n<br/><br/>'acceptedFileTypesText': label for accepted file types,\r\n<br/><br/>'uploadDisabledText': label for disabled state"
                },
                "defaultValue": "{\r\n    firstLineText: null,\r\n    secondLineText: null,\r\n    orText: null,\r\n    dragText: null,\r\n    loadingText: null,\r\n    uploadFailedText: null,\r\n    uploadSuccessText: null,\r\n    acceptedFileTypesText: null,\r\n    uploadDisabledText: null\r\n  }"
            }
        };
    }
    static get states() {
        return {
            "isFileOver": {}
        };
    }
    static get events() {
        return [{
                "method": "filesChanged",
                "name": "filesChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Array<File>",
                    "resolved": "File[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "File": {
                            "location": "global",
                            "id": "global::File"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "setFilesToUpload": {
                "complexType": {
                    "signature": "(obj: any) => Promise<void>",
                    "parameters": [{
                            "name": "obj",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=inno-drag-and-drop.js.map
