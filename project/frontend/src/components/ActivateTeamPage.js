import React from 'react';
import DataProvider from './DataProvider'
import Form from './Form'

const ActivateTeamPage = (props) => {
    console.log(props)
    return (
        <div>
            This is from ActivateTeamPage {props.match.params.id} component
            <DataProvider 
            endpoint={"http://localhost:8000/api/team/"+props.match.params.id+'/'}
            dataConsumer={data =>
                <Form data={data} endpoint={"http://localhost:8000/api/team/update/"+props.match.params.id+'/'}/>
            }
            />
        </div>
    )
};

export default ActivateTeamPage