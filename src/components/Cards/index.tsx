import css from './styles.css'

const Cards = ({ data } : any ) => {
  return (
    <ul className={css.list}>
      {data.map((note: any) => {
        return (
          <li className={css.card} key={note.id}>
            <img className="ui avatar image" alt={note.language} />
            <div className="content">
              <div className="description">{note.description}</div>
              <div className="description">{note.content}</div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Cards
