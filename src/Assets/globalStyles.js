import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background-color:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition:all .4s linear;
    }
    .App{
        box-shadow:${({ theme }) => theme.boxShadow};
        transition:all .4s linear;
    }
    .toggle{
        width:fit-content;
        height:fit-content;
        cursor: pointer;
        position:absolute;
        transform:translate(200px, 12px);
    }
    .img_label{
        background-color:${({ theme }) => theme.btnBackground};
        color:${({ theme }) => theme.body};
        transition:all .4s linear;
    }
    .copy_txt{ 
      background-color:${({ theme }) => theme.btnBackground};
      color:${({ theme }) => theme.body};
      transition:all .4 linear;
    }
    .prev_img{
    border: 2px dashed;
    border-color:${({ theme }) => theme.prevBorder};
    transition:all .4s linear;
    }
    .progress{
        box-shadow:${({ theme }) => theme.progresShadow};
        background-color:${({ theme }) => theme.body};
        transition:all .4s linear;
    }
    #progress{
        background-color: ${({ theme }) => theme.progressBg};
        transition:all .4s linear;
    }
`;

export const lightTheme = {
  body: "#fff",
  text: "#121212",
  btnBackground: "#03DAC5",
  prevBorder: "rgba(2, 2, 22, 0.6)",
  boxShadow: "0px 1px 6px rgba(46, 41, 41, 0.5)",
  progresShadow: "0px 1px 6px rgba(46, 41, 41, 0.5)",
  progressBg: "rgba(25, 25, 112, 0.8)",
};

export const darkTheme = {
  body: "#332940",
  text: "#fff",
  btnBackground: "#bb86fc",
  prevBorder: "#fff",
  boxShadow: "0px 1px 6px #000",
  progresShadow: "0px 1px 6px #000",
  progressBg: "rgb(211, 206, 206)",
};
