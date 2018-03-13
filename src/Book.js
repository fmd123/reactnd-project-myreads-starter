import React, {Component} from 'react'

  class Book extends Component {

    // const {book} = this.props
    //do I want to do this component?
    render(){
      const{book}= this.props
      console.log('inside book', book)
       return (
       <div className="book" key={book.title}>
         <div className="book-top">
           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
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
         <div className="book-authors">{book.authors}</div>
       </div>
       )
    }

  }



export default Book
