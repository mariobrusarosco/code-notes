// Styles
import css from './styles.scss'

const Pulse = () => (
  <div className={css.pulseEffect}>
    <svg
      viewBox="0 0 40 40"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      className={css.svg}
    >
      <circle className={css.innerCircle} cx={20} cy={20} r={11} />
      <circle className={css.outerCircle} cx={20} cy={20} r={19} />
    </svg>
  </div>
)

export default Pulse
