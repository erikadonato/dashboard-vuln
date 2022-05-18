import styled from "styled-components";

export const Container = styled.div`
    width: 4rem;
    top: 2rem;
    left: 0;
    background: rgba(14, 14, 14, 0.2);
    padding: 0.5rem;
    transition: all 0.5s ease;
    border-radius: 0 20px 20px 0;
    min-height: 12vh;
    max-height: 12vh;
    margin-top: 2rem;
    z-index: 2;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
        width: 3.5rem;
        padding: 2% 0;
        margin-top: 1rem;
    }

    &.active {
        display: block;
        background: rgba(14, 14, 14, 0.95);
        width: 16rem;
        border-radius: 0 20px 20px 0;
        padding: 2rem 0;
        min-height: 80vh;
        max-height: 80vh;
        @media screen and (max-width: 800px) {
            padding: 1rem 0;
            width: 6rem;
            min-height: 80vh;
            max-height: 80vh;
        }
    }

    .logo_content {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 10px;
        @media screen and (max-width: 1200px) {
            padding: 0 1px 0 4px;
        }

        @media screen and (max-width: 800px) {
            padding: 0 10px;
        }
    }

    & .logo_content .logo {
        color: #fff;
        display: flex;
        height: 50px;
        width: 100%;
        align-items: center;
        pointer-events: none;
        opacity: 0;
        pointer-events: none;
    }

    & .logo_content .logo_img {
        width: 20%;
        border-radius: 50px;
        margin-right: 0;
    }

    &.active .logo_content .logo {
        opacity: 1;
        pointer-events: none;

        @media screen and (max-width: 800px) {
            display: none;
        }

    }

    .logo_content .logo svg {
        font-size: 28px;
        margin-right: 0px;
    }

    .logo_content .logo .logo_name {
        font-size: 20px;
        font-weight: 400;
        white-space: nowrap;
        margin: 0 15px 0 10px;
        @media screen and (max-width: 1200px) {
            font-size: 18px;
            margin: 0 5px; 
        }
    }

    & #btn {
        font-size: 20px;
        min-height: 25px;
        min-width: 25px;
        text-align: center;
        line-height: 50px;
        transform: translateX(0);
        cursor: pointer;

        @media screen and (max-width: 800px) {
            transform: translateX(70%);
        }
    }

    & .active-btn {
        font-size: 20px;
        min-height: 25px;
        min-width: 25px;
        text-align: center;
        line-height: 50px;
        transform: translateX(-125%);
        cursor: pointer;
    }


    &.active ul li a:hover {
        color: #11101d;
        background: #fff;
    }

    .fa {
        color: #FFF;
        font-size: 5rem;
    }

`
