/* eslint-disable react/prop-types */

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.writer}</h4>
      <span className="number">#{props.number + 1}</span>
    </article>
  )
}

export default Book
