import { EventEmitter } from '../../stencil-public-runtime';
import { InnoTimePickerTexts } from './inno-time-picker.api';
/**
 *
 */
export declare class InnoTimePicker {
    hostElement: HTMLElement & InnoTimePicker;
    /**
     * Theme variant of the component.
     */
    theme: 'light' | 'dark';
    /**
     * Component text configuration.
     */
    texts?: InnoTimePickerTexts | undefined;
    /**
     * Date format string.
     * See "https://moment.github.io/luxon/#/formatting?id=table-of-tokens" for all available tokens.
     */
    format: string;
    /**
     *
     */
    time: string | undefined;
    private selectedHour;
    private selectedMinute;
    private selectedSecond;
    /**
     *
     */
    valueChange: EventEmitter;
    componentDidLoad(): void;
    private sendValueChange;
    private titleContainer;
    private hourColumn;
    private minuteColumn;
    private secondColumn;
    private valuesContainer;
    private confirmContainer;
    render(): any;
}
