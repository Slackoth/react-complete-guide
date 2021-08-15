import '../styles/globals.css'

/**
 * Object destructuring in parameters 
 * const func = o => {
    var param1 = o.param1;
    var param2 = o.param2;
 }
 */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
