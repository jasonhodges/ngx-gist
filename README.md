# ngx-gist 
[![Build Status](https://travis-ci.org/jasonhodges/ngx-gist.svg?branch=master)](https://travis-ci.org/jasonhodges/ngx-gist) 
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Angular 4 Component for embedding a gist within an Angular site

## Code Example

In order to use the component in your Angular 4 project after installation, follow these steps:

- Declare `NgxGistModule` within app.module.ts
```typescript
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
```
 ```typescript
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      NgxGistModule
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
[<img src="https://avatars2.githubusercontent.com/u/17721520?v=4" width="100px;"/><br /><sub>Rahul Singh</sub>](https://github.com/rahulrsingh09)<br />[📖](https://github.com/jasonhodges/ngx-gist/commits?author=rahulrsingh09 "Documentation")
## License 
MIT
