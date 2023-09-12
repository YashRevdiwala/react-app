/* eslint-disable react/prop-types */

import Book from "./pages/Book"

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
    <>
      <h1>Amazon Best Sellers</h1>
      <div className="booklist">
        {books.map((data, index) => {
          return <Book {...data} key={data.id} number={index} />
        })}
      </div>
    </>
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
