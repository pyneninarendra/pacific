import React from 'react'
import Filter from './Filter'
import Flights from './Flights'

function MainContent() {
    return (
        <main>
            <div className="sideNav">
				<Filter />
			</div>
			<div className="main">
				<Flights />
			</div>
        </main>
    )
}

export default MainContent
