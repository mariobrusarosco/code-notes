// Styles
import css from './styles.scss'

// Components
import GoBack from 'components/GoBack'

const PageTwo = () => {
  return (
    <div className={css.pageOne}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Page Two !!!</h2>
        <GoBack />
      </div>
    </div>
  )
}

export default PageTwo
