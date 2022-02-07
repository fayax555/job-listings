import { Dispatch, SetStateAction } from 'react'
import styles from 'styles/TagList.module.scss'

interface Props {
  tags: string[]
  setFilterTags: Dispatch<SetStateAction<string[]>>
}

const TagList = ({ tags, setFilterTags }: Props) => {
  return (
    <ul className={styles.tags}>
      {tags.map((item) => (
        <li
          key={item}
          onClick={() => setFilterTags((curr) => [...new Set([...curr, item])])}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TagList
