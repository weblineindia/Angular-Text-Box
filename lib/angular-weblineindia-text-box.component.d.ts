import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AngularWeblineindiaTextBoxComponent {
    id: string;
    name: string;
    value: string;
    classname: string | string[];
    placeholder: string;
    disabled: boolean;
    maxlength: number;
    regex: RegExp;
    isnumberonly: boolean;
    required: boolean;
    focus: EventEmitter<void>;
    blur: EventEmitter<void>;
    change: EventEmitter<string>;
    KeyPress: EventEmitter<KeyboardEvent>;
    KeyDown: EventEmitter<KeyboardEvent>;
    KeyUp: EventEmitter<KeyboardEvent>;
    constructor();
    onFocus(): void;
    onBlur(): void;
    onChange(event: any): void;
    onKeyPress(event: KeyboardEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onKeyUp(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularWeblineindiaTextBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AngularWeblineindiaTextBoxComponent, "angular-weblineindia-text-box", never, { "id": { "alias": "id"; "required": false; }; "name": { "alias": "name"; "required": false; }; "value": { "alias": "value"; "required": false; }; "classname": { "alias": "classname"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "regex": { "alias": "regex"; "required": false; }; "isnumberonly": { "alias": "isnumberonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, { "focus": "focus"; "blur": "blur"; "change": "change"; "KeyPress": "KeyPress"; "KeyDown": "KeyDown"; "KeyUp": "KeyUp"; }, never, never, false, never>;
}
