import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeName_of_Restaurant = this.onChangeName_of_Restaurant.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeFood_available_time = this.onChangeFood_available_time.bind(this);
    this.onChangeRecurring = this.onChangeRecurring.bind(this);
    this.onChangeRecurring_Time = this.onChangeRecurring_Time.bind(this);
    this.onChangeFood_Available = this.onChangeFood_Available.bind(this);
    this.onChangePontential_Allergies = this.onChangePontential_Allergies.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name_of_restaurant: "",
      location: "",
      food_available_time: "",
      recurring: false,
      recurring_time: "",
      food_available: "",
      potential_allergies: ""
    };
  }

  onChangeName_of_Restaurant(e) {
    this.setState({
      name_of_restaurant: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  onChangeFood_available_time(date) {
    this.setState({
      food_available_time: date
    });
  }
  onChangeRecurring(e) {

    console.log("hey");
    if (e.target.value === "1"){
        e.target.value = true;
    }
    console.log(e.target.value)
    this.setState({
      required: e.target.value
    });
  }
  onChangeRecurring_Time(date) {
    this.setState({
      recurring_time: date
    });
  }
  onChangeFood_Available(e) {
    this.setState({
      food_available: e.target.value
    });
  }

  onChangePontential_Allergies(e) {
    this.setState({
      potential_allergies: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const donor = {
      name_of_restaurant: this.state.name_of_restaurant,
      location: this.state.location,
      food_available_time: this.state.food_available_time,
      recurring: this.state.recurring,
      recurring_time: this.state.recurring_time,
      food_available: this.state.food_available,
      potential_allergies: this.state.potential_allergies
    };

    console.log(donor);

    axios
      .post("http://localhost:5000/donors/add", donor)
      .then(res => console.log(res.data));

    //window.location = "/";
  }

  render() {
    return (
        <div className="formStyle">
      <Form className="form" onSubmit={this.onSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name_of_restaurant}
              onChange={this.onChangeName_of_Restaurant}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" value={this.state.location}
              onChange={this.onChangeLocation}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Food Avail Time</Form.Label>
          <Form.Control type="text" value={this.state.food_available_time}
              onChange={this.onChangeFood_available_time}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Recurring Time</Form.Label>
          <Form.Control type="number" value={this.state.recurring_time}
              onChange={this.onChangeRecurring_Time}/>
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Required?" value="1"
              onChange={this.onChangeRecurring}/>
        </Form.Group>
        <Form.Group controlId="formGridState">
          <Form.Label>Food Available</Form.Label>
          <Form.Control type="text" value={this.state.food_available}
              onChange={this.onChangeFood_Available}>
          </Form.Control>
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <label>Date : </label>
          <DatePicker selected={this.state.potential_allergies} onChange={this.onChangePontential_Allergies} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    );
  }
}
