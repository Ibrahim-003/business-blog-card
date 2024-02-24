const BusinessCard = ({ content }) => {
  const { businessUrl, overlayUrl, title, body, avatarUrl, author, charge } =
    content;
  return (
    <article className='bg-white rounded-xl max-w-[418px]'>
      {/* Image */}
      <section className='relative'>
        <img
          src={businessUrl}
          alt='hero image'
          className='relative rounded-xl'
        />
        <img
          src={overlayUrl}
          alt='white overlay'
          className='absolute -bottom-px left-0'
        />
      </section>
      {/* content */}
      <section>
        <article className='px-6 sm:px-8 mb-6 flex flex-col gap-4'>
          <h1 className='text-2xl font-semibold text-custom-darkblue'>
            {title}
          </h1>
          <p className='text-softgray'>{body}</p>
        </article>
        <hr />
        <article className='px-6 sm:px-8 my-6 flex items-center gap-3'>
          <div>
            <img
              src={avatarUrl}
              alt='avatar'
              className='w-[40px] rounded-full border-4'
            />
          </div>
          <div>
            <h3 className='text-custom-darkblue font-semibold'>{author}</h3>
            <p className='text-xs font-medium text-softgray'>{charge}</p>
          </div>
        </article>
      </section>
    </article>
  );
};

export default BusinessCard;
