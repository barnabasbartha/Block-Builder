import { MainService } from '@frontend/app/main/main.service';
import { Container } from 'inversify';
import { useState } from 'react';
import { styled } from 'styled-components';

const StyledCanvas = styled.canvas`
  width: 100vw;
  height: 100vh;
`;

export const App = () => {
  const [main] = useState(() => {
    const container = new Container({
      defaultScope: 'Singleton',
      autoBindInjectable: true,
      skipBaseClassChecks: true,
    });
    return container.get(MainService);
  });
  return (
    <>
      <StyledCanvas ref={(ref) => main.init(ref)} />
    </>
  );
};
