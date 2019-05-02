import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import buttonImage from '../assets/images/button.png';

function NewTicketForm(props){

  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <hr/>
      <style jsx>{`
        form{
          background-color: #9fbff2;
          margin: 20px 0 0 0;
          padding: 10px;
        }
        input{
          border: 2px solid #6d5cf2;
          width: 148px;
          padding: 15px;
          margin: 3px;
          font-size: 20px;
        }
        textarea{
          border: 2px solid #6d5cf2;
          width: 150px;
          padding: 15px;
          margin: 3px;
          font-size: 20px;
        }
        button{

          padding: 5px;
          margin: 20px;

        }

        button:active{
          background-color: black;

        }
        h3{
          color: #6d5cf2;
        }

        img{
          height: 50px;
        }
      `}</style>

      <form onSubmit={handleNewTicketFormSubmission}>
        <h3>Create Ticket</h3>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}} />
          <br/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}} />
          <br/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}} />
          <br/>
        <button type='submit'><img src = {buttonImage}/></button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
