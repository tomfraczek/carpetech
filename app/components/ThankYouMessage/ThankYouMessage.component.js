import { ThankYouContainer, Title, Message } from './ThankYouMessage.styles';

export const ThankYouMessage = () => {
  return (
    <ThankYouContainer>
      <Title>Thank you for your enquiry.</Title>
      <Message>Your message has been received, and we will get back to you as soon as possible.</Message>
    </ThankYouContainer>
  );
};
