import React from 'react';
import styled from 'styled-components';

const SplitViewRoot = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const SplitView: React.FC = ({
    children
}) => {

    return (
        <SplitViewRoot>
            { children }
        </SplitViewRoot>
    )
}
