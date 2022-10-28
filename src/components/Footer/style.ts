import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 200px;
  .content-wrapper {
    max-width: 1000px;
    display: flex;
    margin: auto;
    width: 100%;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.theme.titles};
    .title {
      font-size: 18px;
      margin: 0;
    }
    a {
      font-size: 16px;
      text-decoration: unset;
      margin-left: 25px;
      color: ${(props) => props.theme.titles};
    }
    .toogle-wrapper {
      display: flex;
      flex-direction: row;
      p {
        margin: 0;
        font-size: 16px;
      }
      .selected {
        color: ${(props) => props.theme.text};
      }
      .divider {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
  @media (max-width: 1250px) {
    .content-wrapper {
      max-width: 90%;
      .title {
        font-size: 18px;
      }
      a {
        font-size: 14px;
        margin-left: 10px;
      }
      .toogle-wrapper {
        p {
          font-size: 14px;
        }
      }
    }
  }
`;
