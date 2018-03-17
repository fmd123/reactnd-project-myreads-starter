import React, {Component} from 'react'
import Bookshelf from './Bookshelf'


class Bookcase extends Component {
  render() {
    const {books} = this.props
    console.log(books)

    let currentReads = books.filter((book) => {
      return book.shelf === "currentlyReading"
    })

    let wishReads = books.filter((book) => {
      return book.shelf === "wantToRead"
    })
    let haveReads = books.filter((book) => {
      return book.shelf === "read"
    })

    return (


        <div className="list-books-content">
          <div>

            <Bookshelf books={currentReads} shelfName="Currently Reading"/>
            <Bookshelf books={wishReads} shelfName="Want to Read"/>
            <Bookshelf books={haveReads} shelfName="Have Read"/>

          </div>
        </div>


    )
  }
}
{/* <div className="open-search">
  <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
</div> */}
export default Bookcase
