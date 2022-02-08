import { Dispatch, SetStateAction } from 'react'
import styles from 'styles/TagList.module.scss'

interface Props {
  tags: string[]
  setFilterTags: Dispatch<SetStateAction<string[]>>
}

const TagList = ({ tags, setFilterTags }: Props) => {
  return (
    <div className={styles.tags}>
      {tags.map((item) => (
        <button
          key={item}
          onClick={() => setFilterTags((curr) => [...new Set([...curr, item])])}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default TagList
