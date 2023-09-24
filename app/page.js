import Image from 'next/image';

import { Carousel } from '@/app/components/Carousel';
import { DATA } from './constants';

import year from '@/public/images/year.png';
import family from '@/public/images/family.jpeg';

export default function Page() {
  return (
    <>
      <Carousel data={DATA} />
      <div>
        <div>
          <Image src={year} alt='year logo' />
          <h1>Chem-Dry Milton Keynes - Professional Carpet Cleaners</h1>
          <h2>Proudly serving the local area for over 24 years</h2>
          <p>
            We have been cleaning carpets, upholstery, curtains and leather around Milton Keynes since 1998, with over
            7,000 local satisﬁed customers.
          </p>
          <p>
            We have a mission to deliver the greatest range of carpet and upholstery and fire and floor restoration
            services. We offer our customers a one-stop solution for all of their cleaning requirements.
          </p>
          <p>
            We are your local experts to call when you need an advanced cleaning services. You can rely on a cleaning
            service carried out by qualified and dedicated expert carpet cleaners.
          </p>
        </div>
        <div>
          <Image src={family} alt='family logo' />
        </div>
      </div>
    </>
  );
}
