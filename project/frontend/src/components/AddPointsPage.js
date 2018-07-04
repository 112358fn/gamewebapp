import React from 'react';
import AddPointsForm from './AddPointsForm'
import TeamPage from './TeamPage'

const AddPointsPage = (props) => {
    console.log(props)
    return (
        <div className="container">
            <TeamPage {...props} judge={true}/>
            <AddPointsForm 
                team_id={props.match.params.id} 
                endpoint={"http://174.138.11.98/api/distance/"}/>

        </div>
    )
};

export default AddPointsPage