import { Injectable, Component, Input, Output, EventEmitter, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TextService {
    constructor() { }
}
TextService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
TextService.ctorParameters = () => [];
/** @nocollapse */ TextService.ngInjectableDef = defineInjectable({ factory: function TextService_Factory() { return new TextService(); }, token: TextService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TextComponent {
    constructor() {
        this.maxLength = 10;
        this.isnumberonly = false;
        this.className = {};
        this.disabled = false;
        this.tabindex = 0;
        this.type = "text";
        this.id = "";
        this.name = "";
        this.placeholder = "Enter value";
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.KeyDown = new EventEmitter();
        this.KeyPress = new EventEmitter();
        this.KeyUp = new EventEmitter();
        this.blur = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focus.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.blur.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.change.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        this.KeyDown.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        this.KeyUp.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyPress(event) {
        this.KeyPress.emit(event);
    }
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-text",
                template: `<input
[id] ="id"
[name]="name"
[value]="value"
[tabindex]="tabindex"
[placeholder]="placeholder"
[disabled]="disabled"
[type]="type"
[maxLength]="maxLength"
[className]="className"
(focus)="onFocus($event)"
(blur)="onBlur($event)"
(input)="onChange($event)"
(keydown)="onKeyDown($event)"
(keypress)="onKeyPress($event)"
(keyup)="onKeyUp($event)"
/>`,
                styles: []
            },] },
];
TextComponent.propDecorators = {
    maxLength: [{ type: Input }],
    isnumberonly: [{ type: Input }],
    className: [{ type: Input }],
    regex: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    tabindex: [{ type: Input }],
    type: [{ type: Input }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    KeyDown: [{ type: Output }],
    KeyPress: [{ type: Output }],
    KeyUp: [{ type: Output }],
    blur: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TextModule {
}
TextModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [TextComponent],
                exports: [TextComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { TextService, TextComponent, TextModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtdGV4dC1ib3guanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItd2VibGluZWluZGlhLXRleHQtYm94L2xpYi90ZXh0LnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItd2VibGluZWluZGlhLXRleHQtYm94L2xpYi90ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci13ZWJsaW5laW5kaWEtdGV4dC1ib3gvbGliL3RleHQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItdGV4dFwiLFxuICB0ZW1wbGF0ZTogYDxpbnB1dFxuW2lkXSA9XCJpZFwiXG5bbmFtZV09XCJuYW1lXCJcblt2YWx1ZV09XCJ2YWx1ZVwiXG5bdGFiaW5kZXhdPVwidGFiaW5kZXhcIlxuW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbltkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5bdHlwZV09XCJ0eXBlXCJcblttYXhMZW5ndGhdPVwibWF4TGVuZ3RoXCJcbltjbGFzc05hbWVdPVwiY2xhc3NOYW1lXCJcbihmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxuKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudClcIlxuKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuKGtleXByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50KVwiXG4oa2V5dXApPVwib25LZXlVcCgkZXZlbnQpXCJcbi8+YCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBOdW1iZXIgPSAxMDtcbiAgQElucHV0KCkgaXNudW1iZXJvbmx5OiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogb2JqZWN0ID0ge307XG4gIEBJbnB1dCgpIHJlZ2V4OiBhbnk7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHZhbHVlOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHRhYmluZGV4OiBOdW1iZXIgPSAwO1xuICBASW5wdXQoKSB0eXBlOiBTdHJpbmcgPSBcInRleHRcIjtcbiAgQElucHV0KCkgaWQ6IFN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIG5hbWU6IFN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBTdHJpbmcgPSBcIkVudGVyIHZhbHVlXCI7XG5cbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIEtleVByZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgS2V5VXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgb25Gb2N1cyhldmVudCkge1xuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gIH1cbiAgb25CbHVyKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5LZXlEb3duLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uS2V5VXAoZXZlbnQpIHtcbiAgICB0aGlzLktleVVwLmVtaXQoZXZlbnQpO1xuICB9XG4gIG9uS2V5UHJlc3MoZXZlbnQpIHtcbiAgICB0aGlzLktleVByZXNzLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1RleHRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGV4dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEOzt5QkF3QitCLEVBQUU7NEJBQ0UsS0FBSzt5QkFDVCxFQUFFO3dCQUVGLEtBQUs7d0JBRU4sQ0FBQztvQkFDTCxNQUFNO2tCQUNSLEVBQUU7b0JBQ0EsRUFBRTsyQkFDSyxhQUFhO3NCQUVOLElBQUksWUFBWSxFQUFPO3FCQUN4QixJQUFJLFlBQVksRUFBTzt1QkFDckIsSUFBSSxZQUFZLEVBQU87d0JBQ3RCLElBQUksWUFBWSxFQUFPO3FCQUMxQixJQUFJLFlBQVksRUFBTztvQkFFeEIsSUFBSSxZQUFZLEVBQU87Ozs7OztJQUUzRCxPQUFPLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOzs7OztJQUNELE1BQU0sQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkI7Ozs7O0lBQ0QsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6Qjs7Ozs7SUFDRCxTQUFTLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUNELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7Ozs7O0lBQ0QsVUFBVSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozt3QkFFRSxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7aUJBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBRUwsTUFBTTtvQkFDTixNQUFNO3NCQUNOLE1BQU07dUJBQ04sTUFBTTtvQkFDTixNQUFNO21CQUVOLE1BQU07Ozs7Ozs7QUMxQ1Q7OztZQUdDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFDUjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9