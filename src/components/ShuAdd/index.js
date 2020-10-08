import React from 'react';
import PropTypes from 'prop-types';
// import ReusableForm from '..ShuReusableForm';
// import { useFirestore } from 'react-redux-firebase';
import { Button, Form, Container } from "react-bootstrap";
// import Firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

	// function addShuToFirestore(event) {
	// 	event.preventDefault();
	// 	props.onNewShuCreation();

	// 	return firestore.collection('shus').add({
  //     brand: event.target.brand.value,
  //     model: event.target.model.value,
  //     width: event.target.width.value,
  //     size: event.target.size.value,
	// 		date: event.target.date.value,
  //     timeOpen: firestore.FieldValue.serverTimestamp(),
  //     type: event.target.type.value,
  //     color: event.target.color.value,
	// 	});
	// }

function ShuAdd(props) {
	return( <React.Fragment>
	<Container className = "containertite">
		<h1>source from shoe api DUH-DOY</h1>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group controlId = 'shuTitle'>
          <Form.Control
            type='text'
            name='brand'
            placeholder= 'Brand API'
            defaultValue= {props.brand}
            />
        </Form.Group>
				<Form.Group>
          <Form.Control
            type='text'
            name='type'
            placeholder='Type'
            defaultValue= {props.type} />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type='text'
            name='model'
            placeholder='Model'
            defaultValue={props.model}/>
        </Form.Group>

        <Form.Group>
					<p></p>
          <Form.Control
            type='text'
            name='quality'
            placeholder='Shoe Condition'
            defaultValue= {props.date} />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type='text'
            name='width'
            placeholder='What was the Width?' />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type='number'
            name='size'
            placeholder='Size' />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type='text'
            name='color'
            placeholder='Colorway'
            defaultValue= {props.date} />
        </Form.Group>
				
				<Button className='mb-2' variant="info" type='submit'>Add Shu</Button>
          {/* <Button className='mb-2' variant="info" type='submit'>{props.buttonText}</Button> */}
      </Form>
			</Container>
    </React.Fragment>
	

	// <ReusableForm
	// 			formSubmissionHandler={addShuToFirestore}
	// 			buttonText="add shu"
	// 		/>

	// return (
	// 	<React.Fragment>
	// 		<ShuAdd/>
	// 	</React.Fragment>
	// );
// }
	);
}
ShuAdd.propTypes = {
	onNewShuCreation: PropTypes.func,
	buttonText: PropTypes.string,
  shuTitle: PropTypes.string
};

export default ShuAdd;