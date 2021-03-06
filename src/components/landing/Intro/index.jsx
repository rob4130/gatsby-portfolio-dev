import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Thanks for your interest,</h1>
          <h4>I'm an Ecommerce specialist focused on JAMStack technologies</h4>
          <Button as={AnchorLink} href="#contact">
            Message Me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Site speed first" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
