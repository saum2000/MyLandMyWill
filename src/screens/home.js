import { Row, Col, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
// import React, { Component, useState } from "react";
import Card from "../components/Card";
import "../components/Card.css";
import "./home.css";
import regs from "../components/photos/regs.png";
import regl from "../components/photos/regl.jpg";
import regb from "../components/photos/regb.jpg";
import reql from "../components/photos/reql.jpg";
import appreq from "../components/photos/appreq.jpg";
import ups from "../components/photos/ups.png";
import upb from "../components/photos/upb.jpg";
import pay from "../components/photos/pay.png";
import Regs from "../components/functions/regs";
import Regb from "../components/functions/regb";
import Regl from "../components/functions/regl";
import Reql from "../components/functions/reql";
import Appr from "../components/functions/appr";
import Pay from "../components/functions/pay";
import Updates from "../components/functions/upds";
import Updateb from "../components/functions/updb";
const Homescreen = () => {
  return (
    <>
      <CardGroup className="marg">
        <Row style={{ position: "relative", left: "9%" }}>
          <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
            <Card src={regs} name="Register Owner/Seller" />
            <Regs />
          </Col>
          <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
            <Card src={regb} name="Register Buyer " />
            <Regb />
          </Col>
          <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
            <Card src={regl} name="Register Land" />
            <Regl />
          </Col>
          <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
            <Card src={reql} name="Request Land" />
            <Reql />
          </Col>
        </Row>
        <Row style={{ position: "relative", left: "9%" }}>
          <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
            <Card src={appreq} name="Approve Request" />
            <Appr />
          </Col>
          <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
            <Card src={ups} name="Update Seller" />
            <Updates />
          </Col>
          <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
            <Card src={upb} name="Update Buyer " />
            <Updateb />
          </Col>
          <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
            <Card src={pay} name="Land Payment" />
            <Pay />
          </Col>
        </Row>
      </CardGroup>
    </>
  );
};
export default Homescreen;
