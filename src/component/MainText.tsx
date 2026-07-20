export const MainText = ({ textOpacity }: { textOpacity: number }) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center text-center text-white text-4xl font-bold">
          <div
            className="inline-block [writing-mode:vertical-rl] text-2xl"
            style={{
              fontFamily: '"JTCナミキ特太楷書", serif',
              opacity: textOpacity,
            }}
          >
            <span>総本宮 京都</span>
            <br />
            <span className="text-5xl">愛宕神社</span>
          </div>
        </div>
    )
}