// Utils
// TODO - DRY
const handleInputError = inputInfo => {
  if (!inputInfo) {
    return
  }

  const { error, touched } = inputInfo

  if (error && touched) {
    return (
      <div className="error-wrapper">
        <span className="error">{error}</span>
      </div>
    )
  }
}

const InputSelect = ({ input, elemTag, label, type, meta, options }) => {
  return (
    <>
      <label>{label}</label>

      <select
        name=""
        id=""
        type={type}
        className={`input input--${type}`}
        data-tag={elemTag}
        {...input}
      />
      {handleInputError(meta)}
    </>
  )
}

export default InputSelect
