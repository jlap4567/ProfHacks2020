import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import GeoLocateButton from "./GeoLocateButton"

export default class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeName_of_Restaurant = this.onChangeName_of_Restaurant.bind(
      this
    );
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangefood_available_start_time = this.onChangefood_available_start_time.bind(
      this
    );
    // this.onChangeRecurring = this.onChangeRecurring.bind(this);
    // this.onChangeRecurring_Time = this.onChangeRecurring_Time.bind(this);
    this.onChangeFood_Available = this.onChangeFood_Available.bind(this);
    this.onChangePontential_Allergies = this.onChangePontential_Allergies.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name_of_restaurant: "",
      location: "",
      food_available_start_time: "07:30",
      food_available_end_time: "10:30",
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
  onChangefood_available_start_time(e) {
    this.setState({
      food_available_start_time: e.target.value
    });
  }
  onChangefood_available_end_time(e) {
    this.setState({
      food_available_end_time: e.target.value
    });
  }
  //   onChangeRecurring(e) {
  //     console.log("hey");
  //     if (e.target.value === "1") {
  //       e.target.value = true;
  //     }
  //     console.log(e.target.value);
  //     this.setState({
  //       required: e.target.value
  //     });
  //   }
  //   onChangeRecurring_Time(date) {
  //     this.setState({
  //       recurring_time: date
  //     });
  //   }
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
      food_available_start_time: this.state.food_available_start_time,
      food_available_end_time: this.state.food_available_end_time,
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
          <GeoLocateButton/>
        <Form className="form" onSubmit={this.onSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name_of_restaurant}
              onChange={this.onChangeName_of_Restaurant}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Food Avail Start Time</Form.Label>
            <form noValidate>
              <TextField
                id="time"
                label="Alarm clock"
                type="time"
                defaultValue="07:30"
                value={this.state.food_available_start_time}
                onChange={this.onChangefood_available_start_time}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </form>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Food Avail End Time</Form.Label>
            <form noValidate>
              <TextField
                id="time"
                label="Alarm clock"
                type="time"
                defaultValue="07:30"
                value={this.state.food_available_end_time}
                onChange={this.onChangefood_available_end_time}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </form>
          </Form.Group>
          <Form.Group controlId="formGridState">
            <Form.Label>Food Available</Form.Label>
            <Form.Control
              type="text"
              value={this.state.food_available}
              onChange={this.onChangeFood_Available}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Potential Allergies</Form.Label>
            <Form.Control
              type="text"
              value={this.state.potential_allergies}
              onChange={this.onChangePontential_Allergies}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
