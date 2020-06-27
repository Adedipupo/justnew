import React, { Component } from "react"


class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: []

    }
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(event) {
    const{ name , value} = event.target
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <main>
        <form>
          <input 
            name="firstName" 
            value={this.state.firstName} 
            onChange={this.handleChange} 
            placeholder="First Name" 
            
          />
          <br />

          <input 
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="last Name" 
          />

          <br />

          <input name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="age" 
          /> 

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            /> Male
          </label>

          <br />
           
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            /> Female
          </label>

          <br />

          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="north pole">North Pole</option>
            <option value="south pole">South Pole</option>
          </select>
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {/* Age here */}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {/* Destination here */}</p>
        <p>
          Your dietary restrictions:
                    {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    )
  }
}

export default App
