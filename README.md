# ngx-gist [![Build Status](https://travis-ci.org/jasonhodges/ngx-gist.svg?branch=master)](https://travis-ci.org/jasonhodges/ngx-gist) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Angular 4 Component for embedding a gist within an Angular site

## Code Example

In order to use the component in your Angular 4 project after installation, follow these steps:

- Declare `ngxGist` within app.module.ts

 ```@NgModule({
    declarations: [
      AppComponent,
      ngxGist
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
- Use the `ngx-gist` component in any template files by using the `ngx-gist` tag along with username and gistId 
```html
<ngx-gist [gistId]="'{username}/{gistId}'"></ngx-gist>
```

## Motivation
This project was initiated after a search for an Angular 4 component of its kind returned no results.

## Installation

`npm i --save ngx-gist`

## Contributors

## License 
MIT
