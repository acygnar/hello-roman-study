import React, { useEffect, useState } from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSections.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = '0153bc96172e2897c97740812913a4';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
            allArticles {
                id
                title
                category
                content
                image{
                 url
               }
             }
           }`,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then((response) => {
        setArticles(response.data.data.allArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => {
          return (
            <ArticleWrapper key={id}>
              <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{content}</p>
                {image ? <img src={image.url} alt={title} /> : null}
              </ContentWrapper>
              <Button isBig>Read more</Button>
            </ArticleWrapper>
          );
        })
      ) : (
        <TitleWrapper>Loading...</TitleWrapper>
      )}
    </Wrapper>
  );
};

export default NewsSection;
