
import CardBS from "react-bootstrap/Card";
import { Button } from "../Button/Button";
import { useAppContext } from "../../store/AppContext"


export const Card = ({ image, title, price, description, controls = [], onClick }) => {
  const user = useAppContext()
const { state, dispatch } = useAppContext()

  return (
    <CardBS className="bg-light m-2 shadow-lg  ">
      <CardBS.Img src={image} alt="Cardbs image" />
      <CardBS.Body className="text-center">
        <CardBS.Title>{title}</CardBS.Title>
        <CardBS.Text className="fw-medium" >
          <h5>{price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })}</h5>
        </CardBS.Text>
        <CardBS.Text>
          <h6 className="">{description}</h6>
        </CardBS.Text>

        {controls.map((control, controlIndex) => (
          <Button
            key={controlIndex}
            variant={control.variant}
            onClick={onClick}
            label="Adicionar ao Carrinho"
          />
        ))}
      </CardBS.Body>
    </CardBS>
  );
}

export default Card;

