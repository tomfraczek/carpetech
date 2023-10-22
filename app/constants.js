import image1 from '@/public/images/home-slider/slider1.jpeg';
import image2 from '@/public/images/home-slider/slider2.jpeg';
import image3 from '@/public/images/home-slider/slider3.jpeg';
import year from '@/public/images/year.png';
import family from '@/public/images/family.jpeg';
import pet from '@/public/images/pet.jpeg';

export const HOMEPAGE_SLIDER_DATA = [
  {
    header: 'Chem-Dry Milton Keynes',
    description: 'We Clean Carpets, Upholstery, Curtains & Leather',
    img: image1,
  },
  {
    header: 'Chem-Dry Milton Keynes',
    description: 'Carpet & Upholstery Cleaning Experts',
    img: image2,
  },
  {
    header: 'Chem-Dry Milton Keynes',
    description: 'Hygienic Cleaning of Carpets & Furnishings',
    img: image3,
  },
];

import Carpet from '@/public/images/services/1.png';
import Upholstery from '@/public/images/services/2.png';
import Leather from '@/public/images/services/3.png';
import Rug from '@/public/images/services/4.png';
import Tile from '@/public/images/services/5.png';
import Stain from '@/public/images/services/6.png';
import Fire from '@/public/images/services/7.png';
import Comercial from '@/public/images/services/8.png';

export const SERVICES_DATA = [
  {
    header: 'Our Professional Cleaning Services:',
    subheader: 'For the Milton Keynes area',
  },
  {
    image: Carpet,
    title: 'Carpet',
    category: 'Cleaning',
    url: 'https://www.chemdrymiltonkeynes.co.uk/carpet-cleaning/',
  },
  {
    image: Upholstery,
    title: 'Upholstery',
    category: 'Cleaning',
    url: 'https://www.chemdrymiltonkeynes.co.uk/carpet-cleaning/',
  },
  {
    image: Leather,
    title: 'Leather',
    category: 'Cleaning',
    url: 'https://www.chemdrymiltonkeynes.co.uk/carpet-cleaning/',
  },
  {
    image: Rug,
    title: 'Rug',
    category: 'Cleaning',
    url: 'https://www.chemdrymiltonkeynes.co.uk/carpet-cleaning/',
  },
  {
    image: Tile,
    title: 'Tile & Grout',
    category: 'Cleaning',
    url: 'https://www.chemdrymiltonkeynes.co.uk/carpet-cleaning/',
  },
  {
    image: Stain,
    title: 'Stain',
    category: 'Removal',
    url: 'https://www.chemdrymiltonkeynes.co.uk/carpet-cleaning/',
  },
  {
    image: Fire,
    title: 'Fire & Flood',
    category: 'Restoration',
    url: 'https://www.chemdrymiltonkeynes.co.uk/carpet-cleaning/',
  },
  {
    image: Comercial,
    title: 'Comercial',
    category: 'Cleaning',
    url: 'https://www.chemdrymiltonkeynes.co.uk/carpet-cleaning/',
  },
];

export const HOMEPAGE_CELEBRATION_SECTION = [
  {
    icon: year,
    header: 'Chem-Dry Milton Keynes - Professional Carpet Cleaners',
    subheader: 'Proudly serving the local area for over 24 years',
    paragraphs: [
      'We have been cleaning carpets, upholstery, curtains and leather around Milton Keynes since 1998, with over 7,000 local satisﬁed customers.',
      'We have a mission to deliver the greatest range of carpet and upholstery and fire and floor restoration services. We offer our customers a one-stop solution for all of their cleaning requirements.',
      'We are your local experts to call when you need an advanced cleaning services. You can rely on a cleaning service carried out by qualified and dedicated expert carpet cleaners.',
    ],
    image: family,
  },
];

export const HOMEPAGE_REPUTATION_SECTION = [
  {
    header: 'Our Reputation',
    subheader: 'Chem-Dry Milton Keynes has built a sterling reputation for providing outstanding cleaning services.',
    paragraphs: [
      'Our loyal customers in the Milton Keynes area come back to us time & time again, with much of our business gained through word-of-mouth or repeat business.',
      'We commit ourselves to the requirements and high expectations of our customers. The secret of our success lies with our complete dedication and attention to detail.',
      'All our technicians are DBS/CRB checked. Some of our products are Green & Clean certified, accredited to the Carpet and Rug Institute. We are also accredited with ISO 9001:2000.',
    ],
    image: pet,
  },
];
