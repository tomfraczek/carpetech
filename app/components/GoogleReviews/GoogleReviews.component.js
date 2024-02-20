import { Container } from '@/global/styles';
import { IframeContainer } from './GoogleReviews.styles';

export const GoogleReviews = () => {
  return (
    <Container>
      <IframeContainer>
        <iframe
          src='https://embedsocial.com/api/pro_hashtag/bceb1a38cec2e13af7377fa90f05f4bb26faf078'
          height={350}
          frameborder='0'
        ></iframe>
      </IframeContainer>
    </Container>
  );
};
