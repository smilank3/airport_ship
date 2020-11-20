

import sendRequest from '../../lib/sendRequest'


import React from 'react'

class Dashboard extends React.Component{






    render(){


    	return (<div>
    		<h1>{this.props.userProfile.firstName} {this.props.userProfile.lastName}'s Dashboard</h1>
            <p>This page needs update</p>
    	</div>)
    }
}

export default Dashboard;