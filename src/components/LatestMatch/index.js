// Write your code here
import './index.css'

const LatestMatch = props => {
  const {lastestMatchObject} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = lastestMatchObject

  const css = () => {
    if (matchStatus === 'Won') return 'green'
    return 'red'
  }

  return (
    <div className="lastest-match-card">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          className="lastest-match-img"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div>
        <p>{umpires}</p>
        <p>{manOfTheMatch}</p>
        <p>{firstInnings}</p>
        <p>{secondInnings}</p>
        <p style={{color: css()}}>{matchStatus}</p>
      </div>
    </div>
  )
}

export default LatestMatch
