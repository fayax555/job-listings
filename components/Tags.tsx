import styles from 'styles/Tags.module.scss'

interface Props {}

const Tags = () => {
  return (
    <ul className={styles.tags}>
      <li>Frontend</li>
      <li>Senior</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  )
}

export default Tags
