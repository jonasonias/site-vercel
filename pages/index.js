import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>MAIN</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para você"
        ></meta>
      </Head>
      <h1 className={styles.title}>Página principal</h1>
      <Image
        src="/images/img1.jpg" 
        width={250}
        height={200}
        alt='Imagem Teste'
      />
    </>
  )
}