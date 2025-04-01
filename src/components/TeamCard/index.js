// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardItem} = props
  const {id, teamImageUrl, name} = teamCardItem
  return (
    <Link className="link-item" to={`/team-matches/${id}`}>
      <li>
        <div className="team-card">
          <img className="team-card-img" src={teamImageUrl} alt={name} />
          <p className="team-card-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
