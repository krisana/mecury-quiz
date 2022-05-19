import "react-datepicker/dist/react-datepicker.css";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap daterangepicker
import "bootstrap-daterangepicker/daterangepicker.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Fontawesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// globals style
import '../styles/globals.css'

import { SessionProvider } from "next-auth/react"

config.autoAddCss = false

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
