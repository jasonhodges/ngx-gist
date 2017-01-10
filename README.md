# ng2-gist
Angular 2 Component for embedding a gist within an Angular site

[![Build Status](https://travis-ci.org/jasonhodges/ng2-gist.svg?branch=master)](https://travis-ci.org/jasonhodges/ng2-gist) 
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


## Code Example

In order to use the component in your Angular 2 project after installation, follow these steps:

- Declare `ng2Gist` within app.module.ts

 ```@NgModule({
    declarations: [
      AppComponent,
      ng2Gist
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```
- Use the `ng2-gist` component in any template files by using the `ng2-gist` tag along with username and gistId 
```html
<ng2-gist [gistId]="'{username}/{gistId}'"></ng2-gist>
```

## Motivation
This project was initiated after a search for an Angular 2 component of its kind returned no results.

## Installation

`npm i --save ng2-gist`

## Contributors

## License 
MIT
