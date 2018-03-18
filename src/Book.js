import React, {Component} from 'react'
// import BookShelfChanger from './BookShelfChanger'
class Book extends Component {


  render() {
    const {book, handleChange} = this.props
    console.log(book)
    const {shelf} = book.shelf
    return (

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
          }}></div>
          <div>
            <div onSubmit={this.handleSubmit} className="book-shelf-changer">
              <select value={shelf} onChange={(event)=>(handleChange(event.target.value))} >
                <option value="none" disabled>Move to...</option>
                <option value={"currentlyReading"}>Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>

            </div>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>

      </div>
    )
  }

}

export default Book
