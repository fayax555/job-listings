import { Dispatch, SetStateAction } from 'react'

interface Props {
  filterTags: string[]
  setFilterTags: Dispatch<SetStateAction<string[]>>
}

const FilterTagList = ({ filterTags, setFilterTags }: Props) => {
  return (
    <ul>
      {filterTags.map((item) => (
        <li key={item}>
          <div>{item}</div>
          <button
            onClick={() => setFilterTags(filterTags.filter((c) => c !== item))}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  )
}

export default FilterTagList
