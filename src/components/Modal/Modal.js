import ModalBS from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Modal = ({ title, children, open, controls = [], onHide }) => {
  return (
    <ModalBS show={open} onHide={onHide}>
      <ModalBS.Header closeButton>
        <ModalBS.Title>{title}</ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>{children}</ModalBS.Body>

      <ModalBS.Footer>
        {controls.map((control, controlIndex) => (
          <Link to={control.to}>
            <Button key={controlIndex} variant={control.variant} onClick={control.onClick} to={control.to}>
              {control.label}
            </Button>
          </Link>
        ))}

      </ModalBS.Footer>
    </ModalBS>
  )
}

