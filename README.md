# Angular - Text Box Component

A Angular based Text Box component used to specify an input field where the user can enter data.

## Table of contents

- [Browser Support](#browser-support)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Available Props](#available-props)
- [Methods](#methods)
- [Want to Contribute?](#want-to-contribute)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#Keywords)

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 83.0 ✔                                                                                   | 77.0 ✔                                                                                      | 13.1.1 ✔                                                                                 | 83.0 ✔                                                                             | 11.9 ✔                                                                                                                       |

## Demo

[![](textNg.gif)](https://github.com/weblineindia/AngularJS-Text-Box/textNg.gif)

## Getting started

Install the npm package:

# Demo

[![](textNg.gif)](https://github.com/weblineindia/AngularJS-Text-Box/textNg.gif)

## Getting started

Install the npm package:

```bash
npm install angular-weblineindia-text-box
#OR
yarn add angular-weblineindia-text-box
```

## Usage

Use the `<angular-weblineindia-text-box>` component:

Add in app.module.ts file

```typescript
import { NgModule } from "@angular/core";
import { AngularWeblineindiaTextBoxModule } from "angular-weblineindia-text-box";

@NgModule({
  imports: [AngularWeblineindiaTextBoxModule],
})
export class AppModule {}
```

Add in app.component.ts file

```typescript
export class AppComponent {
  myRegex: RegExp = /^[a-zA-Z0-9]+$/;

  onFocusHandler(event: any): void {}

  onBlurHandler(event: any): void {}

  onChangeHandler(event: any): void {
  }

  onKeyPressHandler(event: KeyboardEvent): void {
  }

  onKeyDownHandler(event: KeyboardEvent): void {
  }

  onKeyUpHandler(event: KeyboardEvent): void {
  }
```

Add in app.component.html file

```html
<angular-weblineindia-text-box id="myInputId" name="myInputName" value="initial value" classname="my-custom-class" placeholder="Enter text here" [disabled]="false" [maxlength]="25" [regex]="myRegex" [isnumberonly]="false" [required]="true" (focus)="onFocusHandler($event)" (blur)="onBlurHandler($event)" (change)="onChangeHandler($event)" (KeyPress)="onKeyPressHandler($event)" (KeyDown)="onKeyDownHandler($event)" (KeyUp)="onKeyUpHandler($event)"></angular-weblineindia-text-box>
```

Add in app.component.css file

```typescript
::ng-deep .my-custom-class {
  color: aqua;
}
```

## Available Props

| Prop         | Type    | default | Description                                    |
| ------------ | ------- | ------- | ---------------------------------------------- |
| id           | String  |         | ID for the input                               |
| name         | String  |         | Nam for the input                              |
| value        | string  |         | Value of the component                         |
| classname    | object  |         | Class to the input                             |
| placeholder  | String  |         | The input field will get this placeholder text |
| disabled     | Boolean | false   | Disable component                              |
| maxlength    | Number  | 25      | The input maxlength                            |
| regex        | RegExp  |         | The input regex                                |
| isnumberonly | Boolean | false   | The input field will get number value          |
| required     | Boolean | false   | The input field will required or not           |

## Methods

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| focus    | Gets triggered when the autocomplete input field receives focus. |
| blur     | Gets triggered when the autocomplete input field loses focus.    |
| change   | Gets triggered when the autocomplete results got changed.        |
| KeyPress | Gets triggered when a key gets pressed.                          |
| KeyDown  | Gets triggered when a key gets down.                             |
| KeyUp    | Gets triggered when a key gets up.                               |

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

---

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html)

---

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/AngularJS-Text-Box/blob/master/LICENSE

## Keywords

angular-weblineindia-text-box, textbox, input, angular, angular-component, textbox-component, textarea, text-box-input
