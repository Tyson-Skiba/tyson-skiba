import React from 'react';
import styled from 'styled-components';
import { SplitView, MyName, Links } from '../components';

const AppRoot = styled.div`
  overflow-y: auto;
  overscroll-behavior-y: none;
  border-radius: 0.8rem;
  border: 1px solid #CFD9DE;
  margin: 1rem;
  max-height: calc(100vh - 2rem);
  max-width: calc(100vw - 2rem);
  box-shadow: rgba(51, 65, 85, 0.024) 0px 3px 1px -2px, rgba(51, 65, 85, 0.035) 0px 2px 2px 0px, rgba(51, 65, 85, 0.03) 0px 1px 5px 0px;
  border: 1px solid rgb(207, 217, 222);
  height: 100%;
  background: #FFFFFF;
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
 
export const App: React.FC = () => {
  return (
    <AppRoot>
      <SplitView>
        <MyName />
      </SplitView>
      <SplitView>
        <Links />
      </SplitView>
    </AppRoot>
  );
}
