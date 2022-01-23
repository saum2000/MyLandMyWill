import Card from "../components/Card";
import "../components/Card.css";
import "./admin.css";
import { Row, Col, CardGroup } from "react-bootstrap";
import Button from "@material-ui/core/Button";
// import CardDeck from 'react-bootstrap/CardDeck'
import React, { Component } from "react";
import Veri from "../components/functions/veriland";
import Transfer from "../components/functions/transfer";
import seller from "../components/photos/seller.png";
import buyer from "../components/photos/buyer.png";
import land from "../components/photos/land.png";
import transfer from "../components/photos/transfer.jpg";
import { requestAccount, signer, _intializeContract } from "D:/Users/sneha/MyLandMyWill/MyLandMyWill-master/src/components/functions/template.js";

class AdminScreen extends Component {

  render() {
    async function VerifySeller() {
      await requestAccount();
      const contract = await _intializeContract(signer);
      const verifyS = await contract.verifySeller();
      await verifyS.wait();
      console.log("Seller Verified");
    }
    
    async function RejectSeller() {
      await requestAccount();
      const contract = await _intializeContract(signer);
      const RejectS = await contract.rejectSeller();
      await RejectS.wait();
      console.log("Seller Rejected");
    }
    async function VerifyBuyer() {
      await requestAccount();
      const contract = await _intializeContract(signer);
      const verifyB = await contract.verifyBuyer();
      await verifyB.wait();
      console.log("Buyer Verified");
    }
    
    async function RejectBuyer() {
      await requestAccount();
      const contract = await _intializeContract(signer);
      const RejectB = await contract.rejectBuyer();
      await RejectB.wait();
      console.log("Buyer Rejected");
    }
    return (
      <>
        <CardGroup>
          <Row style={{ position: "relative", left: "9%" }}>
            <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
              <Card src={seller} name="Verify/Reject Seller" body="." />
              <div><Button
                variant="contained"
                color="primary"
                style={{ color: " white", fontWeight: "bold" }} onClick={VerifySeller}>
                Verify{" "}
              </Button>
              <Button
                variant="contained"style={{marginLeft:"12%",backgroundColor:"red", color: " white", fontWeight: "bold" }} onClick={RejectSeller}>Reject{" "}
              </Button></div>
            </Col>{" "}
            <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
              <Card src={buyer} name="Verify/Reject Buyer " body="." />
              <div><Button
                variant="contained"
                color="primary"
                style={{ color: " white", fontWeight: "bold" }} 
                onClick={VerifyBuyer}>
                Verify{" "}
              </Button>
              <Button
                variant="contained"style={{marginLeft:"12%",backgroundColor:"red", color: " white", fontWeight: "bold" }} onClick={RejectBuyer}>Reject{" "}
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
