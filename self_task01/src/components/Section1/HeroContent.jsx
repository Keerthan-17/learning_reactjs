import HeroButton from './HeroButton'
import HeroLabel from './HeroLabel'
import HeroTitle from "./HeroTitle"

const HeroContent = () => {
  return (
    <div className="absolute h-5/8 w-3/7 mt-40 ml-20">
      <HeroLabel />
      <HeroTitle />
      <HeroButton />
    </div>
  )
}

export default HeroContent