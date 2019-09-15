
export const addCommentAction = commentObj => ({
         type: "addComment",
         data: commentObj
       });

export const deleteCommentAction = index => ({
         type: "deleteComment",
         data: index
       });