import type { NextPage } from 'next'
import tw from 'twin.macro'
import { Text } from '../components/atoms/text'

const Home: NextPage = () => (
  <div>
    <Text css={tw`text-xl`}>Hello Next.js</Text>
  </div>
)

export default Home
