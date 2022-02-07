import Image from 'next/image'
import styles from 'styles/Card.module.scss'
import Tags from './Tags'

interface Props {}

const Card = () => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image src='/images/photosnap.svg' layout='fill' alt='' />
      </div>
      <div className={styles.first}>
        <p>Photosnap</p>
        <p>NEW!</p>
        <p>FEATURED</p>
      </div>
      <h2>Senior Frontend Developer</h2>
      <div className={styles.info}>
        <p>1d ago</p>
        <p>Full Time</p>
        <p>USA only</p>
      </div>
      <Tags />
    </article>
  )
}

export default Card
