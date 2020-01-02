// Vendors
import { pathOr } from 'ramda'

const initialState = {
  active: false,
  src: '',
  alt: 'Imagem'
}

const lightboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LIGHTBOX':
      const src = pathOr(state.src, ['src'], action)
      const alt = pathOr(state.alt, ['alt'], action)
      const active = pathOr(state.active, ['active'], action)

      return { ...state, src, alt, active }

    default:
      return state
  }
}

export default lightboxReducer
