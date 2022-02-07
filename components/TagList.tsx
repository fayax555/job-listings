import styles from 'styles/TagList.module.scss'

interface Props {
  tags: string[]
}

const TagList = ({ tags }: Props) => {
  return (
    <ul className={styles.tags}>
      {tags.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default TagList
