import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Mike' des='Lorem ipsum dolor sit amet consectetur'/><Card user='Keerthu' des='Lorem ipsum dolor sit amet consectetur'/>
      <Card user='Manu' des='Lorem ipsum dolor sit amet consectetur'/>
    </div>
  )
}

export default App