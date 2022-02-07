import Image from 'next/image'
import styles from 'styles/Card.module.scss'
import { Data } from 'types'
import TagList from './TagList'

const Card = (d: Data) => {
  return (
    <article className={`${styles.card} /*${styles.border_none}*/`}>
      <div className={styles.image}>
        <Image src={d.logo} layout='fill' alt='' />
      </div>
      <div className={styles.first}>
        <p>{d.company}</p>
        {d.new && <p>NEW!</p>}
        {d.featured && <p>FEATURED</p>}
      </div>
      <h2>{d.position}</h2>
      <div className={styles.info}>
        <p>{d.postedAt}</p>
        <p>{d.contract}</p>
        <p>{d.location}</p>
      </div>
      <TagList tags={[d.role, d.level, ...d.languages, ...d.tools]} />
    </article>
  )
}

export default Card
