import Accordion from 'react-bootstrap/Accordion';

function AccordionList() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Chest</Accordion.Header>
        <Accordion.Body>
          Chest is good
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Back</Accordion.Header>
        <Accordion.Body>
          Back is good
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default AccordionList;