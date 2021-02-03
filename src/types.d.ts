type RequestType = "starts" | "ends" | "contains";

type SearchType = "STARTS" | "ENDS" | "APPEARS" | "CONJUNCTION";

type SearchTypeOption = {
  value: SearchType;
  label: string;
};
