'use client'

import Image from 'next/image'
import clsx from 'clsx'

export function PartnersTicker({ partners, className }) {
  // Split partners into two rows of 6 logos each
  const midpoint = Math.ceil(partners.length / 2)
  const firstRow = partners.slice(0, midpoint)  // First 6 logos
  const secondRow = partners.slice(midpoint)    // Last 6 logos

  return (
    <div className={clsx('w-full space-y-8 sm:space-y-12 lg:space-y-16', className)}>
      <style jsx>{`
        .ticker-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 1rem 0;
        }

        @media (min-width: 640px) {
          .ticker-container {
            padding: 1.5rem 0;
          }
        }

        @media (min-width: 1024px) {
          .ticker-container {
            padding: 2rem 0;
          }
        }

        .ticker-content {
          display: flex;
          animation: scroll 40s linear infinite;
        }

        .ticker-content-reverse {
          display: flex;
          animation: scroll-reverse 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-content:hover,
        .ticker-content-reverse:hover {
          animation-play-state: paused;
        }

        .ticker-group {
          display: flex;
          flex-shrink: 0;
        }

        .ticker-item {
          flex-shrink: 0;
          padding: 0 1.5rem;
        }

        @media (min-width: 640px) {
          .ticker-item {
            padding: 0 2rem;
          }
        }

        @media (min-width: 768px) {
          .ticker-item {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .ticker-item {
            padding: 0 3rem;
          }
        }
      `}</style>

      {/* First row - scrolling left */}
      <div className="ticker-container">
        <div className="ticker-content">
          {/* First group */}
          <div className="ticker-group">
            {firstRow.map((partner, index) => (
              <div key={`first-a-${index}`} className="ticker-item">
                <Image
                  src={partner[1]}
                  alt={partner[0]}
                  width={200}
                  height={100}
                  className="w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
          {/* Duplicate group for seamless loop */}
          <div className="ticker-group">
            {firstRow.map((partner, index) => (
              <div key={`first-b-${index}`} className="ticker-item">
                <Image
                  src={partner[1]}
                  alt={partner[0]}
                  width={200}
                  height={100}
                  className="w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10" />
      </div>

      {/* Second row - scrolling in reverse direction */}
      <div className="ticker-container">
        <div className="ticker-content-reverse" style={{ animationDirection: 'reverse' }}>
          {/* First group */}
          <div className="ticker-group">
            {secondRow.map((partner, index) => (
              <div key={`second-a-${index}`} className="ticker-item">
                <Image
                  src={partner[1]}
                  alt={partner[0]}
                  width={200}
                  height={100}
                  className="w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
          {/* Duplicate group for seamless loop */}
          <div className="ticker-group">
            {secondRow.map((partner, index) => (
              <div key={`second-b-${index}`} className="ticker-item">
                <Image
                  src={partner[1]}
                  alt={partner[0]}
                  width={200}
                  height={100}
                  className="w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  )
}