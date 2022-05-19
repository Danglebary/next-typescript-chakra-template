import { Heading } from '@chakra-ui/react'
import Page from '../components/layout/page'

const NotFound = () => {
    return (
        <Page
            title="Next-Typescript-Chakra: 404"
            description="404 not found page of application"
        >
            <Heading textAlign="center">404: not found</Heading>
        </Page>
    )
}

export default NotFound
