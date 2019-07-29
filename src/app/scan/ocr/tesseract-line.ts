import { TesseractBaseline } from './tesseract-baseline';
import { TesseractBbox } from './tesseract-bbox';
import { TesseractSymbol } from './tesseract-symbol';
import { TesseractWord } from './tesseract-word';

export class TesseractLine {
    public baseline: TesseractBaseline;
    public bbox: TesseractBbox;
    public confidence: number;
    public symbols: Array<TesseractSymbol>;
    public text: string;
    public words: Array<TesseractWord>;
}