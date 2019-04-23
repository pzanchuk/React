import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <div>

      <style jsx>{`
        div {
          background-color: #9fbff2;
        }
        div:hover {
          background-color: #85aff2;
        }
        .example{
          color: #6d5cf2;
        }
      `}</style>

    <h3 className="example">{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
