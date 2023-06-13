import Navbar from './Navbar'
import Footer from './Footer'

//import styles from '../styles/MainContainer.module.css'
//className={styles.container}

export default function Contact({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div> 
      <Footer />
    </>
  )
}