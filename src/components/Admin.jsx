import React from 'react';
import TicketList from './TicketList';
import PropTypes from 'prop-types';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';

function Admin(props){
    let optionalSelectedTicketContent = null;
    if (props.selectedTicket.length > 0){
      optionalSelectedTicketContent =  <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]}/>;
    }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList 
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedTicket: state.selectedTicket,
    ticketList: state.masterTicketList
  };
};

Admin.PropTypes = {
    ticketList: PropTypes.object,
    currentRouterPath: PropTypes.string.isRequired,
    selectedTicket: PropTypes.string
};

export default connect(mapStateToProps)(Admin);