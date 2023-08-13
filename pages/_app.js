import '../styles/globals.css'

//모든 페이지에서 하는 공통 설정을 _app.js에서 진행


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
