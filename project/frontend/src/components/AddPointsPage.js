import React from 'react';
import AddPointsForm from './AddPointsForm'
import TeamPage from './TeamPage'

const AddPointsPage = (props) => {
    console.log(props)
    return (
        <div>
            <TeamPage {...props}/>
            Add points to the team:
            <AddPointsForm 
                team_id={props.match.params.id} 
                endpoint={"http://192.168.0.10:8000/api/distance/"}/>

        </div>
    )
};

export default AddPointsPage