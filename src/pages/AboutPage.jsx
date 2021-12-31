import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'
function AboutPage() {
    return (
        <Card>
            <div className="card-body">
            <h1>About This Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a debitis sint quis quos explicabo dolores quaerat rem cumque rerum recusandae quas necessitatibus voluptas reiciendis harum accusamus quae doloribus quo,</p>
            <p> adipisci at! Modi obcaecati distinctio accusamus, provident velit voluptates iusto numquam exercitationem error laudantium? A cumque iure cupiditate? Consequuntur, fugiat.</p>
            <Link to='/'>Back To Home</Link>
            </div>
        </Card>
    )
}

export default AboutPage
