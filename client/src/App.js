import React from 'react';
import {
  ThemeProvider,
  createTheme,
  Arwes,
  Project,
  Words,
  Paragraph,
} from 'arwes';
import styled from 'styled-components';
import { UrlForm } from './Components/UrlForm';

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes animate show>
        <Project
          animate
          header="Create short urls"
        >
          {anim => (
            <>
              <Paragraph>
                <Words
                  animate
                  show={anim.entered}
                >
                  Welcome traveler.
                  You have come a long way to create short urls
                  to the site of your choosing.
                  Be wise, with great power comes great
                  responsibility. Do not use links for
                  malicious sites and/or programs.
                  May the link be with you.
                </Words>
              </Paragraph>
              <UrlForm />
            </>
          )}
        </Project>
        <SectionWrapper>
          <Project
            animate
            header="Most used slugs"
          >
            blah blah
          </Project>
          <Project
            animate
            header="Latest slugs"
          >
            blah blah
          </Project>
        </SectionWrapper>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
