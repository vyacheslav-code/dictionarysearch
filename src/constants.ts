export const BASE_URL = "https://api.yourdictionary.com/wordfinder/v1/wordlist";
export const TYPES_TO_PARAMS = {
  STARTS: "starts",
  ENDS: "ends",
  APPEARS: "contains",
  CONJUNCTION: "contains",
};
export const letters = Array.from("abcdefghijklmnopqrstuvwxyz");
export const OPTIONS: SearchTypeOption[] = [
  {
    value: "STARTS",
    label: "How many words start with the letter?",
  },
  {
    value: "ENDS",
    label: "How many words end with the letter?",
  },
  {
    value: "APPEARS",
    label: "How many times does the letter appear?",
  },
  {
    value: "CONJUNCTION",
    label: "How many words have the letter repeated in conjunction?",
  },
];
