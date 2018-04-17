import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
import { fetchBooking } from '../actions/actionBooking';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Confirmation extends Component {

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

	render() {
		let booking = this.props.booking;
		if(Object.keys(booking).length == 0) {
			return (
				<div className="text-center">
				<h3>You have not made any reservation</h3>
				<Link to={`/`} className="btn btn-primary">Book a meeting room</Link>
				</div>
			)
		}
		return (
			<Grid>
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
			</Grid>
		);
	}
}

function mapStateToProps (state) {
  return { booking: state.booking }
}
export default connect(mapStateToProps, { fetchBooking })(Confirmation);