import * as React from "react";

class MyComponent extends React.Component {
  // Initial state to store form input values
  state = {
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
    gender: "",
  };

  // Handle change for text inputs, checkboxes, and radio buttons
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted! Data: " + JSON.stringify(this.state, null, 2));
  };

  render() {
    return (
      <div>
        <h1>Contact Form</h1>
        <p>Please fill out the form below:</p>
        <form onSubmit={this.handleSubmit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Checkbox for terms and conditions */}
          <div>
            <label>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={this.state.acceptTerms}
                onChange={this.handleChange}
              />
              I accept the terms and conditions
            </label>
          </div>

          {/* Radio buttons for gender */}
          <div>
            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChange}
              />
              Female
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

        <footer>
          <p>&copy; ~Rahcurl. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default MyComponent;
