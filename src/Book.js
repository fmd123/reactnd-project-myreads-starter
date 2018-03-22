import React, {Component} from 'react'
// import BookShelfChanger from './BookShelfChanger'
class Book extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    const {book, handleChange} = this.props
    return (

      <div className="book">
        <div className="book-top">

          <img className='book-cover' src={book.imageLinks.smallThumbnail} alt={`cover for: ${book.title}`} style={{
            width: 128,
            height: 193
          }}/>

          <div>
            <div onSubmit={this.handleSubmit} className="book-shelf-changer">

              <select value={book.shelf} selected={book.shelf=== this.value} onChange={(event)=>(handleChange(book, event.target.value))} >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?
          <ul>{(book.authors).map((author, index)=>(
            <li key={index}>{author}</li>
          ))}</ul> : <p>Anonymous"</p>}</div>

      </div>
    )
  }

}

export default Book

{/* <div className="book-cover" style={{
  width: 128,
  height: 193,
  backgroundImage: `url(${book.imageLinks.smallThumbnail})`
}}></div> */}

// ok, think I figured it out...  I thought I could just use value={shelf}  for my <select> element because earlier in render I had written:
//
// const {book, shelf, handleChange} = this.props
//
// it needs to be select={book.shelf}
//
// Question:
// so if I create a const shelf does that in a sense create a new const that is essentially detached from the const book?
