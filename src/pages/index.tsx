import { Heading } from '@chakra-ui/react'
import Layout from '../components/layout/main'

const Home = () => {
    return (
        <Layout pageTitle="Next-Typescript-Chakra: Home">
            <Heading as="h2" textAlign="center">
                Hello World
            </Heading>
        </Layout>
    )
}

export default Home
