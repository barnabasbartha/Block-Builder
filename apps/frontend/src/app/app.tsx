import { MainService } from '@frontend/app/main/main.service';
import { useRef } from 'react';
import { styled } from 'styled-components';
import { Container } from 'typescript-ioc';

const StyledCanvas = styled.canvas`
  width: 100vw !important;
  height: 100vh !important;
`;

const main = Container.get(MainService);

export const App = () => {
  const initRef = useRef<boolean>(false);
  return (
    <>
      <StyledCanvas
        ref={(ref) => {
          if (initRef.current) return;
          initRef.current = true;
          main.init(ref);
        }}
      />
    </>
  );
};
