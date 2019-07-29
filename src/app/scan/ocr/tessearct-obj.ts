import { TesseractLine } from './tesseract-line';
import { TesseractWord } from './tesseract-word';
import { TesseractSymbol } from './tesseract-symbol';

export class TessractObj {
    public blocks: Array<any>;

    public confidence: number;

    public lines: Array<TesseractLine>;

    public paragraphs: Array<any>;

    public psm: string;

    public symbols: Array<TesseractSymbol>;

    public text: string;

    public words: Array<TesseractWord>;
    
}