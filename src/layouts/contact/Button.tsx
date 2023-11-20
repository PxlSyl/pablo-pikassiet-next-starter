interface ButtonProps {
  label: string
  onClick?: () => void
  secondary?: boolean
  disabled?: boolean
  fullWidth?: boolean
  large?: boolean
  outline?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  disabled,
  large,
  outline,
  onClick,
}) => {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`
          ${fullWidth ? 'w-full' : 'w-auto'}
          ${large ? 'py-3 px-5 text-xl' : 'py-2 px-4 text-md'}
          ${
            secondary
              ? 'bg-white text-black border-black'
              : 'bg-blue-500 text-white border-purple-500'
          }
          ${outline ? 'bg-transparent border-white text-white' : ''}
          ${disabled ? 'opacity-70 cursor-not-allowed' : ''}
          rounded-full font-semibold border-2 transition hover:opacity-80 
      `}
    >
      {label}
    </button>
  )
}

export default Button
