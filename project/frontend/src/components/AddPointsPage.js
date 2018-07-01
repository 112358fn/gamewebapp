import React from 'react';
import AddPointsForm from './AddPointsForm'

const AddPointsPage = (props) => {
    console.log(props)
    return (
        <div>
            Add points to the team: {props.match.params.name}
            <AddPointsForm team_id={props.match.params.id} endpoint={"http://192.168.0.10:8000/api/distance/"}/>
        </div>
    )
};

export default AddPointsPage