import React, { Component } from 'react';

class Persons extends Component {
  
  state = {
    persons: []
  }

  render() {
    return (
      <div className="container mt-5">
        <center><h1>Person List</h1></center>
        {this.state.persons.map((person) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{person.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{person.email}</h6>
              <p class="card-text">{person.company.catchPhrase}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }   

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ persons: data })
        })
        .catch(console.log);
  }
}

export default Persons;