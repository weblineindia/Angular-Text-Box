import { EventEmitter } from "@angular/core";
export declare class TextComponent {
    maxLength: Number;
    isnumberonly: Boolean;
    className: object;
    regex: any;
    disabled: boolean;
    value: String;
    tabindex: Number;
    type: String;
    id: String;
    name: String;
    placeholder: String;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    KeyDown: EventEmitter<any>;
    KeyPress: EventEmitter<any>;
    KeyUp: EventEmitter<any>;
    blur: EventEmitter<any>;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onChange(event: any): void;
    onKeyDown(event: any): void;
    onKeyUp(event: any): void;
    onKeyPress(event: any): void;
}
