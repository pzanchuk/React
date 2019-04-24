import React from 'react';

function NewTicketForm(){
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
          border: 2px solid #6d5cf2;
          padding: 5px;
          margin: 20px;
          background-color:  #fffff1;
        }
        h3{
          color: #6d5cf2;
        }
      `}</style>

      <form>
        <h3>Create Ticket</h3>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
          <br/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
          <br/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
          <br/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
