import { TesseractBaseline } from './tesseract-baseline';
import { TesseractBbox } from './tesseract-bbox';
import { TesseractChoice } from './tesseract-choice';
import { TesseractSymbol } from './tesseract-symbol';

export class TesseractWord {

    private baseline: TesseractBaseline;
    private bbox: TesseractBbox;
    private choices: Array<TesseractChoice>;
    private confidence: number;
    private direction: string;
    private fond_id: number;
    private font_name: string;
    private font_size: number;
    private in_dictionnary: boolean;
    private is_bold: boolean;
    private is_monospace: boolean;
    private is_numeric: false;
    private is_serif: boolean;
    private is_smallcpas: boolean;
    private is_underlined: boolean;
    private language: string;
    private symbols: Array<TesseractSymbol>;
    private text: string;
}