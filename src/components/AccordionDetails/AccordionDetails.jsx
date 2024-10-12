import Accordion from "react-bootstrap/Accordion";
import "./AccordionDetails.css"

function AccordionDetails({ headTitle, textBody, lenght }) {
  return (
    <Accordion.Item eventKey={lenght}>
      <Accordion.Header>{headTitle}</Accordion.Header>
      <Accordion.Body>{textBody}</Accordion.Body>
    </Accordion.Item>
  );
}

export default AccordionDetails;
