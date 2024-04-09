import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

class AngularWeblineindiaTextBoxService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AngularWeblineindiaTextBoxComponent {
    constructor() {
        this.disabled = false;
        this.maxlength = 25;
        this.isnumberonly = false;
        this.required = false;
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.KeyPress = new EventEmitter();
        this.KeyDown = new EventEmitter();
        this.KeyUp = new EventEmitter();
        console.log('clads', this.classname);
    }
    onFocus() {
        this.focus.emit();
    }
    onBlur() {
        this.blur.emit();
    }
    onChange(event) {
        const value = event.target.value;
        if (!this.regex || this.regex.test(value)) {
            this.change.emit(value);
        }
    }
    onKeyPress(event) {
        this.KeyPress.emit(event);
    }
    onKeyDown(event) {
        this.KeyDown.emit(event);
    }
    onKeyUp(event) {
        this.KeyUp.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AngularWeblineindiaTextBoxComponent, selector: "angular-weblineindia-text-box", inputs: { id: "id", name: "name", value: "value", classname: "classname", placeholder: "placeholder", disabled: "disabled", maxlength: "maxlength", regex: "regex", isnumberonly: "isnumberonly", required: "required" }, outputs: { focus: "focus", blur: "blur", change: "change", KeyPress: "KeyPress", KeyDown: "KeyDown", KeyUp: "KeyUp" }, ngImport: i0, template: "<input\r\n  [id]=\"id !== undefined ? id : ''\"\r\n  [name]=\"name !== undefined ? name : ''\"\r\n  [value]=\"value !== undefined ? value : ''\"\r\n  [class]=\"classname !== undefined ? classname : ''\"\r\n  [placeholder]=\"placeholder !== undefined ? placeholder : ''\"\r\n  [disabled]=\"disabled\"\r\n  [attr.maxlength]=\"maxlength\"\r\n  [required]=\"required ? true : null\"\r\n  [type]=\"isnumberonly ? 'number' : 'text'\"\r\n  (focus)=\"onFocus()\"\r\n  (blur)=\"onBlur()\"\r\n  (input)=\"onChange($event)\"\r\n  (keypress)=\"onKeyPress($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  (keyup)=\"onKeyUp($event)\"\r\n/>\r\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'angular-weblineindia-text-box', template: "<input\r\n  [id]=\"id !== undefined ? id : ''\"\r\n  [name]=\"name !== undefined ? name : ''\"\r\n  [value]=\"value !== undefined ? value : ''\"\r\n  [class]=\"classname !== undefined ? classname : ''\"\r\n  [placeholder]=\"placeholder !== undefined ? placeholder : ''\"\r\n  [disabled]=\"disabled\"\r\n  [attr.maxlength]=\"maxlength\"\r\n  [required]=\"required ? true : null\"\r\n  [type]=\"isnumberonly ? 'number' : 'text'\"\r\n  (focus)=\"onFocus()\"\r\n  (blur)=\"onBlur()\"\r\n  (input)=\"onChange($event)\"\r\n  (keypress)=\"onKeyPress($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  (keyup)=\"onKeyUp($event)\"\r\n/>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { id: [{
                type: Input
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], classname: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], regex: [{
                type: Input
            }], isnumberonly: [{
                type: Input
            }], required: [{
                type: Input
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], change: [{
                type: Output
            }], KeyPress: [{
                type: Output
            }], KeyDown: [{
                type: Output
            }], KeyUp: [{
                type: Output
            }] } });

class AngularWeblineindiaTextBoxModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxModule, declarations: [AngularWeblineindiaTextBoxComponent], exports: [AngularWeblineindiaTextBoxComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AngularWeblineindiaTextBoxComponent
                    ],
                    imports: [],
                    exports: [
                        AngularWeblineindiaTextBoxComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of angular-weblineindia-text-box
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularWeblineindiaTextBoxComponent, AngularWeblineindiaTextBoxModule, AngularWeblineindiaTextBoxService };
//# sourceMappingURL=angular-weblineindia-text-box.mjs.map
