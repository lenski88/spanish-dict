export interface Dict {
  es: string;
  ru: string;
}

export enum Lang {
  ES = "es",
  RU = "ru",
}

export interface Statistic {
  correct: number;
  incorrect: number;
  all: number;
}
