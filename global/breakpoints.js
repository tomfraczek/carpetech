const getWindowWidth = () => window.innerWidth;

export const breakpoints = {
  mobile: '780px',
  tablet: '992px',
  laptop: '1200px',
  // desktop: '1920px',
};

export const device = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
};

export const isMobile = () => {
  const width = getWindowWidth();
  return width < 768;
};

export const isTablet = () => {
  const width = getWindowWidth();
  return width >= breakpoints.tablet && width < breakpoints.desktop;
};

export const isDesktop = () => {
  const width = getWindowWidth();
  return width >= breakpoints.desktop;
};
