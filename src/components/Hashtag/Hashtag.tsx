const Hashtag = ({color = '#979797'}: {color?: string}) => {
  return (
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="20" width="2" height="16" transform="rotate(-180 9 20)" fill="#33363F"/>
        <rect x="17" y="20" width="2" height="16" transform="rotate(-180 17 20)" fill="#33363F"/>
        <path d="M4 9L4 7L20 7L20 9L4 9Z" fill="#33363F"/>
        <rect x="4" y="17" width="2" height="16" transform="rotate(-90 4 17)" fill="#33363F"/>
      </svg>
    </div>
  )
}

export default Hashtag