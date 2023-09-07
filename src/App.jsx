const books = [
  {
    writer: "Akshat Gupta",
    title: "The Hidden Hindu",
    img: "/assets/the-hidden-hindu.jpg",
  },
  {
    writer: "A.C. Bhaktivendanta Swami Prabhupada",
    title: "Bhagwat Gita",
    img: "/assets/bhagwat-gita.jpg",
  },
  {
    writer: "Faf Du Plessis",
    title: "Faf Through Fire",
    img: "/assets/faf.jpg",
  },
  {
    writer: "Robert T. Kiyosaki",
    title: "Rich Dad Poor Dad",
    img: "/assets/rich-dad-poor-dad.jpg",
  },
  {
    writer: "Francesc Miralles",
    title: "Ikigai",
    img: "/assets/ikigai.jpg",
  },
  {
    writer: "Robert Greene",
    title: "The 48 Laws of Power",
    img: "/assets/laws-of-power.jpg",
  },
  {
    writer: "James Clear",
    title: "Atomic Habits",
    img: "/assets/atomic-habits.jpg",
  },
]

const BookList = () => {
  return (
    <div className="booklist">
      {books.map((data) => {
        const { img, writer, title } = data
        // eslint-disable-next-line react/jsx-key
        return <Book image={img} writer={writer} title={title} />
      })}
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Book = ({ image, writer, title }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{writer}</h4>
    </article>
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
