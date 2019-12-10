import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import TagContext from '../context/TagContext'
const TagsList = props => {
  let uniqueTags = []
  function removeSpaceAndLowerCase(tag) {
    return tag.toLowerCase().replace(/\s/g, '')
  }

  function createUniqueTagsFromList(list, emptyarray) {
    list.forEach(function(item) {
      item = removeSpaceAndLowerCase(item)

      if (emptyarray.indexOf(item) < 0) {
        emptyarray.push(item)
      }
    })

    return emptyarray
  }

  //Then return a unique array from all of the tags
  props.blogposts.map(edge => {
    let list = edge.node.tags
    createUniqueTagsFromList(list, uniqueTags)
  })

  return (
    <TagContext.Consumer>
      {tagcontext => (
        <div className="tagslist">
          <ul className="taglist-scrollbox">
            {uniqueTags.map(tag => (
              <li key={tag}>
                <Link
                  onClick={() => tagcontext.setActiveTag(tag)}
                  to={`/${tag}`}
                >
                  #{tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </TagContext.Consumer>
  )
}

TagsList.propTypes = {
  blogposts: PropTypes.array.isRequired,
}

export default TagsList
