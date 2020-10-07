import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
// import { useFirestore } from 'react-redux-firebase';

function NewShuForm(props) {
	const firestore = useFirestore();

	function addShuToFirestore(event) {
		event.preventDefault();
		props.onNewShuCreation();

		return firestore.collection('shus').add({
      brand: event.target.brand.value,
      name: event.target.name.value,
      width: event.target.width.value,
      size: event.target.size.value,
			date: event.target.date.value,
			description: event.target.description.value,
      timeOpen: firestore.FieldValue.serverTimestamp(),
      type: event.target.type.value,
      color: event.target.color.value,
      keywords: event.target.keywords.value,
		});
	}

	return (
		<React.Fragment>
			<ReusableForm
				formSubmissionHandler={addMemoryToFirestore}
				buttonText="add shu"
			/>
		</React.Fragment>
	);
}

NewMemoryForm.propTypes = {
	onNewMemoryCreation: PropTypes.func,
};

export default NewMemoryForm;