const firstBook = {
  writer: "Akshat Gupta",
  title: "The Hidden Hindu",
  img: "/the-hidden-hindu.jpg",
}
const secondBook = {
  writer: "A.C. Bhaktivendanta Swami Prabhupada",
  title: "Bhagwat Gita",
  img: "/bhagwat-gita.jpg",
}
const thirdBook = {
  writer: "Faf Du Plessis",
  title: "Faf Through Fire",
  img: "/faf.jpg",
}
const fourthBook = {
  writer: "Robert T. Kiyosaki",
  title: "Rich Dad Poor Dad",
  img: "/rich-dad-poor-dad.jpg",
}
const fifthBook = {
  writer: "Francesc Miralles",
  title: "Ikigai",
  img: "/ikigai.jpg",
}
const sixthBook = {
  writer: "Robert Greene",
  title: "The 48 Laws of Power",
  img: "/laws-of-power.jpg",
}
const seventhBook = {
  writer: "James Clear",
  title: "Atomic Habits",
  img: "/atomic-habits.jpg",
}

const BookList = () => {
  return (
    <div className="booklist">
      <Book
        image={firstBook.img}
        writer={firstBook.writer}
        title={firstBook.title}
      />
      <Book
        image={secondBook.img}
        writer={secondBook.writer}
        title={secondBook.title}
      />
      <Book
        image={thirdBook.img}
        writer={thirdBook.writer}
        title={thirdBook.title}
      />
      <Book
        image={fourthBook.img}
        writer={fourthBook.writer}
        title={fourthBook.title}
      />
      <Book
        image={fifthBook.img}
        writer={fifthBook.writer}
        title={fifthBook.title}
      />
      <Book
        image={sixthBook.img}
        writer={sixthBook.writer}
        title={sixthBook.title}
      />
      <Book
        image={seventhBook.img}
        writer={seventhBook.writer}
        title={seventhBook.title}
      />
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
