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

    )
  }
}

export default BookShelfChanger
