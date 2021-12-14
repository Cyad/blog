import { IconProps } from '../typeDate'

const Search = (props: IconProps) => {

    const { color = 'var(--global-color)' } = props

    return (
        <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" 
            stroke={color}
            fill="none"
            strokeWidth="2" 
            fillRule="evenodd" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
    )
}

export default Search