import React from 'react';
import { DiscussionEmbed } from "disqus-react";


const CommentsSection = (props) => {
    const disqusShortname = "testing";
    const disqusConfig = {
      identifier: props.id,
      title: props.title,
    };

    return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}

export default CommentsSection
