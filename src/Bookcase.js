import React, {Component} from 'react'
import Bookshelf from './Bookshelf'


class Bookcase extends Component {
  render() {
    const {books} = this.props
    {console.log("books inside bookcase")}
    {console.log({books})}

    //I need to return something if there are no books in that category
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

            <Bookshelf books={currentReads} shelfName="Currently Reading" handleChange={this.props.handleChange}/>
            <Bookshelf books={wishReads} shelfName="Want to Read" handleChange={this.props.handleChange}/>
            <Bookshelf books={haveReads} shelfName="Have Read" handleChange={this.props.handleChange}/>

          </div>
        </div>


    )
  }
}

export default Bookcase
