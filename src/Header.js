function Header ({bigWindow}) {
  return (
    <div className="header-wrapper" >
      <h1>Hi, my name is Wyatt Napier</h1>
      <p>I am a CS major at Boston University, but that's not all.</p>
      <p>Browse through the photos {bigWindow ? "on the right" : "below"} to learn a bit more about me.</p>
    </div>
  )
}

export default Header;