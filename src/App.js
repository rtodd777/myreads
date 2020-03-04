// -------------------------------------------------------------------
// Object Name.... App.js
// Description.... Main Driver
// Developer...... R. Todd Stephens
// Date Written... 2/26/2020
// -------------------------------------------------------------------
import React, {Component} from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './FileIO/BooksAPI'
import './App.css'
import BookListing from './Components/BookListing'
import SearchBooks from './Components/SearchBooks'

class BooksApp extends Component {

/* Define the State Variables                                       */
/* ---------------------------------------------------------------- */
  state = {
    BookInventory: []
  }


/* Load data after the componet mounted (i.e. Loaded)               */
/* ---------------------------------------------------------------- */
  componentDidMount() {
    this.get_all_books()
  }


/* Get all the Books from the Database                              */
/* ---------------------------------------------------------------- */
  get_all_books = () => {
    BooksAPI.getAll().then((bookInventory) => {
      this.setState({BookInventory: bookInventory})
    })
  }


/* Change the Shelf Function                                        */
/* ---------------------------------------------------------------- */
  changeShelf = (book, newShelf) =>{
   BooksAPI.update(book, newShelf).then(()=>{
     BooksAPI.getAll().then((books) =>{
      this.setState({books: books})
      window.location.href = "/";
    })
   })
  }


/* ---------------------------------------------------------------- */
/* Main Section to Render                                           */
/* ---------------------------------------------------------------- */
  render() {
    return (
      <div className="app">

{/* Base Page Route */}
        <Route exact path="/" render={() => (
          <BookListing bookInventory={this.state.BookInventory} changeShelf={this.changeShelf} />
        )}/>

{/* Search Page Route */}
        <Route exact path="/search" render={() => (
          <SearchBooks bookInventory={this.state.BookInventory} changeShelf={this.changeShelf} />
        )}/>

      </div>
    )
  }
}

export default BooksApp
