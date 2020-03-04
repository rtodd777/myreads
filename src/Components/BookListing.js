// -------------------------------------------------------------------
// Object Name.... BookListing.js
// Description.... Book Listing for all Book Shelfs with Books
// Developer...... R. Todd Stephens
// Date Written... 2/26/2020
// -------------------------------------------------------------------
import React, {Component} from 'react'
import { Link } from "react-router-dom";
import BookShelf from './BookShelf'
import PropTypes from 'prop-types';

class BookListing extends Component {


/* Define the State Variables                                       */
/* ---------------------------------------------------------------- */
  static propTypes = {
    bookInventory: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }


/* Redirect to the Search Page                                      */
/* ---------------------------------------------------------------- */
  redirectToSearch () {
    window.location.href = "/search";
  }


/* ---------------------------------------------------------------- */
/* Main Section to Render                                           */
/* ---------------------------------------------------------------- */
  render() {
    const bookInventory = this.props.bookInventory
    const changeShelf = this.props.changeShelf

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads: Application By R. Todd</h1>
        </div>
        <div className="list-books-content">
          <div>

{/* Currently Reading Bookshelf */}
            <BookShelf title="Currently Reading" bookInventory={bookInventory.filter((book) => (book.shelf === "currentlyReading"))} changeShelf={changeShelf} />

{/* Want To Read Bookshelf */}
            <BookShelf title="Want to Read" bookInventory={bookInventory.filter((book) => (book.shelf === "wantToRead"))} changeShelf={changeShelf} />

{/* Read BookShelf */}
            <BookShelf title="Read" bookInventory={bookInventory.filter((book) => (book.shelf === "read"))} changeShelf={changeShelf} />

          </div>
        </div>

{/* Search Utility */}

        <Link className="open-search" to="/search">
          <button>Add Book</button>
        </Link>

      </div>

    )
  }
}

export default BookListing;