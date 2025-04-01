import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    bannerObject: {},
    lastestMatchObject: {},
    recentMatchList: [],
    isLoader: true,
  }

  componentDidMount() {
    this.teamMatchesApi()
  }

  bgColorStyle = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    if (id === 'CSK') return '#f7db00'
    if (id === 'RCB') return '#DA1818'
    if (id === 'KKR') return '#5755a7'
    if (id === 'KXP') return '#a4261d'
    if (id === 'RR') return '#DA1818'
    if (id === 'MI') return '#045093'
    if (id === 'SH') return '#FB641E'
    return '#17449B'
  }

  teamMatchesApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matches = await response.json()
    const bannerObjects = {teamBannerUrl: matches.team_banner_url}
    const lastestMatchObjects = {
      umpires: matches.latest_match_details.umpires,
      result: matches.latest_match_details.result,
      manOfTheMatch: matches.latest_match_details.man_of_the_match,
      id: matches.latest_match_details.id,
      date: matches.latest_match_details.date,
      venue: matches.latest_match_details.venue,
      competingTeam: matches.latest_match_details.competing_team,
      competingTeamLogo: matches.latest_match_details.competing_team_logo,
      firstInnings: matches.latest_match_details.first_innings,
      secondInnings: matches.latest_match_details.second_innings,
      matchStatus: matches.latest_match_details.match_status,
    }

    const recentMatchLists = matches.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    console.log(recentMatchLists)

    this.setState({
      lastestMatchObject: lastestMatchObjects,
      bannerObject: bannerObjects,
      recentMatchList: recentMatchLists,
      isLoader: false,
    })
  }

  render() {
    const {recentMatchList, isLoader} = this.state
    const {lastestMatchObject, bannerObject} = this.state

    return (
      <>
        {isLoader ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div
            style={{backgroundColor: this.bgColorStyle()}}
            className="bg-contaainer"
          >
            <div className="banner-card">
              <img
                className="banner-image"
                src={bannerObject.teamBannerUrl}
                alt="team banner"
              />
            </div>
            <div className="latest-container">
              <p className="latesh-match">Latest Matches</p>
            </div>

            <LatestMatch lastestMatchObject={lastestMatchObject} />
            <ul className="match-card-list">
              {recentMatchList.map(each => (
                <MatchCard key={each.id} recentMatchItem={each} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
