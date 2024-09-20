type HeaderProp = {
    title: string
}

const Header = (prop: HeaderProp) => {
  return (
    <div>
        {prop.title}
    </div>
  )
}

export default Header