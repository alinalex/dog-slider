import React, { useState, useEffect } from 'react';
import Slider from './components/Slider/Slider';
import { Status, Dog } from './data/types';
import { getDogoResult } from './api/dogApi';
import { THEME } from './data/constants';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { StyledMain } from './components/styles/Main.styled';
import { StyledBlank } from './components/styles/Blank.styled';
import { StyledSliderWrapper } from './components/styles/SliderWrapper.styled';

function App() {

  const [status, setStatus] = useState<Status>('loading');
  const [sliderData, setSliderData] = useState<Dog[]>([]);

  useEffect(() => {

    getDogoResult().then(({ status, data }) => {
      setStatus(status);
      setSliderData(data);
    });

  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <>
        <GlobalStyles />
        <StyledMain>
          <StyledBlank />
          <StyledSliderWrapper>
            <Slider status={status} data={sliderData} />
          </StyledSliderWrapper>
        </StyledMain>
      </>
    </ThemeProvider>
  );
}

export default App;
