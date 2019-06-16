const DefaultToast = () => {
  return (
    <div className="ui standard modal visible active">
      <p className="header">{title}</p>
      <div className="content">{content}</div>
      <div className="actions">
        <button className="ui button primary">close</button>
      </div>
    </div>
  )
}

export default DefaultToast
