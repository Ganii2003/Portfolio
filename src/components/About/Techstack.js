import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiMsqlServer,

} from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{ color: "rgb(0, 66, 126)" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: "rgb(237, 215, 24)" }} />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: "green" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact  style={{ color: "purple" }}/>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb  style={{ color: "green" }}/>
      </Col>

  
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ color: "rgb(163, 149, 140)" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ color: "teal" }} />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 style={{ color: "rgb(221, 75, 37)" }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 style={{ color: "rgb(37, 75, 221)" }}/>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer/>
      </Col>
          </Row>
  );
}

export default Techstack;