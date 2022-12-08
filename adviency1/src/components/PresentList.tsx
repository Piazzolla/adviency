
const presents = ['bicicleta', 'playstation', 'puta peonza'];

export const PresentList = () => {
  return (
    <div>
      <div className="rows-cols-1 row-cols-md-3 g-3">
        {
          presents.map(element => <p key={element}>{element}</p>)
        }
      </div>
    </div>
  )
}
