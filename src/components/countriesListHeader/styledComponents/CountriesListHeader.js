import styled from 'styled-components';

import { DodgerBlue, White } from '../../../assets/colors/colors';

export const ListItem = styled.table`
  background: ${DodgerBlue};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  margin-bottom: 20px;
  color: ${White};

  th {
    text-align: start;
    border-right: 1px solid ${White};
    padding: 26px 23px 26px 30px;
    :last-of-type {
      border-right: none;
    }
  }

  .firstCell {
    width: 5%;
    max-width: 5%;
  }

  .secondCell {
    width: 55%;
  }

  .lastCell {
    width: 40%;
  }
`;
