import {
    combinePresetAndAppleSplashScreens,
    defineConfig,
    minimal2023Preset,
} from '@vite-pwa/assets-generator/config'
  
export default defineConfig({
    headLinkOptions: {
        preset: '2023'
    },
    preset: {
        ...combinePresetAndAppleSplashScreens(
            minimal2023Preset, {
                padding: 0.3,
                resizeOptions: { background: 'white', fit: 'contain' },
                linkMediaOptions: {
                    log: true,
                    addMediaScreen: true,
                    basePath: '/',
                    xhtml: false
                },
                png: {
                    compressionLevel: 9,
                    quality: 90
                },
                name: (landscape, size, dark) => {
                    return `apple-splash-${landscape ? 'landscape' : 'portrait'}-${typeof dark === 'boolean' ? (dark ? 'dark-' : 'light-') : ''}${size.width}x${size.height}.png`
                },
            },
            ['iPad Air 9.7"'],
        ),
    },
    images: ['public/logo.svg']
})