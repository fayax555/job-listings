import { Dispatch, SetStateAction } from 'react'
import styles from 'styles/FilterTagList.module.scss'

interface Props {
  filterTags: string[]
  setFilterTags: Dispatch<SetStateAction<string[]>>
}

const FilterTagList = ({ filterTags, setFilterTags }: Props) => {
  if (!filterTags.length) return null

  return (
    <div className={styles.wrapper}>
      {filterTags.map((item) => (
        <div className={styles.button_wrapper} key={item}>
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
        </div>
      ))}
      <button onClick={() => setFilterTags([])} className={styles.clear_button}>
        Clear
      </button>
    </div>
  )
}

export default FilterTagList
