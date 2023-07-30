import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  return (<Provider store={store}>

    <SessionProvider session={pageProps.session}>
      {getLayout(
        <Component {...pageProps} />
      )}
    </SessionProvider>
  </Provider>
  )

}
