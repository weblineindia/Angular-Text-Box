import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class AngularWeblineindiaTextBoxComponent {
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
    }
    onFocus(event) {
        this.focus.emit(event);
    }
    onBlur(event) {
        this.blur.emit(event);
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AngularWeblineindiaTextBoxComponent, selector: "angular-weblineindia-text-box", inputs: { id: "id", name: "name", value: "value", classname: "classname", placeholder: "placeholder", disabled: "disabled", maxlength: "maxlength", regex: "regex", isnumberonly: "isnumberonly", required: "required" }, outputs: { focus: "focus", blur: "blur", change: "change", KeyPress: "KeyPress", KeyDown: "KeyDown", KeyUp: "KeyUp" }, ngImport: i0, template: "<input\r\n  [id]=\"id !== undefined ? id : ''\"\r\n  [name]=\"name !== undefined ? name : ''\"\r\n  [value]=\"value !== undefined ? value : ''\"\r\n  [class]=\"classname !== undefined ? classname : ''\"\r\n  [placeholder]=\"placeholder !== undefined ? placeholder : ''\"\r\n  [disabled]=\"disabled\"\r\n  [attr.maxlength]=\"maxlength\"\r\n  [required]=\"required ? true : null\"\r\n  [type]=\"isnumberonly ? 'number' : 'text'\"\r\n  (focus)=\"onFocus($event)\"\r\n  (blur)=\"onBlur($event)\"\r\n  (input)=\"onChange($event)\"\r\n  (keypress)=\"onKeyPress($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  (keyup)=\"onKeyUp($event)\"\r\n/>\r\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaTextBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'angular-weblineindia-text-box', template: "<input\r\n  [id]=\"id !== undefined ? id : ''\"\r\n  [name]=\"name !== undefined ? name : ''\"\r\n  [value]=\"value !== undefined ? value : ''\"\r\n  [class]=\"classname !== undefined ? classname : ''\"\r\n  [placeholder]=\"placeholder !== undefined ? placeholder : ''\"\r\n  [disabled]=\"disabled\"\r\n  [attr.maxlength]=\"maxlength\"\r\n  [required]=\"required ? true : null\"\r\n  [type]=\"isnumberonly ? 'number' : 'text'\"\r\n  (focus)=\"onFocus($event)\"\r\n  (blur)=\"onBlur($event)\"\r\n  (input)=\"onChange($event)\"\r\n  (keypress)=\"onKeyPress($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  (keyup)=\"onKeyUp($event)\"\r\n/>\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtdGV4dC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13ZWJsaW5laW5kaWEtdGV4dC1ib3gvc3JjL2xpYi9hbmd1bGFyLXdlYmxpbmVpbmRpYS10ZXh0LWJveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdlYmxpbmVpbmRpYS10ZXh0LWJveC9zcmMvbGliL2FuZ3VsYXItd2VibGluZWluZGlhLXRleHQtYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3ZFLE1BQU0sT0FBTyxtQ0FBbUM7SUFzQjlDO1FBaEJTLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLFVBQUssR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNyRCxTQUFJLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDcEQsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFELGFBQVEsR0FDaEIsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUIsWUFBTyxHQUNmLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzFCLFVBQUssR0FDYixJQUFJLFlBQVksRUFBaUIsQ0FBQztJQUdwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBb0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzsrR0FsRFUsbUNBQW1DO21HQUFuQyxtQ0FBbUMsc1pDUGhELHNvQkFpQkE7OzRGRFZhLG1DQUFtQztrQkFML0MsU0FBUzsrQkFDRSwrQkFBK0I7MEVBS2hDLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFFSSxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUVHLE9BQU87c0JBQWhCLE1BQU07Z0JBRUcsS0FBSztzQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ndWxhci13ZWJsaW5laW5kaWEtdGV4dC1ib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyLXdlYmxpbmVpbmRpYS10ZXh0LWJveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJXZWJsaW5laW5kaWFUZXh0Qm94Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpZCE6IHN0cmluZztcclxuICBASW5wdXQoKSBuYW1lITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsYXNzbmFtZSE6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbWF4bGVuZ3RoOiBudW1iZXIgPSAyNTtcclxuICBASW5wdXQoKSByZWdleCE6IFJlZ0V4cDtcclxuICBASW5wdXQoKSBpc251bWJlcm9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIEtleVByZXNzOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBLZXlEb3duOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBLZXlVcDogRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+ID1cclxuICAgIG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAoIXRoaXMucmVnZXggfHwgdGhpcy5yZWdleC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuS2V5UHJlc3MuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuS2V5RG93bi5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuS2V5VXAuZW1pdChldmVudCk7XHJcbiAgfVxyXG59XHJcbiIsIjxpbnB1dFxyXG4gIFtpZF09XCJpZCAhPT0gdW5kZWZpbmVkID8gaWQgOiAnJ1wiXHJcbiAgW25hbWVdPVwibmFtZSAhPT0gdW5kZWZpbmVkID8gbmFtZSA6ICcnXCJcclxuICBbdmFsdWVdPVwidmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogJydcIlxyXG4gIFtjbGFzc109XCJjbGFzc25hbWUgIT09IHVuZGVmaW5lZCA/IGNsYXNzbmFtZSA6ICcnXCJcclxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCA/IHBsYWNlaG9sZGVyIDogJydcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgW2F0dHIubWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiXHJcbiAgW3JlcXVpcmVkXT1cInJlcXVpcmVkID8gdHJ1ZSA6IG51bGxcIlxyXG4gIFt0eXBlXT1cImlzbnVtYmVyb25seSA/ICdudW1iZXInIDogJ3RleHQnXCJcclxuICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4gIChrZXlwcmVzcyk9XCJvbktleVByZXNzKCRldmVudClcIlxyXG4gIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAoa2V5dXApPVwib25LZXlVcCgkZXZlbnQpXCJcclxuLz5cclxuIl19