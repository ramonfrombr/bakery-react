import { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
    }

    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        border-radius: 10px;
    }


    ::-webkit-scrollbar
    {
        width: 10px;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-image: -webkit-gradient(linear,
                                        left bottom,
                                        left top,
                                        color-stop(0.44, rgb(245, 170, 66)),
                                        color-stop(0.72, rgb(163, 95, 46)),
                                        color-stop(0.86, rgb(130, 85, 53)));
    }

`;
