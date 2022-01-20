import Card from "../components/Card";
import "../components/Card.css";
import "./admin.css";
import { Row, Col, CardGroup } from "react-bootstrap";
import Button from "@material-ui/core/Button";
// import CardDeck from 'react-bootstrap/CardDeck'
import React, { Component } from "react";
import Veri from "../components/functions/veri-s";
import Transfer from "../components/functions/transfer";
import seller from "../components/photos/seller.png";
import buyer from "../components/photos/buyer.png";
import land from "../components/photos/land.png";
import transfer from "../components/photos/transfer.jpg";
class AdminScreen extends Component {
  render() {
    return (
      <>
        <CardGroup>
          <Row style={{ position: "relative", left: "9%" }}>
            <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
              <Card src={seller} name="Verify/Reject Seller" body="." />
              <div><Button
                variant="contained"
                color="primary"
                style={{ color: " white", fontWeight: "bold" }}>
                Verify{" "}
              </Button>
              <Button
                variant="contained"style={{marginLeft:"12%",backgroundColor:"red", color: " white", fontWeight: "bold" }}>Reject{" "}
              </Button></div>
            </Col>{" "}
            <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
              <Card src={buyer} name="Verify/Reject Buyer " body="." />
              <div><Button
                variant="contained"
                color="primary"
                style={{ color: " white", fontWeight: "bold" }}>
                Verify{" "}
              </Button>
              <Button
                variant="contained"style={{marginLeft:"12%",backgroundColor:"red", color: " white", fontWeight: "bold" }}>Reject{" "}
              </Button></div>
            </Col>{" "}
            <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
              <Card src={land} name="Verify Land" body="." />
              <Veri/>
            </Col>{" "}
            <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
              <Card src={transfer} name="Ownership Transfer" body="." />
              <Transfer/>
            </Col>{" "}
          </Row>{" "}
        </CardGroup>{" "}
      </>
    );
  }
}
export default AdminScreen;
