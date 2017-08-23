import { Component, Input, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-gist',
  template:`
    <iframe #iframe type="text/javascript" width="100%" frameborder="0" style = "height:inherit"></iframe>
  `,
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class NgxGist implements AfterViewInit {
  @ViewChild('iframe') iframe:ElementRef;
  @Input() gistId;
  @Input() file:string;

  ngAfterViewInit() {
    let fileName = (this.file) ? this.file : ''; 
    this.iframe.nativeElement.id = 'gist-' + this.gistId;
    let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
      let content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
        <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js?file=${fileName}"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
}