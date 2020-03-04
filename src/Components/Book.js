// -------------------------------------------------------------------
// Object Name.... Book.js
// Description.... Single Book Reference
// Developer...... R. Todd Stephens
// Date Written... 2/27/2020
// -------------------------------------------------------------------
import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Book extends Component {

/* Define the State Variables                                       */
/* ---------------------------------------------------------------- */
  static propTypes = {
     book: PropTypes.object.isRequired,
     changeShelf: PropTypes.func.isRequired
  }


/* ---------------------------------------------------------------- */
/* Main Section to Render                                           */
/* ---------------------------------------------------------------- */
  render() {

    let book = this.props.book
    const changeShelf = this.props.changeShelf
    
    return (
          <li>
               <div className="book">
                    <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                         <div className="book-shelf-changer">
                              <select value="move" onChange={(event) => changeShelf(book, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
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
          </li>
    )
  }
}

export default Book;