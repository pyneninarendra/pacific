import React, { Component } from 'react'

 class Flights extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              flight:null
         }
     }

     
     render(){
        return (
            <div>
               { 
               <ul className='flights'>
                    {
                        this.props.filteredData.map(item => <li key={item.flight_number}>
                            <div className='flightImg'>
                                <img src={item.links.mission_patch_small} alt={item.mission_name} />
                            </div>
                            <div className='captionWrapper'>
                                <p className='missionName'>{item.mission_name}{" "}#{item.flight_number}</p>
                                <p className='missionId'>Mission Ids:{" "}<span>{item.mission_id}</span></p>
                                <p className='launchYear'>Launch Year:{" "}<span>{item.launch_year}</span></p>
                                <p className='succLaunch'>Successful Launch:{" "}<span>{item.launch_success}</span></p>
                                <p className='succLanding'>Successful Landing:{" "}<span>{item.launch_landing}</span></p>
                            </div>
                        </li>)
                    }
                </ul>
               }
            </div>
        )
    }
}

export default Flights
