const defaultClass = `
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

const Button = ({ ...props }) => {
  return (
    <>
      <button
        {...props}
        className={`
          ${props.className} 
          ${defaultClass} 
          ${props.full ? 'w-full' : ''} 
          ${props.variant == 'primary' ? 'bg-blue-900 hover:bg-blue-800 active:bg-blue-700' : ''} 
          ${props.variant == 'secondary' ? 'bg-gray-500 hover:bg-gray-400 active:bg-gray-300' : ''} 
          ${props.variant == 'danger' ? 'bg-red-900 hover:bg-red-800 active:bg-red-700' : ''} 
          ${props.disabled ? 'cursor-not-allowed bg-gray-300' : ''}
        `}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
