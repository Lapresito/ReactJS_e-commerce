import React from 'react'
import { CircularProgress, Heading} from '@chakra-ui/react'

const Loading = () => {
  return (
    <div><Heading color='violet' as="h2" size="xl">Loading</Heading>
        <CircularProgress isIndeterminate color='green.300' />
    </div>
  )
}

export default Loading