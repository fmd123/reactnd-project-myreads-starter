import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './Bookcase'
import Search from './Search'
import ChangePage from './ChangePage'

class BooksApp extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        books: [],
        showSearchPage: false,
      };
      this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (book, value) => {
      // const {books} = this.state.books;
      //if book.shelf === value then do nothing...
      {console.log({book})}
      {console.log({value})}
        book.shelf = value;
        this.setState(function (prevState, currProps) {
          console.log(prevState)
        return {

          }
         });

      {console.log({book})}

    }
//     handleChange = (book, value) => {
//    book : clicked book object
//    value : value of the event
//
//   this.setState((previousState) => {
//      previousState.books : books array before modified by handleChange method
//
    // Find the clicked book object inside books array in state
//     let targetBook = previousState.books.find((bookInState) => bookInState.id === book.id)
//    Update the shelf property of the clicked book object inside books array
//     targetBook.shelf = value
//
   // Return the updated books array
//     return {books: previousState.books}
//   })
// }


// this.setState(function (prevState, currProps) {
//  return {
//   //do something
//  }
// });


  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }



  render() {
    const {books} = this.state.books
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <ChangePage />
            <h1>MyReads</h1>
          </div>
        </div>

        {this.state.showSearchPage ? (
          <Search books={this.state.books} showSearchPage={this.state.showSearchPage}/>
        ) : (
          <Bookcase books={this.state.books} showSearchPage={this.state.showSearchPage}
          handleChange={this.handleChange}/>
        )}
      </div>
    )
  }
}

export default BooksApp
