import { Heading } from '@chakra-ui/react'
import Page from '../components/layout/page'

const Home = () => {
    return (
        <Page
            title="Next-Typescript-Chakra: Home"
            description="Home page of application"
        >
            <Heading textAlign="center">Hello World</Heading>
        </Page>
    )
}

export default Home
