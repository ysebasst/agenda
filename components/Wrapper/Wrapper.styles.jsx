import styled from "styled-components";

import { breakpoints } from "../../config";
import { rem } from "../../utils";

export const WrapperStyled = styled.div`
  max-width: ${rem(720)};
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: ${rem(1110)};
  }
`;
