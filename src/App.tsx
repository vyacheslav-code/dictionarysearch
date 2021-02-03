import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import { Chart, Interval } from "bizcharts";

import { useStore } from "./store/useStore";
import Container from "./components/Container";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import SearchTypeSelect from "./components/SearchTypeSelect";
import SearchButton from "./components/SearchButton";
import TotalNumber from "./components/TotalNumber";
import { OPTIONS } from "./constants";

import "./index.css";

const App = () => {
  const {
    makeSearch,
    searchType,
    searchPhrase,
    setSearchPhrase,
    setSearchType,
    number,
    loading,
    chartData,
  } = useStore();

  return (
    <Container>
      <Header />

      <SearchInput
        onChange={setSearchPhrase}
        value={searchPhrase}
        placeholder={"Enter a letter to search for..."}
      />

      <SearchTypeSelect
        options={OPTIONS}
        value={searchType}
        onChange={setSearchType}
      />

      <SearchButton onClick={makeSearch}>Search</SearchButton>

      {number && !loading && <TotalNumber>{number}</TotalNumber>}
      {loading && <p>Loading...</p>}

      <Chart autoFit data={chartData} placeholder={"Loading"}>
        <Interval position={"letter*total"} />
      </Chart>
    </Container>
  );
};

export default observer(App);
