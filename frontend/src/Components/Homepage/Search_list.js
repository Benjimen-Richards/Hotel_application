import "./Css/Homepage.css";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useEffect, useState } from "react";

const Searchlist = (props, keyword) => {
  const key = props.citydata.keyword;
  const maindata = props.citydata.city;
  const [data, setdata] = useState(props.citydata.city);
  useEffect(() => {
    if (key && data) {
      const filterdata = maindata.filter(
        (item) => item.cityname.toLowerCase().indexOf(key.toLowerCase()) > -1
      );
      setdata(filterdata);
    }
  }, [key]);
  const setlistelements = (data) => {
    if (data) {
      return data.map((city) => (
        <ListItem
          button
          onClick={() => props.searchlist(city.cityname)}
          key={city._id}
        >
          <ListItemText primary={city.cityname} />
        </ListItem>
      ));
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
  // console.log(data);
  return (
    <div style={{ height: "400px", overflow: "scroll" }}>
      <label style={{ marginLeft: "20px" }}>---Select city---</label>
      <List component="nav" aria-label="main mailbox folders">
        {setlistelements(data)}
      </List>
    </div>
  );
};

export default Searchlist;
