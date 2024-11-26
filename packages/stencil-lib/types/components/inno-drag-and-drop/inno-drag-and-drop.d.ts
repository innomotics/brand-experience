import { EventEmitter } from '../../stencil-public-runtime';
import { DragAndDropTexts } from './drag-and-drop-texts';
export declare class InnoDragAndDrop {
    /**
     * Color variant of the component.
     */
    variant: 'dark' | 'light';
    /**
     * The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload).
     * "https://www.w3schools.com/tags/att_input_accept.asp"
     */
    accept: string;
    /**
     * If multiple is true the user can drop or select multiple files
     */
    multiple: boolean;
    /**
     * Disable all input events
     */
    disabled: boolean;
    /**
     * After a file is uploaded you can set the upload component to a defined state
     */
    state: 'SELECT_FILE' | 'LOADING' | 'UPLOAD_FAILED' | 'UPLOAD_SUCCESS';
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
    texts: DragAndDropTexts;
    filesChanged: EventEmitter<Array<File>>;
    hostElement: HTMLInnoDragAndDropElement;
    isFileOver: boolean;
    private filesToUpload;
    get inputElement(): HTMLInputElement;
    private fileDropped;
    private fileOver;
    private fileLeave;
    private fileChangeEvent;
    private convertToFileArray;
    setFilesToUpload(obj: any): Promise<void>;
    private renderBasic;
    private renderDisabled;
    private renderLoading;
    private renderSuccess;
    private renderUploadState;
    render(): any;
}
