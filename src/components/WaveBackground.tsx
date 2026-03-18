import { cn } from '@/lib/utils'

export function WaveBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 w-full overflow-hidden leading-[0] z-[-1] pointer-events-none opacity-40',
        className,
      )}
    >
      <svg
        className="relative block w-[200%] h-[15vh] min-h-[100px] max-h-[250px] animate-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" className="fill-primary/20" />
          <use href="#gentle-wave" x="48" y="3" className="fill-primary/40" />
          <use href="#gentle-wave" x="48" y="5" className="fill-primary/10 animate-wave-slow" />
          <use href="#gentle-wave" x="48" y="7" className="fill-primary/50" />
        </g>
      </svg>
    </div>
  )
}
