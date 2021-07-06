import PropTypes from 'prop-types'
import '@styles/estilosGlobales.css'
import '@styles/normalize.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
}
