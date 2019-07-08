import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import Book from '../components/BookItem.js';
import API from "../utils/BookAPI"

class Search extends Component {
    state = {
        books: [],
        searchValue: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchBook = event => {
        event.preventDefault();
        if (this.state.searchValue) {
            API.bookSearch(this.state.searchValue)
                .then(res => {
                    console.log(res.data.items);
                    this.setState({ books: res.data.items })
                })
                .catch(err => console.log(err));
        }
    };

    dataSave = (id, title, authors, description, link, image) => {
        API.saveBook({
            _id: id,
            title: title,
            authors: authors,
            description: description,
            urlLink: link,
            image: image
        })
            .then(res => console.log("Saved Book:", res.title))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Form>
                            <Form.Group controlId="formGroupBook">
                                <Form.Label className="h3">Book search</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Book title, author or subject"
                                    value={this.state.searchValue}
                                    name="searchValue"
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Button
                                type="submit"
                                disabled={!(this.state.searchValue)}
                                onClick={this.searchBook}
                            >
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col size="md-12">
                        {this.state.books.length ? (
                            <div>
                                <h5>Search Results</h5>
                                {this.state.books.map(book => (
                                    <Book
                                        key={book.id}
                                        label="Save"
                                        id={book.id}
                                        title={book.volumeInfo.title}
                                        authors=
                                        {
                                            book.volumeInfo.authors ?
                                            book.volumeInfo.authors :
                                            ["Author Unavailable"]
                                        }
                                        description={book.volumeInfo.description}
                                        link={book.volumeInfo.infoLink}
                                        image=
                                        {
                                            book.volumeInfo.imageLinks ?
                                                book.volumeInfo.imageLinks.thumbnail :
                                                "Image Unavailable"
                                        }
                                        btnSave={this.dataSave}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>Nothing Found.  Please search again.</h5>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;
