import Head from 'next/head'

import { useTranslation } from '../lib/useTranslation'

const Meta: React.FC = () => {
  const t = useTranslation()
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{t('common:appTitle')}</title>
      <meta name="theme-color" content="rgb(20,20,20)" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Arpit Bharti" />
      <meta name="description" content="Pleo Expense App" />
      <link rel="shortcut icon" href="/images/pleo.ico" />
      <link rel="stylesheet" type="text/css" href="/styles/reset.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Mono|Playfair+Display&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

export default Meta
