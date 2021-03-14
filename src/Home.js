import React, { Component } from 'react'
import Header from './Header'
import Filter from './Filter'
import Flights from './Flights'
import Footer from './Footer'
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            flights:[],
            filteredData:[]
        }
    }
    
    filterFlights = (e) => {
        e.preventDefault();
        e.target.value ? 
        this.setState({
            filteredData: this.state.flights.filter(item => item.launch_year.indexOf(e.target.value)>=0)
        }):
        this.setState({
            filteredData: this.state.flights
        })        
    }

    componentDidMount(){
        axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
        .then(response => {
            this.setState({
                flights: response.data,
                filteredData: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    filterTrueFalse = (e) => {
        console.log(e);
    }

    render() {
        const developer='Narendra Kumar'
        return (
            <div className="mainContainer">            
                <Header />
                <main>
                    <div className="sideNav">
                        <Filter shareData={this.filterFlights} filterTrueFalse={this.filterTrueFalse} />
                    </div>
                    <div className="main">
                        <Flights filteredData={this.state.filteredData}  />
                    </div>
                </main>
                <Footer developer={developer} />
            </div>
        )
    }
}

export default Home
