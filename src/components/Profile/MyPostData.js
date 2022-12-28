import React from 'react'

const MyPostData = ({content , postedBy}) => {
  return (
    <>
        <div className="post_card">
            Content :-  {content} <br/><br/>
            PostedBy :- {postedBy}
        </div>
    </>
  )
}

export default MyPostData