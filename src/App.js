// -------------------------------------------------------------------
// Object Name.... App.js
// Description.... Main Driver
// Developer...... R. Todd Stephens
// Date Written... 2/26/2020
// -------------------------------------------------------------------
import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './FileIO/BooksAPI'
import './App.css'
import BookListing from './Components/BookListing'
import SearchBooks from './Components/SearchBooks'
import Error404 from './Components/Error404'

class BooksApp extends Component {

/* Define the State Variables                                       */
/* ---------------------------------------------------------------- */
  state = {
    bookInventory: []
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
      this.setState({bookInventory: bookInventory})
    })
  }


/* Change the Shelf Function                                        */
/* ---------------------------------------------------------------- */
  changeShelf = (book, newShelf) =>{
   BooksAPI.update(book, newShelf).then(()=>{
     BooksAPI.getAll().then((books) =>{
      this.setState({bookInventory: books})
    })
   })
  }


/* ---------------------------------------------------------------- */
/* Main Section to Render                                           */
/* ---------------------------------------------------------------- */
  render() {

    return (

      <div className="app">

        <Switch>


{/* Base Page Route */}
        <Route exact path="/" render={() => (
          <BookListing bookInventory={this.state.bookInventory} changeShelf={this.changeShelf} />
        )}/>

{/* Search Page Route */}
        <Route exact path="/search" render={() => (
          <SearchBooks bookInventory={this.state.bookInventory} changeShelf={this.changeShelf} />
        )}/>

{/* Bad URL */}
        <Route component={Error404} />

      </Switch>


      </div>
    )
  }
}

export default BooksApp
