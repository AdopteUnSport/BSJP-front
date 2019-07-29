import { TesseractLine } from './ocr/tesseract-line';

export class TesseractTicket {

    public lines: Array<TesseractLine>;

    constructor(){
        this.lines= new Array<TesseractLine>();
    }
}