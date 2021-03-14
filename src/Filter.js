import React from 'react'

function Filter(props) {
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
                                <li className='filterLaunchYear'>2006</li>                                
                                <li className='filterLaunchYear'>2008</li>                                
                                <li className='filterLaunchYear'>2009</li>                                
                                <li className='filterLaunchYear'>2010</li>                                
                                <li className='filterLaunchYear'>2011</li>                                
                                <li className='filterLaunchYear'>2012</li>                                
                                <li className='filterLaunchYear'>2013</li>                                
                                <li className='filterLaunchYear'>2014</li>                             
                                <li className='filterLaunchYear'>2015</li>                             
                                <li className='filterLaunchYear'>2016</li>                             
                                <li className='filterLaunchYear'>2017</li>                             
                                <li className='filterLaunchYear'>2018</li>                             
                                <li className='filterLaunchYear'>2019</li>                             
                                <li className='filterLaunchYear'>2020</li>                             
                                <li className='filterLaunchYear'>2021</li>                             
                                <li className='filterLaunchYear'>2007</li>
                            </ul>
                        </div>
                    </div>
                    <div className='card successfulLaunch'>
                        <div className='card-header'>
                            <span>Successful Launch</span>
                        </div>
                        <div className='card-body'>                            
                            <ul className='launchWrapper'>
                                <li className='filterLaunch'>True</li>
                                <li className='filterLaunch'>False</li>
                            </ul>  
                        </div>
                    </div>
                    <div className='card successfulLanding'>
                        <div className='card-header'>
                        <span>Successful Landing</span>
                        </div>
                        <div className='card-body'>                            
                            <ul className='landingWrapper'>
                                <li className='filterLanding'>True</li>
                                <li className='filterLanding'>False</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Filter