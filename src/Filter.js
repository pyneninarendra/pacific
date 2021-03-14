import React, { Component } from 'react'
import axios from 'axios';

export default class Filter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }

    componentDidMount(){
        axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
        .then(response => {
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        // let {posts} = this.state;
        return (
            <div className='card filterWrapper'>
                <div className='card-header'>
                    <h2 className='text-left'>Filters</h2>
                </div>
                <div className='card-body'>
                    <div className='card launchYear'>
                        <div className='card-header'>
                            <span>Launch Year</span>
                        </div>
                        <div className='card-body'>
                            <ul className='launchYearWrapper'>
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank" className='active'>2006</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2008</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2009</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2010</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2011</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2012</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2013</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2014</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2015</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2016</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2017</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2018</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2019</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2020</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2021</a>
                                </li>                                
                                <li className='filterLaunchYear'>
                                    <a href="/#" target="_blank">2007</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='card successfulLaunch'>
                        <div className='card-header'>
                            <span>Successful Launch</span>
                        </div>
                        <div className='card-body'>                            
                            <ul className='launchWrapper'>
                                <li className='filterLaunch'>
                                    <a href="/#" target="_blank">True</a>
                                </li>
                                <li className='filterLaunch'>
                                    <a href="/#" target="_blank">False</a>
                                </li>   
                            </ul>  
                        </div>
                    </div>
                    <div className='card successfulLanding'>
                        <div className='card-header'>
                        <span>Successful Landing</span>
                        </div>
                        <div className='card-body'>                            
                            <ul className='landingWrapper'>
                                <li className='filterLanding'>
                                    <a href="/#" target="_blank">True</a>
                                </li>
                                <li className='filterLanding'>
                                    <a href="/#" target="_blank">False</a>
                                </li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
