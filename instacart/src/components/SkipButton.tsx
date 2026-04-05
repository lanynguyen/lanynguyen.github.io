import { useNavigate } from 'react-router-dom'

interface Props {
  to: string
  label?: string
}

export default function SkipButton({ to, label = 'Next →' }: Props) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(to)}
      className="fixed bottom-5 right-4 bg-gray-800 text-white rounded-full px-4 py-2.5 text-xs font-semibold opacity-70 hover:opacity-100 active:opacity-100 transition-opacity z-50 shadow-lg flex items-center gap-1.5"
    >
      {label}
    </button>
  )
}
