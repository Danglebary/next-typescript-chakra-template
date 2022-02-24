import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'

interface Props {
    children: React.ReactNode
    pageTitle: string
}

const Layout = ({ children }: Props) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Container maxW="container.xl" width="100%" py={4}>
                {children}
            </Container>
        </Box>
    )
}

export default Layout
