import React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";

const StyledSelect = styled.select`
  border: none;
  border-bottom: 1px solid #4064ac;
  padding: 8px;
  &:focus {
    outline: none;
    border-bottom-color: #013bb1;
  }
`;

type Props = {
  onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
  value: SearchType;
  options: SearchTypeOption[];
};

const SearchTypeSelect: React.FC<Props> = ({ onChange, value, options }) => (
  <StyledSelect onChange={onChange} value={value}>
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </StyledSelect>
);

export default SearchTypeSelect;
