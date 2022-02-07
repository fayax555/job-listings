import Card from 'components/Card'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <h1 className='visually-hidden'>Job Listings</h1>
      </header>
      <main className={styles.main}>
        <Card />
      </main>
    </>
  )
}

export default Home
