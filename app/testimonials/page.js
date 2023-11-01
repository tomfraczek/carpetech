'use client';
import styled from 'styled-components';
import { ReviewCard } from '../components/ReviewCard';
import { REVIEW_DATA } from '../components/ReviewCards/constants';
import { TextBar } from '../components/TextBar';
import { CONTENT_BAR } from './constants';
import { Container } from '@/global/styles';

const ReviewContainer = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  & > div {
    width: 48.5%;

    & > div {
      margin: auto;
      margin-bottom: 25px;
      width: 100%;
    }
  }
`;

export default function Page() {
  return (
    <>
      <TextBar data={CONTENT_BAR} />
      <Container>
        <ReviewContainer>
          {REVIEW_DATA.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </ReviewContainer>
      </Container>
    </>
  );
}
