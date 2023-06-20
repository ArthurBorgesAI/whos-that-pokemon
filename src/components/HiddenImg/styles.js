import { styled } from "styled-components";
import bgImg from '../../assets/hiddenLayout.jpg';

export const Background = styled.div`
    position: relative;
    margin-bottom: 0.5rem;
    background-image: url(${bgImg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 180px;
    width: 400px;
    max-width: 100%;
    overflow: hidden;
`;

export const Img = styled.img`
    position: absolute;
    width: 40%;
    left: 10%;
    top: 15%;
`;