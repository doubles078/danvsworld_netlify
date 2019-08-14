import React from 'react'
const defaultState = {
  activeTag: 'test',
  setActiveTag: () => {},
}
const TagContext = React.createContext(defaultState)

class TagProvider extends React.Component {
  state = {
    activeTag: '',
  }

  setActiveTag = tag => {
    this.setState({ activeTag: tag })
  }

  render() {
    const { children } = this.props
    const { activeTag } = this.state
    return (
      <TagContext.Provider
        value={{
          activeTag,
          setActiveTag: this.setActiveTag,
        }}
      >
        {children}
      </TagContext.Provider>
    )
  }
}
export default TagContext
export { TagProvider }
