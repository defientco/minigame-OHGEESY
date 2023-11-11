import { useRouter } from "next/router"
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { toast } from "react-toastify"
import playTrack from "../lib/spotify/playTrack"
import followArtist from "../lib/spotify/followArtist"
import saveTrack from "../lib/spotify/saveTrack"
import getAccessToken from "../lib/spotify/getAccessToken"
import createPlayer from "../lib/spotify/createPlayer"
import login from "../lib/spotify/login"
import getCurrentUserProfile from "../lib/spotify/getUser"

const SpotifyContext = createContext(null)

const SpotifyProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [deviceId, setDeviceId] = useState(null)
  const { query } = useRouter()

  const playSong = useCallback(async () => {
    await followArtist(accessToken)
    await saveTrack(accessToken)
    await playTrack(accessToken, deviceId)
  }, [accessToken, deviceId])

  useEffect(() => {
    const onReady = async (deviceIdentity) => {
      setDeviceId(deviceIdentity)
    }

    const init = async () => {
      const response = await getCurrentUserProfile(accessToken)
      toast.success(`Welcome ${response.display_name}`)
      await createPlayer(accessToken, { onReady })
    }
    if (!accessToken) return
    init()
  }, [accessToken])

  useEffect(() => {
    const init = async () => {
      const response = await getAccessToken(query.code)
      setAccessToken(response)
    }
    init()
  }, [query])

  const value = useMemo(() => ({ deviceId, login, playSong }), [deviceId, playSong])

  return <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
}

export const useSpotifyProvider = () => {
  const context = useContext(SpotifyContext)
  if (!context) {
    throw new Error("useSpotifyProvider must be used within a SpotifyProvider")
  }
  return context
}

export default SpotifyProvider
