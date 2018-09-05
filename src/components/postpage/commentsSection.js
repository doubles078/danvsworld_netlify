import React from 'react';

function createMarkup() {
    return {__html: `<div id="disqus_thread"></div>`};
  }

const CommentsSection = () => {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
}

export default CommentsSection
