import React from 'react';
import styled from 'styled-components';

import { At, LinkedIn, Github, Gitlab, Medium } from '../svg';

const LinkRoot = styled.ul`
    list-style: none;
    background-image: none;
    background-repeat: none;
    background-position: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;

    & li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        padding: 1rem;
        border: 1px solid transparent;
        margin: 1rem 0;
    }

    & li span {
        margin-left: 1.25rem;
    }

    & li:active,
    & li:focus,
    & li:hover {
        outline: none;
        border-color: black;
        border-radius: 0.5rem;
    }
`;

const onClickFactory = (url: string) => () => window.open(url, '_blank');
const onKeyDown = (evt: React.KeyboardEvent<HTMLLIElement>) => {
    if (evt.key !== 'Enter' && evt.keyCode !== 13 && evt.key !== 'Space' && evt.keyCode !== 32) return;
    evt.currentTarget.click();
}

const sendEmail = () => {
    window.location.assign('mailto:tyson@skiba.com.au');
}

export const Links: React.FC = () => {

    return (
        <LinkRoot>
            <li
                tabIndex={0}
                onClick={onClickFactory('https://au.linkedin.com/in/tyson-skiba')}
                onKeyDown={onKeyDown}
            >
                <LinkedIn size="2rem" />
                <span>Work history &amp; qualifications</span>
            </li>
            <li
                tabIndex={0}
                onClick={onClickFactory('https://github.com/Tyson-Skiba')}
                onKeyDown={onKeyDown}
            >
                <Github size="2rem" />
                <span>Public portfolio</span>
            </li>
            <li
                tabIndex={0}
                onClick={onClickFactory('https://gitlab.com/tskiba')}
                onKeyDown={onKeyDown}
            >
                <Gitlab size="2rem" />
                <span>Private portfolio</span>
            </li>
            <li
                tabIndex={0}
                onClick={onClickFactory('https://medium.com/@tyson-skiba')}
                onKeyDown={onKeyDown}
            >
                <Medium size="2rem" />
                <span>Articles</span>
            </li>
            <li
                tabIndex={0}
                onClick={sendEmail}
            >
                <At size="2rem" />
                <span>Contact me</span>
            </li>
        </LinkRoot>
    )
}
