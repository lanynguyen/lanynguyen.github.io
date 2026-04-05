import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Screen1Checkout from './screens/Screen1Checkout'
import Screen2Summary from './screens/Screen2Summary'
import Screen3Confirm from './screens/Screen3Confirm'
import Screen4Confirmed from './screens/Screen4Confirmed'
import Screen5RobotToStore from './screens/Screen5RobotToStore'
import Screen6Preparing from './screens/Screen6Preparing'
import Screen7ShoppingComplete from './screens/Screen7ShoppingComplete'
import Screen8RobotToYou from './screens/Screen8RobotToYou'
import Screen9RobotArrived from './screens/Screen9RobotArrived'
import Screen10Unlock from './screens/Screen10Unlock'
import Screen11Delivered from './screens/Screen11Delivered'

export default function App() {
  useEffect(() => {
    function updateScale() {
      // phone-outer is 414 × 887px (390px screen + 14px padding each side; 844px screen + 14+14+10+5px chrome)
      const PHONE_W = 414
      const PHONE_H = 887
      const availW = window.innerWidth - 32   // 16px margin each side
      const availH = window.innerHeight - 64  // 32px padding top + bottom
      const scale = Math.min(1, availW / PHONE_W, availH / PHONE_H)
      document.documentElement.style.setProperty('--phone-scale', Math.max(0.4, scale).toFixed(4))
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <BrowserRouter basename="/instacart/dist">
      <div className="phone-scaler">
      <div className="phone-outer">
        <div className="phone-screen">
          <div className="phone-island" />
          <div className="phone-frame">
            <Routes>
              <Route path="/" element={<Screen1Checkout />} />
              <Route path="/checkout" element={<Screen2Summary />} />
              <Route path="/confirm" element={<Screen3Confirm />} />
              <Route path="/order/confirmed" element={<Screen4Confirmed />} />
              <Route path="/order/robot-to-store" element={<Screen5RobotToStore />} />
              <Route path="/order/preparing" element={<Screen6Preparing />} />
              <Route path="/order/shopping-complete" element={<Screen7ShoppingComplete />} />
              <Route path="/order/robot-to-you" element={<Screen8RobotToYou />} />
              <Route path="/order/robot-arrived" element={<Screen9RobotArrived />} />
              <Route path="/order/unlock" element={<Screen10Unlock />} />
              <Route path="/order/delivered" element={<Screen11Delivered />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
        <div className="phone-home-bar" />
      </div>
      </div>
    </BrowserRouter>
  )
}
