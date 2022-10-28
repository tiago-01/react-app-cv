import styled from "styled-components";

export const HomePageStyle = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 100px;
  flex-direction: column;
  .top-section {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 15px;
    .photo {
      width: 20%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 100%;
      border: solid;
      border-width: 4px;
      border-color: ${(props) => props.theme.titles};
    }
    .info-wrapper {
      display: flex;
      flex-direction: column;
      margin-left: 40px;
      width: 80%;
      color: ${(props) => props.theme.text};
      .title {
        font-size: 28px;
        line-height: 36px;
        font-weight: bold;
        margin: 0;
        margin-bottom: 25px;
      }
      .info-row {
        display: flex;
        flex-direction: row;
        .text {
          font-size: 16px;
          margin: 0;
          margin-right: 10px;
          & a {
            color: ${(props) => props.theme.titles};
          }
        }
        &:nth-child(3) {
          margin-top: 10px;
        }
      }
    }
  }
  .info-section {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 25px;
    color: ${(props) => props.theme.text};
    .left-content {
      width: 20%;
      min-width: 20%;
      padding-left: 8px;
      text-align: right;
      p {
        margin: 0;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
        &.date {
          font-size: 16px;
          font-weight: normal;
          margin-top: 10px;
        }
      }
    }
    .right-content {
      width: 80%;
      display: flex;
      margin-left: 40px;
      margin-top: 12px;
      display: flex;
      flex-direction: column;
      .divider {
        width: 100%;
        height: 2px;
        margin-bottom: 20px;
        background-color: ${(props) => props.theme.titles};
      }
      a.text {
        color: ${(props) => props.theme.titles};
      }
      .text {
        font-size: 16px;
        line-height: 21px;
        margin: 0;
        text-align: left;
        & p {
          margin: 0;
          a {
            color: ${(props) => props.theme.titles};
          }
        }
        &.title {
          font-size: 18px;
          font-weight: bold;
        }
        &.company {
          text-transform: uppercase;
          font-style: italic;
          margin-top: 15px;
          margin-bottom: 15px;
          font-weight: bold;
        }
      }
    }
  }
  @media (max-width: 1250px) {
    max-width: 90%;
  }
  @media (max-width: 991px) {
    .top-section {
      flex-direction: column;
      .photo {
        margin: auto;
        width: 150px;
        margin-bottom: 25px;
      }
      .info-wrapper {
        margin: 0;
        width: 100%;
        .title {
          font-size: 20px;
          line-height: 28px;
        }
        .info-row {
          svg {
            width: 18px;
            height: 18px;
          }
          .text {
            font-size: 14px;
          }
        }
      }
    }
    .info-section {
      flex-direction: column;
      .left-content {
        text-align: left;
        width: 100%;
        padding: 0;
        p {
          font-size: 16px;
        }
        p:first-child {
          padding-bottom: 8px;
          border-bottom: 2px solid ${(props) => props.theme.titles};
        }
        p.date {
          margin-top: 20px;
          font-size: 14px;
        }
      }
      .right-content {
        margin-left: 0;
        .divider {
          display: none;
        }
        .text {
          font-size: 14px;
          &.title {
            font-size: 16px;
          }
          &.company {
            margin: 10px 0;
          }
        }
      }
    }
  }
`;
