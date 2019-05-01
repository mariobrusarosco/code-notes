// Utils
const handleInputError = inputInfo => {
  if (!inputInfo) {
    return
  }

  const { error, touched } = inputInfo

  if (error && touched) {
    return (
      <div className="error-wrapper">
        <span className="error">{ error }</span>
      </div>
    )
  }
}

const InputText = ({ input, inputId, label, type, meta }) => {

  return (
    <>
      <label>{label}</label>
      <input
        data-id={inputId}
        type={type}
        className={`input input--${type}`}
        {...input}
      />
      { handleInputError(meta) }
    </>
  )
}

export default InputText
