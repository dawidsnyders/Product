import { useState } from 'react'
import { X, ArrowRight, Layers, Coins, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  isOpen: boolean
  onClose: () => void
}

type Step = {
  id: string
  title: string
  description: string
  features: { icon: typeof Layers; title: string; description: string }[]
  illustration: string
}

const steps: Step[] = [
  {
    id: 'welcome',
    title: 'What are you looking to do?',
    description:
      'Multiply creates leveraged yield positions in a single click. Tell us what you\'re interested in and we\'ll point you in the right direction.',
    features: [
      {
        icon: TrendingUp,
        title: 'Earn more on my SOL',
        description: 'Amplify SOL staking yield with zero price liquidation risk',
      },
      {
        icon: Coins,
        title: 'Earn yield on stablecoins',
        description: 'Capture rate spreads between stablecoins with zero price risk',
      },
      {
        icon: Layers,
        title: 'Amplify real-world asset yield',
        description: 'Leverage yield from institutional-grade RWAs like PRIME',
      },
      {
        icon: Sparkles,
        title: 'Just browsing',
        description: 'Explore all available Multiply strategies',
      },
    ],
    illustration: 'Multiply overview — looping animation showing deposit → leverage → yield',
  },
  {
    id: 'how-it-works',
    title: 'How Multiply Works',
    description:
      'Multiply automates what DeFi power users do manually: deposit an asset, borrow against it, swap back, and repeat. All in one atomic transaction.',
    features: [
      {
        icon: Layers,
        title: 'One-Click Leverage',
        description: 'Flash loans handle the entire loop in a single transaction',
      },
      {
        icon: ShieldCheck,
        title: 'Built-In Protections',
        description: 'Stake-rate oracles, partial liquidation, and auto-deleverage',
      },
      {
        icon: TrendingUp,
        title: 'Amplified Yield',
        description: 'Net APY = (Collateral Yield × Leverage) − (Borrow Rate × (Leverage − 1))',
      },
      {
        icon: Coins,
        title: 'Adjust Anytime',
        description: 'Increase, decrease leverage, deposit more, or close — all with one click',
      },
    ],
    illustration: 'Step-by-step: Deposit → Flash Borrow → Swap → Collateralize → Borrow to Repay',
  },
  {
    id: 'recommendation',
    title: 'Our Recommendation',
    description:
      'Based on your interest, here\'s where we\'d start.',
    features: [
      {
        icon: TrendingUp,
        title: 'JitoSOL Multiply',
        description: '14.52% Net APY at up to 10x leverage. Zero liquidation risk from SOL price.',
      },
      {
        icon: ShieldCheck,
        title: 'Why This Strategy',
        description: 'Highest yield LST. Deepest liquidity. Jito Market enables 10x with eMode.',
      },
      {
        icon: Sparkles,
        title: '8,000 JTO/week Incentives',
        description: 'Active campaign boosting yields for JitoSOL Multiply.',
      },
    ],
    illustration: 'JitoSOL strategy card preview with APY chart',
  },
]

export function WalkthroughModal({ isOpen, onClose }: Props) {
  const [currentStep, setCurrentStep] = useState(0)

  if (!isOpen) return null

  const step = steps[currentStep]
  const isLastStep = currentStep === steps.length - 1
  const isFirstStep = currentStep === 0

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 z-[80]" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
        <div
          className="w-full max-w-[860px] bg-white border border-border rounded-2xl overflow-hidden shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress bar — segmented, matching How It Works screenshots */}
          <div className="flex gap-1.5 px-6 pt-5">
            {steps.map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-1 rounded-full flex-1 transition-colors',
                  i <= currentStep ? 'bg-brand' : 'bg-border'
                )}
              />
            ))}
          </div>

          {/* Close */}
          <div className="flex justify-end px-5 pt-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-bg-secondary transition-colors cursor-pointer"
            >
              <X size={18} className="text-text-muted" />
            </button>
          </div>

          {/* Two-panel content */}
          <div className="flex min-h-[400px]">
            {/* Left: illustration placeholder */}
            <div className="w-[42%] bg-bg-secondary border-r border-border flex items-center justify-center p-6">
              <div className="w-full h-full rounded-xl bg-white border border-border flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-dim flex items-center justify-center mx-auto mb-3">
                    <Layers size={28} className="text-brand" />
                  </div>
                  <p className="text-[11px] text-text-muted max-w-[180px] leading-relaxed">
                    {step.illustration}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="flex-1 p-6 flex flex-col">
              <h2 className="text-[20px] font-semibold text-text-primary mb-1.5">
                {step.title}
              </h2>
              <p className="text-[13px] text-text-secondary mb-5 leading-relaxed">
                {step.description}
              </p>

              <div className="flex-1 space-y-2">
                {step.features.map((feature, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex items-start gap-3 p-3 rounded-xl transition-all',
                      isFirstStep
                        ? 'border border-border hover:border-brand hover:bg-brand-dim/30 cursor-pointer'
                        : ''
                    )}
                    onClick={isFirstStep ? () => setCurrentStep(1) : undefined}
                  >
                    <div className="w-8 h-8 rounded-lg bg-bg-tertiary flex items-center justify-center shrink-0">
                      <feature.icon size={16} className="text-brand" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-text-primary">
                        {feature.title}
                      </div>
                      <div className="text-[12px] text-text-secondary mt-0.5">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-center">
                <button className="text-[12px] text-brand hover:text-brand-light transition-colors cursor-pointer font-medium">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Footer navigation — matches "Previous / Next" pattern from screenshots */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-border">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className={cn(
                'px-5 py-2.5 rounded-lg text-[14px] font-medium transition-colors cursor-pointer',
                isFirstStep
                  ? 'text-text-muted cursor-default'
                  : 'bg-bg-secondary text-text-primary hover:bg-bg-tertiary border border-border'
              )}
              disabled={isFirstStep}
            >
              Previous
            </button>

            <button
              onClick={() => {
                if (isLastStep) {
                  onClose()
                } else {
                  setCurrentStep(currentStep + 1)
                }
              }}
              className="px-5 py-2.5 rounded-lg text-[14px] font-medium bg-brand text-white hover:bg-brand-light transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {isLastStep ? 'Get Started' : 'Next'}
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
