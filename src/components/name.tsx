import React from 'react';
import styled from 'styled-components';

const MyNameRoot = styled.div`
    position: relative;
    display: flex;
    margin-right: 1rem;
    white-space: pre;
    font-size: 3.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    &:after {
        position: absolute;
        content: '';
        top: 10%;
        bottom: 10%;
        width: 1px;
        right: -1px;
        background: rgb(207, 217, 222);
    }

    @media only screen and (max-width: 600px) {
        font-size: 2rem;
        text-align: center;

        &:after {
            left: 10%;
            right: 10%;
            top: unset;
            bottom: 0;
            width: unset;
            height: 1px;
        }
    }
`;

const Bold = styled.span`
    font-weight: 700;
`;

const jobTitle = `
Development
Team Lead`;

const myName = <div><Bold>Tyson Skiba,</Bold>
{ jobTitle }</div>;

export const MyName: React.FC = () => {
        
    return (
        <MyNameRoot>
            { myName }
        </MyNameRoot>
    )
}
