const defaultClass = `
  w-full 
  flex 
  justify-center 
  py-2 
  px-4 
  mt-8 
  border 
  border-transparent 
  rounded-md 
  shadow-sm 
  text-sm 
  font-medium 
  text-white
`;

const enbledClass = `
  bg-blue-900 
  hover:bg-blue-800 
  active:bg-blue-700
`;

const disabledClass = `
  cursor-not-allowed 
  bg-gray-400
`;

const Button = ({ ...props }) => {
  return (
    <>
      <button
        {...props}
        className={`${defaultClass} ${props.disabled ? disabledClass : enbledClass}`}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
