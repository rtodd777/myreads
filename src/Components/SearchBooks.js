// -------------------------------------------------------------------
// Object Name.... SearchBooks.js
// Description.... Search Utility
// Developer...... R. Todd Stephens
// Date Written... 2/27/2020
// -------------------------------------------------------------------
import React, {Component} from 'react'
import { Link } from "react-router-dom";
import BookShelf from './BookShelf'
import PropTypes from 'prop-types';
import * as BooksAPI from '../FileIO/BooksAPI';

class SearchBooks extends Component {


/* Define the State Variables                                       */
/* ---------------------------------------------------------------- */
  static propTypes = {
    bookInventory: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    bookResults: [],
    errorMessage: ''
  }


/* Update Book Inventory with the Merged List of Shelves            */
/* ---------------------------------------------------------------- */
  mergeShelfInfo(books) {
    const mergedBooks = books.map(book => {
      book.shelf = "none";
      this.props.bookInventory.forEach(bookInventory => {
        if (book.id === bookInventory.id) {
          book.shelf = bookInventory.shelf;
        }
      });
      return book;
    });
    this.setState({
      books: mergedBooks
    });
  }


/* Search Books API                                                 */
/* ---------------------------------------------------------------- */
  searchBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {

        this.mergeShelfInfo(books)

        if (books.length > 0) {
          this.setState({ 
            bookResults: books, 
            errorMessage: '',
          })
        } else {
          this.setState({ 
            bookResults: [], 
            errorMessage: 'Sorry, we could not find the book you are looking for',
          });
        }
      });

    } else this.setState({ 
      bookResults: [], 
      errorMessage: '',
      });    
  }


/* ---------------------------------------------------------------- */
/* Main Section to Render                                           */
/* ---------------------------------------------------------------- */
  render() {
    const changeShelf = this.props.changeShelf
    const { query, bookResults, errorMessage } = this.state;

    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/">
                <button className="close-search">Close</button>
              </Link>              
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={query}
                  onChange={this.searchBooks}
                />
              </div>
            </div>
            <div className="search-books-results">
              <BookShelf title="Search Results" bookInventory={bookResults} changeShelf={changeShelf} />
              <div className="errorMessage">{errorMessage}</div>
            </div>
          </div>

    )
  }
}

export default SearchBooks;