import { colors } from '@/global/colors';
import styled from 'styled-components';

export const FooterContainer = styled.section`
  padding: 60px 0 30px;
  background-color: ${colors.darkBlue};
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 33.3333%;
  margin-bottom: 30px;
  padding-right: 15px;
  padding-left: 15px;

  > a {
    color: ${colors.lightPurple};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    margin: 0;
    font-size: 18px;
    padding: 0 0 5px;

    img {
      transform: rotate(-90deg);
      filter: invert(50%) sepia(12%) saturate(2052%) hue-rotate(247deg) brightness(95%) contrast(95%);
    }

    &:hover {
      color: ${colors.hoverPurple};
    }

    &:hover img {
      filter: invert(39%) sepia(44%) saturate(656%) hue-rotate(248deg) brightness(90%) contrast(90%);
    }
  }
`;

export const Header = styled.h6`
  font-size: 1.5em;
  padding-bottom: 5px;
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 1.1;
  color: ${colors.white};
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: baseline;
  /* justify-content: ; */
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PhoneNumber = styled.div`
  a {
    font-size: 30px;
    font-weight: bold;
    margin-top: 21px;
    margin-bottom: 10.5px;
    margin-left: 7px;
    line-height: 1.1;
    color: ${colors.lightPurple};
    transition: all 0.2s ease;

    &:hover {
      color: ${colors.hoverPurple};
    }
  }
`;

export const EmailAddress = styled.div`
  a {
    margin-left: 7px;
    color: ${colors.lightPurple};
    transition: all 0.2s ease;

    &:hover {
      color: ${colors.hoverPurple};
    }
  }
`;

export const WhiteText = styled.p`
  color: ${colors.white};
`;

export const RgisteredContainer = styled.div`
  margin: 10.5px 0;
`;

export const SocialMediaContainer = styled.div`
  margin: 10.5px 0;
  display: flex;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    margin: 0 5px;
    transition: all 0.2s ease;

    &:hover {
      filter: invert(39%) sepia(44%) saturate(656%) hue-rotate(248deg) brightness(90%) contrast(90%);
    }
  }
`;

export const StarsWrapper = styled.div`
  &:before {
    content: '★★★★★';
    font-size: 1.4em;
    line-height: 0.8;
    margin-bottom: 0.2em;
    color: #bd9337;
    display: block;
    letter-spacing: 2px;
  }
`;

export const ReviewContainer = styled.div`
  text-align: center;
  margin-top: 1em;
  padding: 0.5em 0.7em;
  font-size: 18px;
  border: 1px solid #bd9337;
  line-height: 1.2;
  transition: all 0.2s ease;
  width: 100%;
`;
