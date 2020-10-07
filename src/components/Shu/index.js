import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Shu(props) {
	const myStyledList = {
		listStyle: 'none',
		cursor: 'pointer',
	};
	return (
			<React.Fragment>
					<div style={myStyledList} onClick={() => props.whenShuClicked(props.id)}>
						<Card style={{ width: '18rem' }}  bg="light" text="light">
						<Card.Header className='text-muted'>Shu</Card.Header>
							<Card.Body>
								<Card.Title className='text-muted'>{props.title}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									{props.date}
								</Card.Subtitle>
								<Card.Text className='text-muted'>{props.place}</Card.Text>
							</Card.Body>
							</Card>
						</div>
					<hr />
			</React.Fragment>
	);
}


Shu.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  place: PropTypes.string,
  id: PropTypes.string,
  timeOpen: PropTypes.object,
  whenShuClicked: PropTypes.func
}

export default Shu;