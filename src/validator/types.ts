export interface HourglassValidatorResult {
  result: boolean;
  timeStrings: string[];
  note?: string;
}

export interface Rule {
  name: string;
  matches(input: string): boolean;
  parse(input: string): string | null;
}

