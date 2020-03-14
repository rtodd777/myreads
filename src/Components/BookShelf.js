// -------------------------------------------------------------------
// Object Name.... BookShelf.js
// Description.... Book Shelf that Holds the Books
// Developer...... R. Todd Stephens
// Date Written... 2/27/2020
// -------------------------------------------------------------------
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

class BookShelf extends Component {

/* Define the State Variables                                       */
/* ---------------------------------------------------------------- */
  static propTypes = {
    title: PropTypes.string.isRequired,
    bookInventory: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }


/* ---------------------------------------------------------------- */
/* Main Section to Render                                           */
/* ---------------------------------------------------------------- */
  render() {

    const bookInventory = this.props.bookInventory
    const changeShelf = this.props.changeShelf

    return (

     <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
               <ol className="books-grid">

                {bookInventory.map((book, index) => (<Book book={book} key={index} changeShelf={changeShelf} />))}

               </ol>
          </div>
     </div>

    )
  }
}

export default BookShelf;