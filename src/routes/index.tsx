import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { MainBg } from '#/component/MainBg.tsx';
import { MainText } from '#/component/MainText.tsx';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)
  const [textOpacity, setTextOpacity] = useState(0)

  useEffect(() => {
    const initialDuration = 1500
    const phaseDuration = 3000
    const step = 30
    let elapsed = 0

    const timerId = window.setInterval(() => {
      elapsed += step

      if (!isInitialized) {
        if (elapsed >= initialDuration) {
          elapsed = 0
          setIsInitialized(true)
          setActiveImageIndex(1)
        } else {
          setTextOpacity(elapsed / initialDuration)
        }
      } else {
        if (elapsed >= phaseDuration) {
          elapsed = 0
          setActiveImageIndex((current) => (current === 1 ? 2 : 1))
          return
        }
      }
    }, step)

    return () => {
      window.clearInterval(timerId)
    }
  }, [isInitialized])

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="flex">
          <div className="absolute p-4 text-center text-white text-xl"
          style={{
              fontFamily: '"JTCナミキ特太楷書", serif',
              opacity: textOpacity,
            }}>
            愛宕神社について
          </div>
          <div className="absolute p-4 text-center text-white text-xl"
          style={{
              fontFamily: '"JTCナミキ特太楷書", serif',
              opacity: textOpacity,
            }}>
            愛宕神社について
          </div>
          <div className="absolute p-4 text-center text-white text-xl"
          style={{
              fontFamily: '"JTCナミキ特太楷書", serif',
              opacity: textOpacity,
            }}>
            愛宕神社について
          </div>
          <div className="absolute p-4 text-center text-white text-xl"
          style={{
              fontFamily: '"JTCナミキ特太楷書", serif',
              opacity: textOpacity,
            }}>
            愛宕神社について
          </div>
          <div className="absolute p-4 text-center text-white text-xl"
          style={{
              fontFamily: '"JTCナミキ特太楷書", serif',
              opacity: textOpacity,
            }}>
            愛宕神社について
          </div>
        </div>
        <MainBg activeImageIndex={activeImageIndex}/>
        <MainText textOpacity={textOpacity} />
      </div>
      <div className="mt-4 text-center text-lg text-gray-700">
        <p>愛宕神社は、京都市右京区嵯峨にある神社で、火防の神として知られています。</p>
        <p>この神社は、平安時代に創建され、長い歴史を持つ場所です。</p>
      </div>
    </div>
  )
}
