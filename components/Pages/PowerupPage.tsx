import { useState } from "react"
import PowerUpModal from "../PowerUpModal"
import { useSpotifyProvider } from "../../providers/SpotifyProvider"

const PowerUpPage = () => {
  const [openModal, setOpenModal] = useState(true)
  const { deviceId, playSong } = useSpotifyProvider()

  const handleClick = () => {
    setOpenModal(false)
    if (deviceId) playSong()
  }

  return (
    <div>
      {openModal && (
        <div>
          <PowerUpModal handleClick={handleClick} />
        </div>
      )}
    </div>
  )
}

export default PowerUpPage
