import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { createBooking } from '../actions/actionBooking';
import { Redirect } from 'react-router-dom'

class Booking extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			goConfirm: false,
			validationError: false
		}
	}

  	renderTextField(field) {
		return (
			<Row className="show-grid">
		        <FormGroup
		          controlId="field.id"
		        >
		          <ControlLabel>{field.label}</ControlLabel>
		          <FormControl
		            type={field.type}
		            placeholder={field.placeholder}
		            name={field.name}
		            {...field.input}
		          />
		          <FormControl.Feedback />
		        </FormGroup>
	      	</Row>
		);
	}

	showValidationError() {
		if(this.state.validationError) {
			return (
				<Alert bsStyle="danger">
				  <strong>Attention!</strong> Please input all fields.
				</Alert>
			)
		}
		return;
	}

	onSubmitReservation(values) {
		if(!values.roomNumber || !values.participant || !values.companyName) {
			this.setState({ validationError : true})
			return false;
		}
		this.props.createBooking(values);
		this.setState({ goConfirm : true})
	}

  	render() {
	  	if(this.state.goConfirm) {
	  		return <Redirect to='/confirmation' />;
	  	}

	  	const { handleSubmit } = this.props;
	    return (
			<Grid>
			  <Col md={6} mdOffset={3}>
				  <Row className="show-grid">
				  	<h3 className="text-center">Meeting Room Booking</h3>
				  	{this.showValidationError()}
				  </Row>
			      <form onSubmit={handleSubmit(this.onSubmitReservation.bind(this))}>
			      	<Field
			      		type="text"
			      		name="roomNumber"
						label="Room Number"
						placeholder="Input Room Number"
						component={this.renderTextField}
					/>
					<Field
						type="number"
						name="participant"
						label="Participants"
						placeholder="Input Number of Participants"
						component={this.renderTextField}
					/>
					<Field
			      		type="text"
			      		name="companyName"
						label="Company Name"
						placeholder="Input Company Name"
						component={this.renderTextField}
					/>
					<button type="submit" className="btn btn-primary">Submit</button>
			      </form>
		      </Col>
	      	</Grid>
	    );
  	}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ createBooking }, dispatch);
}

function mapStateToProps (state) {
  return { booking: state.booking }
}

export default reduxForm({
  form: 'Booking'
}) (
    connect(mapStateToProps, mapDispatchToProps) (Booking)
);