export const MENU = [
  {
    title: 'Home',
    dropdown: false,
    icon: true,
    url: '/',
  },
  {
    title: 'Carpets',
    dropdown: false,
    url: '/carpet-cleaning',
  },
  {
    title: 'Upholstery',
    dropdown: false,
    url: '/upholstery-cleaning',
  },
  {
    title: 'Leather',
    dropdown: false,
    url: '/leather-cleaning',
    hidden: true,
  },
  {
    title: 'Rugs',
    dropdown: false,
    url: '/rug-cleaning',
    hidden: true,
  },
  {
    title: 'Tiles & Grout',
    dropdown: false,
    url: '/tile-grout-cleaning',
    hidden: true,
  },
  {
    title: 'Domestic Services',
    url: '/domestic-services',
    hidden: true,
    dropdown: [
      {
        title: 'Rental Property Cleaning',
        url: '/rental-property-cleaning',
      },
      {
        title: 'Curtain Cleaning',
        url: '/curtain-cleaning',
      },
      {
        title: 'Fire & Flood Restoration',
        dropdown: false,
        url: '/fire-flood-restoration',
      },
      {
        title: 'Cleaning Products',
        dropdown: false,
        url: '/cleaning-products',
      },
      {
        title: 'Stain Removal',
        dropdown: false,
        url: '/cleaning-products',
      },
      {
        title: 'Stain Protection',
        dropdown: false,
        url: '/cleaning-products',
      },
    ],
  },
  {
    title: 'Commercial',
    url: '/commercial-cleaning',
    hidden: true,
    dropdown: [
      {
        title: 'Carpet & Floor Cleaning',
        url: '/commercial-carpet-cleaning',
      },
      {
        title: 'Upholstery Cleaning',
        url: '/commercial-upholstery-cleaning',
      },
    ],
  },
];
