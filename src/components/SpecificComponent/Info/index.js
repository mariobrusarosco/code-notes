// Styles
import css from './styles.scss'

const Info = ({ label, content, suffix, formatter }) => {
  if (!content) return null

  let finalContent = content

  if (formatter) {
    finalContent = formatter(finalContent)
  }

  if (suffix) {
    finalContent = `${finalContent}${suffix}`
  }

  return (
    <li className={css.info}>
      <span className={css.infoLabel}>{label}: </span>
      <span className={css.infoValue}>{finalContent}</span>
    </li>
  )
}

export default Info
