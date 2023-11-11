import { zora, zoraTestnet } from "@wagmi/core/chains"

export const CHAIN_ID = process.env.NEXT_PUBLIC_TESTNET ? zoraTestnet.id : zora.id
export const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
export const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
export const SPOTIFY_STATE_KEY = "spotify_auth_state"
export const SPOTIFY_TRACK_ID = "4CvTytBa0rfmQKii8JHCXa"
export const SPOTIFY_ARTIST_ID = "3ppQEG71r7jVpI8RudzycF"
export const TITLE = process.env.NEXT_PUBLIC_TITLE
export const ARTIST = process.env.NEXT_PUBLIC_ARTIST
