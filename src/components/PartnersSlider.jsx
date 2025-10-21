'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

export function PartnersSlider({ partners, className }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance slider every 3 seconds (unless paused)
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [partners.length, isPaused])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + partners.length) % partners.length,
    )
  }

  return (
    <div className={clsx('relative mt-10 flex flex-col items-center w-full', className)}>
      <div className="relative w-full max-w-lg mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute top-1/2 -left-4 lg:-left-16 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-neutral-100"
          aria-label="Previous partner"
        >
          <svg
            className="h-5 w-5 text-neutral-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white cursor-pointer flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsPaused(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 flex items-center justify-center p-8"
            >
              <div className="flex flex-col items-center justify-center gap-4 w-full">
                <Image
                  src={partners[currentIndex][1]}
                  alt={partners[currentIndex][0]}
                  width={300}
                  height={150}
                  className="w-auto h-auto max-w-full max-h-40 object-contain"
                  unoptimized
                  priority={currentIndex === 0}
                />
                <p className="text-center text-sm font-medium text-neutral-600">
                  {partners[currentIndex][0]}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => paginate(1)}
          className="absolute top-1/2 -right-4 lg:-right-16 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-neutral-100"
          aria-label="Next partner"
        >
          <svg
            className="h-5 w-5 text-neutral-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={clsx(
              'h-2 rounded-full transition-all',
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-neutral-500 hover:bg-neutral-300',
            )}
            aria-label={`Go to partner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
