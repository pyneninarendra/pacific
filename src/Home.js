import React, { Component } from 'react'
import Header from './Header'
import Filter from './Filter'
import Flights from './Flights'
import Footer from './Footer'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            filterFlights:''
        }
    }
    
    filterFlights = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }
    
    render() {
        const developer='Narendra Kumar'
        return (
            <div className="mainContainer">            
                <Header />
                <main>
                    <div className="sideNav">
                        <Filter filterFlights={this.props.filterFlights} />
                    </div>
                    <div className="main">
                        <Flights />
                    </div>
                </main>
                <Footer developer={developer} />
            </div>
        )
    }
}

export default Home
