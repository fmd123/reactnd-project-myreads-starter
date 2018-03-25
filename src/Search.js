import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'

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

  clearQuery = () => {
    this.setState({query: ''})
  }



  render() {
    const {books, handleChange} = this.props
    const {query} = this.state



    let filteredBooks

    if (query) {
      // const match = new RegExp(escapeRegExp(query), 'i')
      filteredBooks = books.filter((book) => book.title.includes(query) )
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
            <Link to="/" className='home'>Back To Bookcase</Link>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks.map((book) => (
              <li key={book.title} className='book-list-item'>
                <Book book={book} key={book.title} handleChange={this.props.handleChange}/>
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
