import React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";

const StyledButton = styled.div`
  margin-top: 8px;
  padding: 8px 16px;
  text-transform: uppercase;
  background-color: #4064ac;
  color: white;
`;

type Props = {
  onClick: () => void;
};

const SearchButton: React.FC<Props> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default SearchButton;
