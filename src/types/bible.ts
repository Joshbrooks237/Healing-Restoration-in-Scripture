export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  version: string;
}

export interface ReconciliationVerse extends BibleVerse {
  highlightedText: string;
}
