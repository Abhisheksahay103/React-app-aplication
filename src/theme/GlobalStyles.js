import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }
.navbar_menu{
  background: ${({ theme }) => theme.colors.nav};
}
.sidenavbar {
  background: ${({ theme }) => theme.colors.sidenav};
}
h4, h3{
  color: ${({ theme }) => theme.colors.text};
}
.card {
  background: ${({ theme }) => theme.colors.card};
}

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }
  .card_group .card .section_two p {
    color: ${({ theme }) => theme.colors.cardtext};
  }
  select{
    color: ${({ theme }) => theme.colors.cardtext};
  }
  .card_group .card .top_section h4 {
    color: ${({ theme }) => theme.colors.cardtext};
  }
  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }

  button.cancel {
    background-color: #ff0000;
    color: ${({ theme }) => theme.colors.button.text};
  }

  button:disabled {
    background-color: #ebebeb;
    color: #333333;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }
  .carousel-demo {
    .card {
      .p-carousel-header {
        h5 {
          color: ${({ theme }) => theme.colors.headingcolor};
      }
      }
    }
  }
  .group_charts {
    .card {
      .card_header {
        h4 {
          color: ${({ theme }) => theme.colors.headingcolor};
        }
      }
    }
  }
  .p-datatable .p-datatable-thead > tr > th {
    background: ${({ theme }) => theme.colors.body};
    .p-column-title {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
