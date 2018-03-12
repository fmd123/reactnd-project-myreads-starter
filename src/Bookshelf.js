import React, {Component} from 'react'

class Bookshelf extends Component {

  render(){

    const {books} = this.props
//  const match = "currentlyReading"
//  let currentReads = books.filter((book)=>{
//    match.test(book.shelf)
//  })
// console.log(currentReads)


    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>Currently Reading Books here</li>
            {console.log('Accessing books from Currently shelf:', books)}

          </ol>
        </div>
      </div>

    )
  }
}

export default Bookshelf
