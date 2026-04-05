import { useNavigate } from 'react-router-dom'
import SlideToConfirm from '../components/SlideToConfirm'
import Screen9RobotArrived from './Screen9RobotArrived'

export default function Screen10Unlock() {
  const navigate = useNavigate()

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Background: Screen9 frozen as backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Screen9RobotArrived />
      </div>

      {/* Dim overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-20 px-4 pt-5 pb-10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />

        <h2 className="font-bold text-lg text-gray-900 mb-2">Confirm you received your order</h2>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          This action can't be undone. You can still contact support if there's any issue.
        </p>

        <SlideToConfirm onConfirm={() => navigate('/order/delivered')} />

        <button
          onClick={() => navigate('/order/robot-arrived')}
          className="w-full text-center text-gray-400 text-sm mt-4 py-2"
        >
          Go back
        </button>
      </div>
    </div>
  )
}
