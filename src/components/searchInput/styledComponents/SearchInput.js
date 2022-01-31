import styled from 'styled-components';

import { White } from '../../../assets/colors/colors';

export const SearchInputWrapper = styled.div`
  position: relative;
  .searchInput {
    width: 400px;
    height: 80px;
    font-size: 32px;
    padding: 12px 32px;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background: ${White};
    outline: none;
  }
  .searchImgWrapper {
    position: absolute;
    top: 25px;
    right: 20px;
  }
`;
