import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false
}

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em'
})

const colors = {
    bg: '#15161a'
}

const styles = {
    global: (props: any) => ({
        body: {
            bg: mode('gray.100', '#15161a')(props)
        }
    })
}

const theme = extendTheme({
    config,
    fonts,
    colors,
    breakpoints,
    styles
})

export default theme
