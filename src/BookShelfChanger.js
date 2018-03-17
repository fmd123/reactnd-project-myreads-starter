import React, {Component} from 'react'

//need a event handler to change value of book.shelf onClick.
//value = "none" will set book.shelf value to "".
class BookShelfChanger extends Component {
  constructor(props){
    console.log({props})
    super(props)
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    const {book, handleChange, shelf} = this.props
    return(
      <form onSubmit={this.handleSubmit} className="book-shelf-changer">
        {console.log({shelf})}

        <select onChange={handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value={"currentlyReading"}>Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>


      </form>
    )
  }
}

export default BookShelfChanger
