import React from 'react';

const AddPointsPage = (props) => {
    console.log(props)
    return (
        <div>
            Add points to the team: {props.match.params.name}
        </div>
    )
};

export default AddPointsPage