import { useRouter } from 'next/router'
import React from 'react'

const SingleNews = () => {
  const {query} = useRouter()
  const {slug} = query
  console.log(slug);
  return (
     <div>SingleNews</div>
  )
}

export default SingleNews