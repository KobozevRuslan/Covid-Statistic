import styled from 'styled-components';

import { Black, Gray, White } from '../../../assets/colors/colors';

export const ListItem = styled.table`
  background: ${White};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  margin-bottom: 20px;
  color: ${Black};

  td {
    text-align: start;
    border-right: 1px solid ${Gray};
    padding: 26px 34px 26px 30px;
    cursor: pointer;
    :last-of-type {
      border-right: none;
    }
  }

  .firstCell {
    width: 5%;
  }

  .secondCell {
    width: 55%;
  }

  .lastCell {
    width: 40%;
  }
`;
