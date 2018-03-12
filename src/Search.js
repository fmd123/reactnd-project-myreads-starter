import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,

  }
  state = {
  query: ''
}

updateQuery = (query)=>{
  this.setState({query: query.trim() })
}

clearQuery = ()=> {
  this.setState({query: ''})
}

  render (){
    const { books} = this.props
    const { query } = this.state

    let filteredBooks
if(query){
  const match = new RegExp(escapeRegExp(query), 'i')
  filteredBooks = books.filter((book)=> match.test(book.title)|| match.test(book.authors))
}else{
  filteredBooks = books
}

filteredBooks.sort(sortBy('title'))

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>

    )
  }
}


export default Search