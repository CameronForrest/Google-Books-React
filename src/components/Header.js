import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";


const Header = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1 className="text-center">React Google Books Search</h1>
                <p className="text-center lead">
                    Tool To Search Google Books API For Books And Magazines of Interest
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Header;
