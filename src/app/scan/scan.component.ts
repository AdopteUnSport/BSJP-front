import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { ProductService } from './../core/services/product.service';
import { TesseractWorker } from 'tesseract.js';
import { TessractObj } from './ocr/tessearct-obj';
import { TesseractTicket } from './tesseract-ticket';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  private worker : TesseractWorker;

  private stream: MediaStream = null;

  private scanTimer = interval(200);

  public nbScreen: number = 0;

  public maxScreen : number = 2;

  public interval : number = 200;

  public captures: Array<HTMLImageElement>;

  public screenSubscribe: any;

  public isRunning: boolean = false;

  private tesseractObjs: Array<TessractObj>;

  private buildTicket: TesseractTicket;

  constructor(
    @Inject(ProductService) public productService : ProductService,
  ) { }

  ngOnInit(){
    this.buildTicket = new TesseractTicket();
    this.tesseractObjs = new Array<TessractObj>();
    this.worker = new TesseractWorker();
    this.captures = [];
    this.getMediaStream().then((stream) => {
      this.stream = stream;
    }, (error) => {
      console.log(error);
    })
  }

  private getMediaStream(): Promise<MediaStream> {

    const video_constraints = { video: true };
    const _video = this.video.nativeElement;
    return new Promise<MediaStream>((resolve, reject) => {
      // (get the stream)
      return navigator.mediaDevices.
        getUserMedia(video_constraints)
        .then(stream => {
          (<any>window).stream = stream; // make variable available to browser console
          _video.srcObject = stream;
          // _video.src = window.URL.createObjectURL(stream);
          _video.onloadedmetadata = function (e: any) { };
          _video.play();
          return resolve(stream);
        })
        .catch(err => reject(err));
    });
  }

  private capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    let image : HTMLImageElement = this.canvas.nativeElement.toDataURL("image/png");
    this.captures.push(image);
    this.parseTesseract(image);
    this.nbScreen ++;
    if(this.nbScreen === this.maxScreen){
      this.stop();
    }
  }

  

  private parseTesseract(image : HTMLImageElement){
    const workerT = new TesseractWorker();
    console.log("start parsing");
    workerT.recognize(image)
  .progress(progress => {
    console.log('progress', progress);
  }).then((result: TessractObj) => {
    console.log('result', result);
    console.log(result.text)
    this.tesseractObjs.push(result);
    this.mapTicket(result)
  });
  }

  private mapTicket(objT: TessractObj) {
    objT.lines.forEach(line => {
      if(line.confidence >= 85) {
        if(this.buildTicket.lines.find(l => l.text === line.text) === undefined){
          this.buildTicket.lines.push(line);
          let search = line.words.join(" ")
          this.productService.getProducts(search).subscribe(response => {

            console.log(response);
          })
        }
      }
    })
  }


  public start(){
    this.isRunning = true;
    this.reset();
    this.screenSubscribe = this.scanTimer.subscribe(val => {
      this.capture();
      
    })
  }

  public stop(){
    this.isRunning = false;
    this.screenSubscribe.unsubscribe();
  }

  public reset(){
    this.captures = [];
    this.nbScreen = 0;
    this.tesseractObjs = new Array<TessractObj>();
    this.buildTicket = new TesseractTicket();
  }
}
