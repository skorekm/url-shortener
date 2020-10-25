import React, {useState, useEffect} from 'react';
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
import { List } from './Components/List';
import axios from 'axios';

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
`;

const App = () => {
  const [mostUsedSlugs, setMostUsedSlugs] = useState([]);
  const [latestSlugs, setLatestSlugs] = useState([]);
  const fetchMostUsedSlugs = async () => {
    await axios.get('/api/latest').then(res => {
      setMostUsedSlugs(res.data.data);
    });
  }
  const fetchLatestSlugs = async () => {
    await axios.get('/api/most-used').then(res => {
      setLatestSlugs(res.data.data);
    })
  }
  useEffect(() => {
    //TODO: figure out refresh on url submit
    fetchMostUsedSlugs();
    fetchLatestSlugs();
  }, [])
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
          <List 
            header="most used slugs"
            list={mostUsedSlugs}
          />
          <List
            header="latest slugs"
            list={latestSlugs}
          />
        </SectionWrapper>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
