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

    handleChange = event => {
      {console.log("I am handleChange function")}
      this.setState({value: event.target.value})
    }



  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
      // {console.log(this.state.books)}

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
          <Bookcase books={this.state.books} showSearchPage={this.state.showSearchPage}
          handleChange={this.handleChange}/>
        )}
      </div>
    )
  }
}

export default BooksApp
