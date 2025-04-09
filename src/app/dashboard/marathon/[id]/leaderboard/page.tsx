import { params } from '@/types/search-params'
import React from 'react'

export default async function LeaderboardPage({params}: {params: params}) {

    const {id} = await params;

  return (
    <div>{id}</div>
  )
}
