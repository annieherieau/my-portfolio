import { Button, Form, InputGroup } from "react-bootstrap";


export default function Contact() {

  return (
    <section id="contact">
      <h1>Contact</h1>
      <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ?</p><p>Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Objet" required></Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Control as="textarea" rows={3} required placeholder="Votre message"/>
        </Form.Group>
        <Form.Group>
        <Form.Check type="checkbox" label="J'accepte d'être recontacté(e)" required/>
        </Form.Group>
        <Form.Group>
        <Button variant="primary" type="submit" >Envoyer</Button>
        </Form.Group>
      </Form>
    </section>
  );
}
