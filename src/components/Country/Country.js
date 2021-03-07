import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, alpha2Code } = props.country;
    const history = useHistory();
    const buttonHandler = (countryname) => {
        history.push(`/country/${countryname}`);
    }

    const btnStyle = {
        width: "200px",
        height: "30px",
        backgroundColor: "purple",
        padding: "10px",
        color: "white",
        border: "none",
        borderRadius: "10px",

    }
    return (
        <div>
            <h5>Country Name: {name}</h5>
            <p>Country Code: {alpha2Code}</p>
            {/* <Link to={`/country/${name}`}>
                <button style={btnStyle}>Show details of {name}</button>
            </Link> */}

            <button style={btnStyle} onClick={() => buttonHandler(name)}>Click me for Details</button>
        </div>
    );
};

export default Country;