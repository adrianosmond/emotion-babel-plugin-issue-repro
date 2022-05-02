import styled from "@emotion/styled";

import { fullWidth } from "./utils";

const StyledRoot = styled.div`
  ${fullWidth}

  button {
    @media (min-width: 768px) {
      color: red;
    }
  }
`;

const Component = () => {
  return (
    <StyledRoot>
      Test!
      <button>Button</button>
    </StyledRoot>
  );
};

export default Component;
