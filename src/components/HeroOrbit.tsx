import { PropsWithChildren } from "react"

export const HeroOrbit = ({children, size, rotation}: PropsWithChildren<{size: number, rotation: number}>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
    <div className='' 
    style={{
        transform: `rotate(${rotation}deg)`,
    height: `${size}px`,
    width: `${size}px`}} >
       {/* animate-spin [animation-duration:30s] */}
      <div className=' inline-flex' style={{
        transform: `rotate(${rotation* -1}deg)`,
      }}>
      {children}
      {/* text-pink-500 hover:text-emerald-300 transition duration-300 */}
      </div>
      </div>
    </div>
  )
}