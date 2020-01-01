// Styles
import css from './styles.scss'

// Components
import GoBack from 'components/GoBack'

const PageOne = () => {
  return (
    <div className={css.pageOne}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Page One !!!</h2>
        <GoBack />
      </div>
    </div>
  )
}

export default PageOne
