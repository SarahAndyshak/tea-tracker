import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TeaList(props){
  return(
    <React.Fragment>
      <Row>
        <Col md={4} className="mb-4">
        {props.teaList.map((tea) =>
          <Tea
            name={tea.name}
            origin={tea.origin}
            caf={tea.caf}
            price={tea.price}
            inventory={tea.inventory}
            onBuyTea={props.onBuyTea}
            onRestockTea={props.onRestockTea}
            onTeaSelect={props.onTeaSelect}
            id={tea.id}
            key={tea.id} />
        )}
        </Col>
      </Row>
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onBuyTea: PropTypes.func,
  onRestockTea: PropTypes.func,
  onTeaSelct: PropTypes.func,
}

export default TeaList;