import { Dispatch, SetStateAction } from 'react'
import styles from 'styles/FilterTagList.module.scss'

interface Props {
  filterTags: string[]
  setFilterTags: Dispatch<SetStateAction<string[]>>
}

const FilterTagList = ({ filterTags, setFilterTags }: Props) => {
  if (!filterTags.length) return null

  return (
    <ul className={styles.wrapper}>
      {filterTags.map((item) => (
        <li key={item}>
          <div>{item}</div>
          <button
            onClick={() => setFilterTags(filterTags.filter((f) => f !== item))}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
              <path
                fill='#FFF'
                fillRule='evenodd'
                d='M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z'
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default FilterTagList
