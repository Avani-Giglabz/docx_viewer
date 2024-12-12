import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import WebViewer, {WebViewerInstance} from "@pdftron/webviewer";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-word-file-editor',
  styleUrls: ['word-file-editor.component.css'],
  templateUrl: 'word-file-editor.component.html'
})
export class WordFileEditorComponent implements OnInit{
  serviceLink: any = '';
  instance: any;
  DocsAPI: any;

  @ViewChild('viewerElement', { static: true }) viewerElement!: ElementRef;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
   }

   ngOnInit() {
    WebViewer(
      {
        path: 'assets/lib', // Path to the PDFTron 'lib' folder
        initialDoc: '', // Optional: Initial document to load
        isReadOnly: true,
        loadAsPDF: false,
        disabledElements: [
          'menuButton'
        ]
      },
      this.viewerElement.nativeElement
    ).then(instance => {
      this.instance = instance;
      const theme = instance.UI.Theme;
      instance.UI.setTheme(theme.LIGHT);
      var FitMode = instance.UI.FitMode;
      instance.UI.setFitMode(FitMode.FitPage);
      var Feature = instance.UI.Feature;
      instance.UI.disableFeatures([Feature.Print, Feature.Download]);
      
      const { documentViewer } = instance.Core;
      documentViewer.addEventListener('documentLoaded', () => {
      });
    });  
  }

  ngOnDestroy() {
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input?.files[0];

      this.instance.Core.documentViewer.closeDocument();
      this.instance.UI.loadDocument(file, { filename: file.name });
    }
  }
}