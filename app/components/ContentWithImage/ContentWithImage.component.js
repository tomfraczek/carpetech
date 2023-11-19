'use client';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ContentWithImageContainer, ContentLeft, ContentRight, LogoContainer } from './ContentWithImage.styles';
import { ReviewCards } from '@/app/components/ReviewCards';

export const ContentWithImage = ({ addReviewCards, content, icon, image, imagePosition, backgroundColour }) => (
  <>
    <ContentWithImageContainer $reverse={imagePosition} $background={backgroundColour?.value}>
      <ContentLeft>
        <>{content && documentToReactComponents(content.json)}</>
        {icon && (
          <LogoContainer>
            <Image src={icon.url} alt={icon.title} width={icon.width} height={icon.height} />
          </LogoContainer>
        )}
        {addReviewCards && <ReviewCards />}
      </ContentLeft>
      <ContentRight>
        {image && <Image src={image.url} alt={image.title} width={image.width} height={image.height} />}
      </ContentRight>
    </ContentWithImageContainer>
  </>
);
