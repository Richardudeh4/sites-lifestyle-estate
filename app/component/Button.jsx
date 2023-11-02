const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    
  }) => {
    return (
      <button
        className={` gap-2 px-8 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        }`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 bg-white w-5 h-5'
          />
        )}
      </button>
    );
  };
  
  export default Button;
  