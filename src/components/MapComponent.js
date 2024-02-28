import React from 'react';

function MapComponent() {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1607.2079915501455!2d38.73597253611203!3d9.025202336714778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635560fd1e1e295%3A0x2a00f9940e3d3e88!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2saf!4v1646045908632!5m2!1sen!2saf';

  return (
    <div className='m-2'>
      <div className='relative w-full h-96 flex justify-center my-10'>
        <div className='mb-6 lg:mb-0 shrink w-full lg:w-[50%] lg:pr-3 flex my-5'>
          <iframe
            title='map'
            className='h-56 md:h-full w-full border-0 rounded-md'
            allowFullScreen=''
            loading='lazy'
            src={mapUrl}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
