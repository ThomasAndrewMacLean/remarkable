import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { extraCols } from '../constants';
import { Layout, SEO, Pijlers, Cases, Hero } from '../components';
import {
  TranslationContext,
  PictureContext,
  SEOContext,
  ExtraContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import { TranslationsType, ImagesType, SEOType } from '../types';

const IndexPage = ({ translations, pics, seo, extraCols }: IndexPageProps) => {
  return (
    <ExtraContext.Provider value={extraCols}>
      <PictureContext.Provider value={pics}>
        <SEOContext.Provider value={seo}>
          <TranslationContext.Provider value={translations}>
            <Layout page="home">
              <Main>
                <SEO seo={seo}></SEO>
                <Hero></Hero>

                <Pijlers></Pijlers>
                <Cases></Cases>
              </Main>
            </Layout>
          </TranslationContext.Provider>
        </SEOContext.Provider>
      </PictureContext.Provider>
    </ExtraContext.Provider>
  );
};

const Main = styled.main`
  /* background: var(--background-dark); */
`;

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  // TODO: map data from customCols => to data context.

  const propsData = {
    translations: data.translations.filter((x) => x.id),
    pics: data.pics.filter((x) => x.id),
    seo: data.seo.filter((x) => x.id),
    extraCols: {},
  };

  extraCols.forEach((col) => {
    //@ts-ignore
    propsData.extraCols[col] = data[col];
  });
  return {
    props: propsData,
  };
};

type IndexPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  extraCols: any;
};

export default IndexPage;
