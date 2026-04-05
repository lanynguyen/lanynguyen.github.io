interface Props {
  activeStep: 1 | 2 | 3 | 4
}

const steps = [
  { icon: '🏪', label: 'Store' },
  { icon: '🛒', label: 'Shopping' },
  { icon: '🤖', label: 'Robot' },
  { icon: '🏠', label: 'Home' },
]

export default function ProgressStepper({ activeStep }: Props) {
  return (
    <div className="flex items-center w-full px-2 py-3">
      {steps.map((step, i) => {
        const stepNum = i + 1
        const isCompleted = stepNum < activeStep
        const isActive = stepNum === activeStep
        return (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all ${
                  isActive
                    ? 'bg-[#43B02A] shadow-sm'
                    : isCompleted
                    ? 'bg-[#43B02A]'
                    : 'bg-gray-100'
                }`}
              >
                <span className="text-base">{step.icon}</span>
              </div>
              <span
                className={`text-[10px] font-medium ${
                  isActive || isCompleted ? 'text-[#43B02A]' : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] mb-4 mx-1 transition-all ${
                  isCompleted ? 'bg-[#43B02A]' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
