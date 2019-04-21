const InputText = ({ input, label, type }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        className={`input input--${type}`}
        onChange={input.onChange}
      />
    </>
  )
}

export default InputText
