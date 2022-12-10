
const presents = ['bicicleta', 'playstation', 'puta peonza', 'brazo mecanico', 'chip neuronal'];

// export const PresentList = () => {
//   return (
//     <div>
//       <div className="rows-cols-1 row-cols-md-3 g-3">
//         {
//           presents.map(element => <p key={element}>{element}</p>)
//         }
//       </div>
//     </div>
//   )
// }


import { Card, Text, Button, Row } from "@nextui-org/react";

export const PresentList = () => {
  return (
    <Card css={{ mw: "35em" }}>
      <Card.Header>
        <Text h1>Regalos!</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }} >
        <ul>
          {
            presents.map(element => <li key={element}>
              <Text
                h3
                transform='capitalize'
                weight={'medium'}
              >{element}</Text>
            </li>)
          }
        </ul>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Button size="sm">Agree</Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}