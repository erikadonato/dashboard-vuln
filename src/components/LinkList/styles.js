import styled from 'styled-components';

export const Container = styled.ul`
    margin-top: 3rem;
    color: #FFF;
    list-style: none;
    padding-left: 0;

    a {
        color: white;
        text-decoration: none;
    }

    li {
        position: relative;
        height: 2.8rem;
        width: 100%;
        min-width: 150px;
        margin-top: 6%;
        list-style: none;
        line-height: 50px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        padding-left: 5%;
        &:hover {
            color: #11101d;
            background: #fff;
            .fas {
                color: #1d1b31;
            }
        }

    svg {
        border-radius: 12px;
        line-height: 50px;
        text-align: center;
    }

    a {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        transition: all 0.4s ease;
        border-radius: 12px;
        white-space: nowrap;
        width: 100%;
        flex: 1;

        &:hover {
            color: #11101d;
            background: #fff;
        }
    }

    .active a {
        color: #11101d;
        background: #fff;
    }
  

    .bx-search {
        position: absolute;
        z-index: 99;
        color: #fff;
        font-size: 22px;
        transition: all 0.5 ease;

        &:hover {
            color: #1d1b31;
        }
    }

    .tooltip {
        position: absolute;
        left: 70px;
        top: 0;
        transform: translateY(-50%);
        border-radius: 6px;
        height: 35px;
        width: 122px;
        background: #fff;
        line-height: 35px;
        text-align: center;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        transition: 0s;
        opacity: 0;
        pointer-events: none;
        display: block;
    }
        &:hover .tooltip {
            top: 50%;
            opacity: 1;
            transition: all 0.5s ease;
        }
    }

    .fas {
        font-size: 1.5rem;
        margin-right: 0.8rem;
        color: white;
    }

    @media screen and (max-width: 1200px) {
        li {
            font-size: 16px;
            padding-left: 3%;
        }
    }
  
    @media screen and (max-width: 800px) {
        span {
        display: none;
        }  

        li {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 50px;
        margin-top: 10%;
        }
    }
`
