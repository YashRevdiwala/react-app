const wrt = "Akshat Gupta"
const tle = "The Hidden Hindu"
const img =
  "https://images-eu.ssl-images-amazon.com/images/I/81ZI8RyyynL._AC_UL600_SR600,400_.jpg"

const BookList = () => {
  return (
    <div className="booklist">
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
      <Book image={img} writer={wrt} title={tle} />
    </div>
  )
}

const Book = (props) => {
  return (
    <div className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.writer}</h4>
    </div>
  )
}

// const Image = () => (
//   <img
//     src="https://images-eu.ssl-images-amazon.com/images/I/81ZI8RyyynL._AC_UL600_SR600,400_.jpg"
//     alt="The Hidden Hindu"
//   />
// )
// const Title = () => <h2>The Hidden Hindu</h2>
// const Writer = () => <h4>Akshat Gupta</h4>

export default BookList

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App />)
