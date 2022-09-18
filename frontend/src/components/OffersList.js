import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { showError } from "../utils/common";

const OffersList = ({ blockchain }) => {
  // State to store offers
  const [offers, setOffers] = useState([]);

  // Get all offers
  useEffect(() => {
    (async () => {
      try {
        blockchain.ebay &&
          setOffers(await blockchain.ebay.getAllOffers());
      } catch (error) {
        showError(error);
      }
    })();
  }, [blockchain]);
  console.log(offers);

  return (
    <Container className="py-2">
      {/* Offer list */}
      <h4>All Offers</h4>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Buyer</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr>
                  <td>{offer.buyer}</td>
                  <td>{offer.offerPrice.toString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default OffersList;
