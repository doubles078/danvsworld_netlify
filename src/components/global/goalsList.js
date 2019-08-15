import React from 'react'

const GoalsList = () => {
  return (
    <div className="GoalsList">
      <ul className="GoalsList__list" style={{}}>
        <li className="GoalsList__list-item">
          Build and launch a full stack tech project
        </li>
        <li className="GoalsList__list-item">
          Learn basic reading & writing in Chinese
        </li>
        <li className="GoalsList__list-item">
          Earn my purple belt in Brazilian jiu jitsu
        </li>
        <li className="GoalsList__list-item">
          Complete my first triathlon and half marathon
        </li>
        <li className="GoalsList__list-item">
          Read 20 books -{' '}
          <a
            href="https://www.goodreads.com/user/show/37996530-daniel-donohue"
            rel="noopener noreferrer"
            target="_blank"
            style={{ padding: 0 }}
          >
            my goodreads
          </a>
        </li>
      </ul>
    </div>
  )
}

export default GoalsList
