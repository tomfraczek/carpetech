export const GoogleMap = () => {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1276567.7816152957!2d-1.153691!3d51.324067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d22c935e46253f%3A0x5d7cac90b7906e16!2sCarpetech%20Ltd.!5e0!3m2!1spl!2spl!4v1706442818846!5m2!1spl!2spl';
  return (
    <iframe
      src={mapSrc}
      width='100%'
      height='450'
      style={{ border: 0 }}
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  );
};
