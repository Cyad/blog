import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store'
import '../styles/global.css'
import '../styles/vars.css'
import '../styles/animation.min.css'


function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

const wrapper = createWrapper(() => store)

export default wrapper.withRedux(App)