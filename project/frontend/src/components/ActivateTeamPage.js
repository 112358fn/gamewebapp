import React from 'react';
import DataProvider from './DataProvider'
import ActivationForm from './ActivationForm'

const ActivateTeamPage = (props) => {
    console.log(props)
    return (
        <div className='container'>
            <h2>Create a team:</h2>
            <DataProvider 
            endpoint={"http://188.166.6.13:8000/api/team/"+props.match.params.id+'/'}
            dataConsumer={data =>
                <ActivationForm data={data} endpoint={"http://188.166.6.13:8000/api/team/update/"+props.match.params.id+'/'}/>
            }
            />
        </div>
    )
};

export default ActivateTeamPage