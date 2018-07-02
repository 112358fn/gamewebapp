import React from 'react';
import AddPointsForm from './AddPointsForm'
import TeamPage from './TeamPage'

const AddPointsPage = (props) => {
    console.log(props)
    return (
        <div className="container">
            <TeamPage {...props}/>
            <AddPointsForm 
                team_id={props.match.params.id} 
                endpoint={"http://188.166.6.13:8000/api/distance/"}/>

        </div>
    )
};

export default AddPointsPage