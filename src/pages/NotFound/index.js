// Components
import Image from 'components/Image'
import Pulse from 'components/Loaders/Pulse'

// Styles
import css from './styles.scss'

// Constants
const { ROOT_URL } = APP

const NotFound = ({ history }) => {
  const goToHome = () => history.push(ROOT_URL)

  return (
    <section className={css.notFound}>
      <div className={css.wrapper}>
        <p className={css.ops}>Ops!!</p>
        <p className={css.description}>Não foi possível encontrar esta página</p>

        <button onClick={goToHome} className={css.goToHomeBtn}>
          Voltar para a Página Inicial
        </button>

        <div className={css.pulseWrapper}>
          <Pulse />
        </div>
      </div>
    </section>
  )
}

export default NotFound
