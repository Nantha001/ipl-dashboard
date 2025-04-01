import './index.css'

const MatchCard = props => {
  const {recentMatchItem} = props
  const {
    result,
    matchStatus,
    competingTeam,
    competingTeamLogo,
  } = recentMatchItem

  const css = () => {
    if (matchStatus === 'Won') return 'green'
    return 'red'
  }

  return (
    <li>
      <div className="match-card">
        <img
          src={competingTeamLogo}
          className="img"
          alt={`competing team ${competingTeam}`}
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p style={{color: css()}}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
