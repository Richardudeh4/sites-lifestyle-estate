import  Button  from "../component/Button";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className=' flex justify-between items-center max-lg:flex-col py-10 gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md text-gray-400 md:text-white font-palanquin font-bold'>
        Subscribe to our Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex justify-between bg-white items-center max-sm:flex-col p-2.5 sm:border sm:border-slate-gray'>
        <input type='text' placeholder='youremail123@gmail.com' className='input p-0 outline-none bg-white text-gray-300' />
        <div className='flex max-sm:justify-end justify-end items-center font-semibold bg-[#0F372F] border-none text-white max-sm:w-full'>
          <Button label='Subscribe' fullWidth backgroundColor ="#0F372F" textColor="white" borderColor="white" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
