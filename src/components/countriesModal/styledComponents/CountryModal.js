import styled from 'styled-components';

import {
  Black,
  DimGray,
  DodgerBlue,
  White,
} from '../../../assets/colors/colors';

export const CountryModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isOpened ? '1' : '0')};
  pointer-events: ${(props) => (props.isOpened ? 'all' : 'none')};

  .country_modal_content {
    padding: 20px;
    border-radius: 12px;
    background: ${White};
    color: ${Black};

    width: 600px;
    transform: ${(props) => (props.isOpened ? 'scale(1)' : 'scale(0.5)')};
    transition: 0.4s all;
    text-align: center;
    display: flex;
    flex-direction: column;

    .country_modal_header {
      font-size: 48px;
      line-height: 56px;
      margin-bottom: 38px;
    }

    .country_modal_body {
      color: ${DimGray};
      table {
        width: 100%;
        text-align: left;
        td {
          padding-bottom: 48px;
          :last-of-type {
            padding-bottom: 36px;
          }
        }
        .firstCell {
          width: 10%;
          .recovered-img {
            padding-left: 5px;
          }
        }

        .secondCell {
          width: 55%;
        }

        .lastCell {
          text-align: right;
          width: 35%;
        }
      }
    }

    .country_modal_footer {
      display: flex;
      justify-content: center;

      .country_modal_btn {
        cursor: pointer;
        font-size: 24px;
        color: ${White};
        text-transform: uppercase;
        padding: 10px 70px;
        background: ${DodgerBlue};
        border-radius: 20px;
        outline: none;
        border: none;
        :hover {
          box-shadow: 0px 0px 10px ${DodgerBlue};
        }
      }
    }
  }
`;
