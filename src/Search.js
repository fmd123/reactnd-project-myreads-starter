import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  // clearQuery = () => {
  //   this.setState({query: ''})
  // }

  render() {
    const {books} = this.props
    const {query} = this.state
    console.log(books)


    let filteredBooks
    let bookAuthors = ((books.authors).map((author)=>{

    }))
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      filteredBooks = books.filter((book) => book.title.includes(query) || book.authors.includes(query))
    } else {
      filteredBooks = books
    }

    filteredBooks.sort(sortBy('title'))


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event)=>this.updateQuery(event.target.value)}

            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks.map((book) => (
              <li key={book.title} className='book-list-item'>
                <div className="book">
                  <div className="book-top">
                    <img className='book-cover' src={book.imageLinks.smallThumbnail} alt={`cover for: ${book.title}`} style={{
                      width: 128,
                      height: 193
                    }}/>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <ul className="book-authors">
                    {book.authors.map((author, index)=>(
                      <li key={index} className="book-author-list-item" >
                        {author}
                      </li>
                    )) }

                  </ul>
                  {/*  TODO: fix authors search so can search by last name */}
                </div>
              </li>
            ))
}

          </ol>
        </div>
      </div>

    )
  }
}

export default Search
//https://reactjs.org/docs/lists-and-keys.html
//
