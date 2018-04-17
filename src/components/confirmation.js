import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Alert } from 'react-bootstrap';
import { fetchBooking } from '../actions/actionBooking';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class Confirmation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: null,
		}
	}

	componentDidMount() {
		this.props.fetchBooking();
	}

	showDataField(label, value) {
		return (
			<Row className="show-grid">
				<Col md={6} xs={9}>
					<label>{label}</label>
				</Col>
				<Col md={6} xs={3}>
					<label>{value}</label>
				</Col>
			</Row>
		)
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

	showMessage(type, message) {
		return (
			<Alert bsStyle={type}>
			  <strong>Attention!</strong> {message}
			</Alert>
		)
	}

	onSubmitReservation(values) {
		let message = "";
		if(!values.email) {
			message = this.showMessage("danger", "Please input email");
		} else {
			message = this.showMessage("success", "Success to make reservation");
		}
		this.setState({ message })
		return false;
	}

	render() {
		let booking = this.props.booking;
		if(Object.keys(booking).length === 0) {
			return (
				<div className="text-center">
				<h3>You have not made any reservation</h3>
				<Link to={`/`} className="btn btn-primary">Book a meeting room</Link>
				</div>
			)
		}
		const { handleSubmit } = this.props;
		return (
			<Grid>
				<Row className="show-grid">
					<Col md={6} mdOffset={3}>
						<Row className="show-grid">
						  	<h3 className="text-center">Booking Confirmation</h3>
						</Row>
					</Col>
					<Col md={6} mdOffset={4}>
						{this.showDataField("Room Number", `${booking.roomNumber}`)}

						{this.showDataField("Number Participants", `${booking.participant}`)}

						{this.showDataField("Company Name", `${booking.companyName}`)}
					</Col>
				</Row>
				<form onSubmit={handleSubmit(this.onSubmitReservation.bind(this))}>
					<Row className="show-grid">
						{this.state.message}
						<Col md={6} mdOffset={3}>
							<Field
								type="email"
								name="email"
								label="Email"
								placeholder="Input email confirmation"
								component={this.renderTextField}
							/>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col md={2} mdOffset={4}>
							<Link to={`/`} className="btn btn-info">Back to form</Link>
						</Col>
						<Col md={3}>
							<button type="submit" className="btn btn-primary">Submit Reservation</button>
						</Col>
					</Row>
				</form>
			</Grid>
		);
	}
}

function mapStateToProps (state) {
  return { booking: state.booking }
}

export default reduxForm({
  form: 'Confirmation'
}) (
    connect(mapStateToProps, { fetchBooking }) (Confirmation)
);