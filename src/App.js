import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './Bookcase'
import Search from './Search'
import ChangePage from './ChangePage'

class BooksApp extends React.Component {
  constructor (){
    super()
    this.state = {
      books: [],
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false
        
      }
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }



  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
      {console.log(this.state.books)}

    })
  }



  render() {

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
          <Bookcase books={this.state.books} showSearchPage={this.state.showSearchPage}/>
        )}
      </div>
    )
  }
}

export default BooksApp
