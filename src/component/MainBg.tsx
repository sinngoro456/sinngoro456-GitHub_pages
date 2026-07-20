import shaden from '@/assets/Atago-jinja_(Kyoto_city)_shaden.jpg'
import wakamiya from '@/assets/Atago-jinja_(Kyoto)_wakamiya.jpg'


export const MainBg = ({ activeImageIndex}: { activeImageIndex: number;}) => {
  return (
    <div>
      <div
        className="absolute inset-0 bg-black"
      />
      <img
        className="absolute inset-0 h-full w-full object-cover transition-opacity"
        height={1080}
        width={1920}
        style={{
          opacity: activeImageIndex === 1 ? 1 : 0,
          transitionDuration: '3000ms',
        }}
        src={shaden}
        alt=""
      />
      <img
        className="absolute inset-0 h-full w-full object-cover transition-opacity"
        height={1080}
        width={1920}
        style={{
          opacity: activeImageIndex === 2 ? 1 : 0,
          transitionDuration: '3000ms',
        }}
        src={wakamiya}
        alt=""
      />
    </div>
  )
}