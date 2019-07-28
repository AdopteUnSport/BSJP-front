import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Observable, interval } from 'rxjs';

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

  private stream: MediaStream = null;

  private scanTimer = interval(500);

  public captures: Array<any>;

  public screenSubscribe: any;

  public isRunning: boolean = false;

  constructor() { }

  ngOnInit(){
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
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  }

  public start(){
    this.isRunning = true;
    this.screenSubscribe = this.scanTimer.subscribe(val => {
      this.capture()
    })
  }

  public stop(){
    this.isRunning = false;
    this.screenSubscribe.unsubscribe();
  }

  public reset(){
    this.captures = [];
  }

}
