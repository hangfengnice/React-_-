import React, {useState, useEffect} from 'react'

export default function Comment(props) {
  const {username, content, createdTime} = props.comment
  const {index, onDeleteComment} = props
  let [duration, setDuration] = useState()

  useEffect(() => {
    const timer = setInterval(() => {
      let duration = (Date.now() - createdTime) / 1000;
      duration = duration > 60 ?  `${~~(duration / 60)} 分钟前`: `${~~(Math.max(duration, 1))} 秒前`
      setDuration(duration)
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  // eslint-disable-next-line
  }, [])


  return (
    <div className='comment'>
        <div className='comment-username'>
          <span>{username} </span>：
        </div>
        <p>{content}</p>
        <span className='comment-createdtime'>
          {duration}
        </span>
        <span onClick={() => onDeleteComment(index)} className='comment-delete'>
          删除
        </span>
      </div>
  )
}
