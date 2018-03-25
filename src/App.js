import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'

import './App.css'
import Bookcase from './Bookcase'
import Search from './Search'
// import ChangePage from './ChangePage'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      // showSearchPage: false
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (book, value) => {
    {console.log({book})}
    {console.log({value})}
    book.shelf = value;
    this.setState(function(prevState, currProps) {
      console.log(prevState)
      return {}
    });

    {console.log({book})}

  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      {
        console.log("componentDidMount")
        console.log({books})
      }
    })
  }

  render() {
    const {books} = this.state.books
    return (
      <div className="app">
        <Route exact path='/' render={() => (<Bookcase books={this.state.books} handleChange={this.handleChange}/>)}/>
        <Route path='/Search' render={()=>(
          <Search books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp

// <div className="list-books">
//   <div className="list-books-title">
//     <Link to='/Search' className='search'>Search</Link>
//   <h1>MyReads</h1>
// </div>
// </div>
//
// {this.state.showSearchPage
// ? (<Search books={this.state.books} showSearchPage={this.state.showSearchPage}/>)
// : (<Bookcase books={this.state.books} showSearchPage={this.state.showSearchPage} handleChange={this.handleChange}/>)}
