import React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #4064ac;
  padding: 8px;
  text-align: center;
  text-transform: uppercase;
  &:focus {
    outline: none;
    border-bottom-color: #013bb1;
  }
  &::placeholder {
    text-transform: none;
  }
`;

type Props = {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const SearchInput: React.FC<Props> = ({ onChange, value, placeholder }) => (
  <StyledInput onChange={onChange} value={value} placeholder={placeholder} />
);

export default SearchInput;
