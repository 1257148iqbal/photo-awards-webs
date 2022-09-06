import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBDataTable } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { Card } from "reactstrap";




const Status = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Country",
        field: "country",
        sort: "asc",
        width: 200,
      },
      {
        label: "Section A",
        field: "sectionA",
        sort: "asc",
        width: 100,
      },
      {
        label: "Section B",
        field: "sectionB",
        sort: "asc",
        width: 150,
      },
      {
        label: "Section C",
        field: "sectionC",
        sort: "asc",
        width: 100,
      },
      {
        label: "Section D",
        field: "sectionD",
        sort: "asc",
        width: 100,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        sectionD: "4",
        country: "Edinburgh",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Garrett Winters",
        sectionD: "4",
        country: "Tokyo",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Ashton Cox",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Cedric Kelly",
        sectionD: "4",
        country: "Edinburgh",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Airi Satou",
        sectionD: "4",
        country: "Tokyo",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Brielle Williamson",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Herrod Chandler",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Rhona Davidson",
        sectionD: "4",
        country: "Tokyo",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Colleen Hurst",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Sonya Frost",
        sectionD: "4",
        country: "Edinburgh",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Jena Gaines",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Quinn Flynn",
        sectionD: "4",
        country: "Edinburgh",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Charde Marshall",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Haley Kennedy",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Tatyana Fitzpatrick",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Michael Silva",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Paul Byrd",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Gloria Little",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Bradley Greer",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Dai Rios",
        sectionD: "4",
        country: "Edinburgh",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Jenette Caldwell",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Yuri Berry",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Caesar Vance",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Doris Wilder",
        sectionD: "4",
        country: "Sidney",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Angelica Ramos",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Gavin Joyce",
        sectionD: "4",
        country: "Edinburgh",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Jennifer Chang",
        sectionD: "4",
        country: "Singapore",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Brenden Wagner",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Fiona Green",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Shou Itou",
        sectionD: "4",
        country: "Tokyo",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Michelle House",
        sectionD: "4",
        country: "Sidney",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Suki Burks",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Prescott Bartlett",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Gavin Cortez",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Martena Mccray",
        sectionD: "4",
        country: "Edinburgh",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Unity Butler",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Howard Hatfield",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Hope Fuentes",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Vivian Harrell",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Timothy Mooney",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Jackson Bradshaw",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Olivia Liang",
        sectionD: "4",
        country: "Singapore",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Bruno Nash",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Sakura Yamamoto",
        sectionD: "4",
        country: "Tokyo",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Thor Walton",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Finn Camacho",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Serge Baldwin",
        sectionD: "4",
        country: "Singapore",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Zenaida Frank",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Zorita Serrano",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Jennifer Acosta",
        sectionD: "4",
        country: "Edinburgh",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Cara Stevens",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Hermione Butler",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Lael Greer",
        sectionD: "4",
        country: "London",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Jonas Alexander",
        sectionD: "4",
        country: "San Francisco",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Shad Decker",
        sectionD: "4",
        country: "Edinburgh",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Michael Bruce",
        sectionD: "4",
        country: "Singapore",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
      {
        name: "Donna Snider",
        sectionD: "4",
        country: "New York",
        sectionA: "4",
        sectionB: "4",
        sectionC: "4",
        status:'OK'
      },
    ],
  };

  return (
    <div className="p-3">
      <Card className="slide m-auto p-2">
        <MDBDataTable striped bordered small hover data={data} />
      </Card>
    </div>
  );
};

export default Status;
