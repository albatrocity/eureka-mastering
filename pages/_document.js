// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Palanquin:100|Montserrat:900" rel="stylesheet"/>
          {styleTags}
        </Head>
        <body className="body" style={{margin: 0, padding: 0}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
