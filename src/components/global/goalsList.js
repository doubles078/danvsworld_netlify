import React from 'react'

const GoalsList = () => {
  return (
    <div className="GoalsList">
      <ul className="GoalsList__list" style={{}}>
        <li className="GoalsList__list-item">
          50+ users on a personal tech project
        </li>
        <li className="GoalsList__list-item">
          Read a children's book in Chinese
        </li>
        <li className="GoalsList__list-item">
          Purple belt in Brazilian Jiu Jitsu
        </li>
        <li className="GoalsList__list-item">
          Can play the entire{' '}
          <a
            href="https://open.spotify.com/album/7yu7B1B8O07jAFAZEFSRXA"
            target="_blank"
          >
            Artist in the Ambulance
          </a>{' '}
          album on guitar
        </li>
        <li className="GoalsList__list-item">
          Finish my 'to-read' list on{' '}
          <a
            href="https://www.goodreads.com/user/show/37996530-daniel-donohue"
            rel="noopener noreferrer"
            target="_blank"
            style={{ padding: 0 }}
          >
            goodreads
          </a>
        </li>
      </ul>
    </div>
  )
}

export default GoalsList
