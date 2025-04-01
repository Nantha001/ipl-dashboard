import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardList: [], isLoader: true}

  componentDidMount() {
    this.teamCardApi()
  }

  teamCardApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamcardData = await response.json()
    const formatData = teamcardData.teams.map(eachObject => ({
      name: eachObject.name,
      id: eachObject.id,
      teamImageUrl: eachObject.team_image_url,
    }))
    this.setState({teamCardList: formatData, isLoader: false})
  }

  render() {
    const {teamCardList, isLoader} = this.state
    return (
      <>
        {isLoader ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-Container">
            <div className="ipl-dashboard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="teamcard-Container">
              {teamCardList.map(each => (
                <TeamCard key={each.id} teamCardItem={each} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
