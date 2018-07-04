import React from 'react';
import AddPointsForm from './AddPointsForm'
import TeamPageJudge from './TeamPageJudge'

const AddPointsPage = (props) => {
    console.log(props)
    return (
        <div className="container">
            <TeamPageJudge {...props} />
            <AddPointsForm 
                team_id={props.match.params.id} 
                endpoint={"http://174.138.11.98/api/distance/"}/>

        </div>
    )
};

export default AddPointsPage