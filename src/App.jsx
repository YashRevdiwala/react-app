/* eslint-disable react/prop-types */
const books = [
  {
    writer: "Akshat Gupta",
    title: "The Hidden Hindu",
    img: "/assets/the-hidden-hindu.jpg",
    id: 1,
  },
  {
    writer: "A.C. Bhaktivendanta Swami Prabhupada",
    title: "Bhagwat Gita",
    img: "/assets/bhagwat-gita.jpg",
    id: 2,
  },
  {
    writer: "Faf Du Plessis",
    title: "Faf Through Fire",
    img: "/assets/faf.jpg",
    id: 3,
  },
  {
    writer: "Robert T. Kiyosaki",
    title: "Rich Dad Poor Dad",
    img: "/assets/rich-dad-poor-dad.jpg",
    id: 4,
  },
  {
    writer: "Francesc Miralles",
    title: "Ikigai",
    img: "/assets/ikigai.jpg",
    id: 5,
  },
  {
    writer: "Robert Greene",
    title: "The 48 Laws of Power",
    img: "/assets/laws-of-power.jpg",
    id: 6,
  },
  {
    writer: "James Clear",
    title: "Atomic Habits",
    img: "/assets/atomic-habits.jpg",
    id: 7,
  },
]

const BookList = () => {
  return (
    <div className="booklist">
      <EventExamples />
      {books.map((data) => {
        return <Book {...data} key={data.id} />
      })}
    </div>
  )
}

const EventExamples = () => {
  const handleInput = (event) => {
    console.log(event.target)
    console.log(event.target.name)
    console.log(event.target.value)
    console.log("Form input")
  }
  const handleSubmit = () => {
    // alert("Submit")
  }
  return (
    <section>
      <form>
        <h2>Form</h2>
        <input
          type="text"
          style={{ margin: "1rem 0" }}
          placeholder="txt box"
          name="example"
          onChange={handleInput}
        />
        <button onClick={handleSubmit} style={{ marginLeft: ".3rem" }}>
          Submit
        </button>
      </form>
    </section>
  )
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.writer}</h4>
    </article>
  )
}

export default BookList

// Alternative Props

// const BookList = () => {
//   return (
//     <div className="booklist">
//       {books.map((data) => {
//         return <Book book={data} />
//       })}
//     </div>
//   )
// }

// // eslint-disable-next-line react/prop-types
// const Book = (props) => {
//   const { writer, title, img } = props.book
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{writer}</h4>
//     </article>
//   )
// }

// const Image = () => (
//   <img
//     src="https://images-eu.ssl-images-amazon.com/images/I/81ZI8RyyynL._AC_UL600_SR600,400_.jpg"
//     alt="The Hidden Hindu"
//   />
// )
// const Title = () => <h2>The Hidden Hindu</h2>
// const Writer = () => <h4>Akshat Gupta</h4>
