import { makeAutoObservable } from "mobx";
import request from "../request";
import { TYPES_TO_PARAMS, letters } from "../constants";

export class AppStore {
  number: number | undefined;
  searchPhrase: string = "";
  searchType: SearchType = "STARTS";
  loading: boolean = false;
  chartData: { letter: string; total: number }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  makeSearch = () => {
    this.fetchData(
      TYPES_TO_PARAMS[this.searchType] as RequestType,
      this.searchType === "CONJUNCTION"
        ? this.searchPhrase + this.searchPhrase
        : this.searchPhrase
    );
  };

  private fetchData = async (type: RequestType, query: string) => {
    this.loading = true;
    const {
      data: {
        _meta: { total },
      },
    } = await request(type, query, 1, 0);

    const chartData = await Promise.all(
      letters.map((letter) =>
        request(this.searchType === "STARTS" ? "ends" : "starts", letter, 1, 0)
      )
    );

    const formattedChartData = chartData.map((data, idx) => ({
      letter: letters[idx],
      total: data.data._meta.total,
    }));

    this.chartData = formattedChartData;

    this.number = total;
    this.loading = false;
  };

  setSearchPhrase = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (value.length <= 1) this.searchPhrase = value;
  };

  setSearchType = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    this.searchType = value as SearchType;
  };
}
