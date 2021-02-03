import React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";

const StyledParagraph = styled.p`
  margin-top: 8px;
  padding: 8px 16px;
  text-align: center;
  font-size: 16px;
  color: #4064ac;
`;

const TotalNumber: React.FC = ({ children }) => (
  <StyledParagraph>
    The answer is <br /> {children}
  </StyledParagraph>
);

export default TotalNumber;
