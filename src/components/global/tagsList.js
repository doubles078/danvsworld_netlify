import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const TagsList = (props) => {
    let uniqueTags = [];

    function removeSpaceAndLowerCase(tag) {
        return tag.toLowerCase().replace(/\s/g, '');
    }
    
    function createUniqueTagsFromList(list, emptyarray) {
        list.forEach(function(item) {
            if(emptyarray.indexOf(item) < 0) {
                emptyarray.push(item);
            }
        });

        return emptyarray;
    }

    //For each blog post, feed create unique tags function all of the posts tags
    //Then return a unique array from all of the tags
    props.blogposts.map((edge) => {
        let list = edge.node.tags;
        createUniqueTagsFromList(list, uniqueTags);
    })

    return (
        <div className="taglist-card">
            <h3>
                Categories
            </h3>
            <div>
                <ul>
                    {uniqueTags.map((tag) => (
                        <li key={tag}>
                            <Link to={removeSpaceAndLowerCase(tag)} >
                                #{removeSpaceAndLowerCase(tag)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


TagsList.propTypes = {
    blogposts: PropTypes.array.isRequired
}


export default TagsList
