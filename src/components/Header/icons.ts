import { Lightning, Sun, Moon } from '@styled-icons/bootstrap';
import styled from 'styled-components';

export const HeaderLightningBolt = styled(Lightning)`
    display: inline-block;
    width: 32px;
    height: 32px;
`;

export const LightModeIcon = styled(Sun)<{ isHidden: boolean }>`
    position: absolute;
    top: ${props => props.isHidden ? '50%' : '-50vh'};
    right: 5%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    fill: var(--color--main);
    transition: top .5s cubic-bezier(0, 0.75, 1, 1), fill .5s;
    cursor: pointer;

    &:hover, &:active {
        fill: ${props => props.theme.colors.marigold};
    }
`;

export const DarkModeIcon = styled(Moon)<{ isHidden: boolean }>`
    position: absolute;
    top: 50%;
    right: ${props => props.isHidden ? '5%' : '-50vh'};
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    fill: var(--color--main);
    transition: right .5s cubic-bezier(0, 0.75, 1, 1), fill .5s;
    cursor: pointer;

    &:hover, &:active {
        fill: ${props => props.theme.colors.blue};
    }
`;