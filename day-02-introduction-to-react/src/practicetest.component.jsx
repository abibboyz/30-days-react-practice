export const PracticeText = () => {

  const welcome = 'Welcome to 30 Days Of React'
  const title = 'Getting Started React'
  const subtitle = 'JavaScript Library'
  const author = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
  }
  const date = 'Oct 2, 2020'
  const copyRight = 'Copyright 2020'
  const footer = (
    <footer><div className='footer-wrapper'><p>{copyRight}</p></div></footer>
  )


  return (
    <div>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <h4>{`${author.firstName} ${author.lastName}`}</h4>
      <h5>{date}</h5>
      <h6>{footer}</h6>
    </div>
  )
};