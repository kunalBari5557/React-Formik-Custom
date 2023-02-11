// import "./styles.css";
import moment from "moment";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateArray() {
  const [dateRange, setDateRange] = React.useState([null, null]);
  const [startDate, endDate] = dateRange;
  const startD = dateRange[0];
  const endD = dateRange[1];
  const st = startD && startD.getDate();
  const ed = endD && endD.getDate();
  const rangeDates = moment(startD);

  let dates = [];
  const daterray = [];
  for (let i = st; i <= ed; i += 1) {
    if (i == st) {
      dates = rangeDates;
    } else {
      dates = rangeDates.add(1, "day");
    }

    daterray.push(dates.format("YYYY-MM-DD"));
  }
  return (
    <div className="App">
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable
      />
      <h5>Selected Dates </h5>
      <lable>{daterray}</lable>
      <br></br>
    </div>
  );
}
