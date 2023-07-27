import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import Modal from 'components/organisms/Modal/Modal';
import { Button } from 'components/atoms/Button/Button';
const Root = () => {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          {isModalOpen ? <Modal handleClose={() => setModalState(false)} /> : null}
          <Wrapper>
            <Button
              onClick={() => {
                setModalState(true);
              }}
            >
              Open Modal
            </Button>
            <Routes>
              <Route exact path="/" element={<Navigate to="/group" />} />
              <Route path="/group/:id?" element={<Dashboard />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
