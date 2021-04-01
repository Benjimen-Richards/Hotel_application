import React, { Component } from "react";
import "./Css/Homepage.css";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import MediaCard from "./Card";
import Searchlist from "./Search_list";
import { connect } from "react-redux";
import { allusers, fetch_citydata } from "../../Redux/Actionfile";
import { Link } from "react-router-dom";
let Usersdata = "";
let dummydata = "";
let feedata = "";
class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      iconVisbility: "none",
      icon: true,
      searchinput: "",
      filtered_users: "",
    };
  }
  visibilityhandler = (e) => {
    this.setState({
      iconVisbility: "block",
      icon: false,
      searchinput: e.target.value,
    });
  };
  iconhandler = () => {
    const ic = this.state.icon === true ? false : true;
    this.setState({
      icon: ic,
    });
    feedata = Usersdata;
  };
  listhandler = (city) => {
    const ans = this.state.iconVisbility === "block" ? "none" : "block";
    this.setState({
      iconVisbility: ans,
      icon: true,
      searchinput: city,
    });
    const cityfilter = Usersdata.filter(
      (item) => item.venue.toLowerCase().indexOf(city.toLowerCase()) > -1
    );
    dummydata = cityfilter;
    feedata = cityfilter;
  };
  renderusers = (data) => {
    if (data) {
      return data.map((user) => <MediaCard data={user} />);
    } else {
      return (
        <img
          style={{ height: "300px" }}
          src="https://flevix.com/wp-content/uploads/2019/07/Loading-Image-1-1.gif"
          alt="/"
        />
      );
    }
  };
  filterhandler = (e) => {
    const filter = e.target.value;
    let eventfilter = "";
    if (filter === 0) {
      eventfilter = dummydata.filter((event) => parseInt(event.price) === 0);
    } else if (filter === "discount") {
      eventfilter = dummydata.filter((event) => parseInt(event.price) !== 0);
    }
    feedata = eventfilter;
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="Home_container">
        <div className="Nav_container">
          <div className="searchbar">
            <TextField
              id="outlined-basic"
              label="Search by City"
              variant="outlined"
              name="searchinput"
              value={this.state.searchinput}
              onChange={this.visibilityhandler}
              autoComplete="off"
            />
            {!this.state.icon && (
              <div className="cancelIcon">
                <CancelIcon onClick={this.iconhandler} />
              </div>
            )}
            <div
              className="SearchList"
              style={{ display: this.state.iconiconVisbility }}
            >
              {!this.state.icon && (
                <Searchlist
                  searchlist={(city) => this.listhandler(city)}
                  citydata={{
                    city: this.props.cities,
                    keyword: this.state.searchinput,
                  }}
                />
              )}
            </div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            id="submit_button"
            onClick={() => {
              feedata = Usersdata;
              this.props.history.push("/");
            }}
          >
            Clear filter
          </Button>
          <Link to="/addevent" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary" id="submit_button">
              Add Event
            </Button>
          </Link>
        </div>
        <hr />
        <div className="Content">
          <h2>Choose by your events</h2>
          <div>
            <div
              style={{
                // border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <label>Filters</label>
              <div style={{ margin: "10px" }}>
                <Select
                  labelId="demo-simple-select-label"
                  style={{ width: "200px" }}
                  id="demo-simple-select"
                  onChange={this.filterhandler}
                >
                  <MenuItem value={0}>Zero fee</MenuItem>
                  <MenuItem value={"discount"}>Paid </MenuItem>
                </Select>
              </div>
            </div>
          </div>
          <div className="card_container">{this.renderusers(feedata)}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetch_citydata());
    this.props.dispatch(allusers());
  }
}

const mapstatetoprops = (state) => {
  // console.log("state", state);
  if (state) {
    Usersdata = state.Allusers.data;
    dummydata = state.Allusers.data;
    feedata = state.Allusers.data;
    return {
      cities: state.Citydata.data,
      allusers: state.Allusers.data,
    };
  }
};

export default connect(mapstatetoprops)(Homepage);
