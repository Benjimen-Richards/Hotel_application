import React, { Component } from "react";
import {
  Button,
  MenuItem,
  Select,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import "./Css/Event.css";
import { connect } from "react-redux";
import { fetch_citydata, post_event } from "../../Redux/Actionfile";
class Addevent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      venue: "",
      discount: "",
      img: "",
      price: "",
      icon: true,
    };
  }
  changehandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submithandler = () => {
    this.props.dispatch(post_event(this.state));
    // console.log("stateevent", this.state);
    this.setState({ icon: false });
    this.props.history.push("/");
  };
  listcities = (data) => {
    if (data) {
      return data.map((city) => (
        <MenuItem value={city.cityname}>{city.cityname}</MenuItem>
      ));
    }
  };
  render() {
    // console.log("cities", this.props.cities);
    return (
      <div className="form_page">
        <div className="Form_container">
          <div className="textfield">
            <TextField
              id="standard-basic"
              label="Enter Your Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changehandler}
            />
          </div>
          <div className="textfield">
            <TextField
              id="standard-basic"
              label="Enter Your description"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.changehandler}
            />
          </div>
          <div className="textfield">
            <TextField
              id="standard-basic"
              label="Enter image link for reference"
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.changehandler}
            />
          </div>
          <div className="textfield">
            <Select
              labelId="Discount"
              id="selectTag"
              name="venue"
              value={this.state.venue}
              onChange={this.changehandler}
              style={{ width: "400px" }}
            >
              {this.listcities(this.props.cities)}
            </Select>
          </div>
          <div className="textfield">
            <TextField
              id="standard-basic"
              label="Enter Your Price for Event"
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.changehandler}
            />
          </div>
          <div className="textfield">
            <Select
              labelId="Discount"
              id="selectTag"
              name="discount"
              value={this.state.discount}
              onChange={this.changehandler}
              style={{ width: "100px" }}
            >
              <MenuItem disabled selected>
                Discount
              </MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={60}>60</MenuItem>
            </Select>
          </div>

          <Button
            onClick={this.submithandler}
            variant="contained"
            color="primary"
            style={{ width: "200px", height: "40px" }}
          >
            {!this.state.icon && (
              <CircularProgress style={{ height: "40px", color: "white" }} />
            )}
            {this.state.icon && <span>Submit details</span>}
          </Button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetch_citydata());
  }
}
const mapstatetoprops = (state) => {
  if (state) {
    return {
      status: state.Eventdata.data,
      cities: state.Citydata.data,
    };
  }
};

export default connect(mapstatetoprops)(Addevent);
