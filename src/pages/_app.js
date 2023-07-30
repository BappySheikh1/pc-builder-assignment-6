import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"
import store from '@/redux/store'

export default function App({ Component, pageProps }) {
// user the Layout define at the page Level, if available
  const getLayout = Component.getLayout || ((page) => page)
  return (<Provider store={store}>

    <SessionProvider session={pageProps.session}>
      {getLayout(
        <Component {...pageProps} />
      )}
    </SessionProvider>
  </Provider>
  )

}
