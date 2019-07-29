import { TesseractBaseline } from './tesseract-baseline';
import { TesseractBbox } from './tesseract-bbox';
import { TesseractChoice } from './tesseract-choice'

export class TesseractSymbol {
    private baseline: TesseractBaseline;
    private bbox: TesseractBbox;
    private choices: Array<TesseractChoice>;
    private confidence: number;
    private image: any;
    private is_dropcap: false;
    private is_subscript: false;
    private is_superscript: false;
    private text: string;
}