interface InputProps {
  id: string
  type: string
  name: string
  placeholder: string
  value: string
  disabled: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className: string
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  placeholder,
  value,
  disabled,
  onChange,
}) => {
  return (
    <input
      autoComplete="on"
      id={id}
      name={name}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border-2 border-neutral-800 bg-black p-2 text-base outline-none transition focus:border-2 focus:border-sky-500 disabled:cursor-not-allowed disabled:bg-neutral-900 disabled:opacity-70"
    />
  )
}

export default Input
