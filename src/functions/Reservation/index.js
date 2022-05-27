import React, { Component } from "react";
import { DatePicker, WhiteSpace, List, NavBar, Icon, Picker, Button, Toast } from "antd-mobile";
import dayjs from "dayjs";
import "./index.less";
import axios from "axios";

const api = axios.create({
	baseURL: "https://sadbackend-cyt.herokuapp.com",
});

let userid = window.location.pathname
const account = userid.replace('/reservation/','')
console.log(account)
const home_path = '/home/' + account


class Reserve extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			timePeriod: ["morning"],
			gym: [],
			branch: "",
			trainingPart: [],
			machine: [],
			availableTime: [],
			start: "",
			machineId: "",
			gymList: [],
			trainingPartOpts: [],
			machineOpts: [],
			availableTimeOpts: [],
		};
		api.get("/api/v1/gym/list").then((res) => {
			this.setState({ gymList: res.data.data })
			console.log(res.data.data);
		});
	}
	onSelectGym = (index) => {
		const selectedGym = this.state.gymList[index[0]];
		const parts = selectedGym.available_machine;
		const branch = selectedGym.branch_gym_id;
		const trainingPartOpts = [];
		for (const key in parts) {
			if (Object.hasOwnProperty.call(parts, key)) {
				trainingPartOpts.push({ label: key, value: key });
			}
		}
		this.setState({
			gym: index,
			trainingPartOpts: trainingPartOpts,
			branch: branch,
			trainingPart: [],
			machine: [],
			availableTime: [],
		});
	};

	onSelectTrainingPart = (index) => {
		const selectedGym = this.state.gymList[this.state.gym[0]];
		const parts = selectedGym.available_machine;
		const machines = parts[index[0]];
		const machineOpts = [];
		machines.map((v) => {
			machineOpts.push({ label: v, value: v });
			return machineOpts;
		});
		this.setState({ trainingPart: index, machineOpts: machineOpts, machine: [], availableTime: [] });
	};

	onSelectMachine = (value) => {
		this.setState({ machine: value });
		api
			.get(
				`/api/v1/user/available?date=${dayjs(this.state.date).format("YYYY-MM-DD")}&period=${
					this.state.timePeriod[0]
				}&account=${account}&branch_gym_id=${this.state.branch}&machine=${value[0]}`
			)
			.then((res) => {
				let temp = [dayjs(this.state.date).format("YYYY-MM-DD"), this.state.timePeriod[0],account, this.state.branch, value[0]]
				console.log(temp)
				console.log(res)
				const availableTimeOpts = [];
				if (res.data && res.data.data) {
					res.data.data.map((v) => {
						console.log(v)
						availableTimeOpts.push({ label: v.start + " ~ " + v.end, value: [v.start, v.machine_id] });
						return availableTimeOpts;
					});
				}
				this.setState({ availableTimeOpts: availableTimeOpts, availableTime: [] });
			});
	};

	onSelectTime = (value) => {
		const start = value[0][0];
		const machineId = value[0][1];
		this.setState({ start: start, machineId: machineId, availableTime: value });
	};

	onSubmit = () => {
		Toast.loading("Loading...", 1);
		const payload = {};
		payload.account = account;
		payload.date = dayjs(this.state.date).format("YYYY-MM-DD");
		payload.machine_id = this.state.machineId;
		payload.start = this.state.start;
		console.log(payload)
		api.post("/api/v1/user/reservation", payload).then((res) => {
			console.log(res)
			if (res.data.code === 200) {
				Toast.success("Success !", 1);
				//window.location.href = home_path
			} else {
				Toast.fail(res.data.data.error);
			}
		});
	};

	render() {
		const timePeriod = [
			{ label: "morning", value: "morning" },
			{ label: "afternoon", value: "afternoon" },
			{ label: "evening", value: "evening" },
			{ label: "midnight", value: "midnight" },
		];

		const gym = [];

		for (const index in this.state.gymList) {
			if (Object.hasOwnProperty.call(this.state.gymList, index)) {
				const ele = this.state.gymList[index];
				gym.push({ label: ele.name, value: index });
			}
		}

		return (
			<div>
				<NavBar mode="dark" style={{backgroundColor:'#F5D19B',color:'black'}} icon={<Icon type="left" />}  onLeftClick={() => (window.location.href = home_path)}>
					Reservation
				</NavBar>
				<div className="shapeHome">
					<List>
						<WhiteSpace size="lg" />
						<DatePicker
							mode="date"
							title="Select Date"
							value={this.state.date}
							onChange={(date) => this.setState({ date })}
						>
							<List.Item arrow="horizontal">Date</List.Item>
						</DatePicker>
						<WhiteSpace size="lg" />
						<Picker
							data={timePeriod}
							title="Time Period"
							cols="1"
							value={this.state.timePeriod}
							onChange={(v) => this.setState({ timePeriod: v })}
							onOk={(v) => this.setState({ timePeriod: v })}
						>
							<List.Item arrow="horizontal">Time Period</List.Item>
						</Picker>

						<WhiteSpace size="lg" />
						<Picker data={gym} title="Gym" cols="1" value={this.state.gym} onOk={(v) => this.onSelectGym(v)}>
							<List.Item arrow="horizontal">Gym</List.Item>
						</Picker>

						<WhiteSpace size="lg" />
						<Picker
							data={this.state.trainingPartOpts}
							title="Training Part"
							cols="1"
							value={this.state.trainingPart}
							onOk={(v) => this.onSelectTrainingPart(v)}
						>
							<List.Item arrow="horizontal">Training Part</List.Item>
						</Picker>

						<WhiteSpace size="lg" />
						<Picker
							data={this.state.machineOpts}
							title="Machine"
							cols="1"
							value={this.state.machine}
							onOk={(v) => this.onSelectMachine(v)}
						>
							<List.Item arrow="horizontal">Machine</List.Item>
						</Picker>

						<WhiteSpace size="lg" />
						<Picker
							data={this.state.availableTimeOpts}
							title="Available Time"
							cols="1"
							value={this.state.availableTime}
							onOk={(v) => this.onSelectTime(v)}
						>
							<List.Item arrow="horizontal">Available Time</List.Item>
						</Picker>
					</List>

					<WhiteSpace size="lg" />

					<WhiteSpace size="lg" />
					<List>
						<List.Item>
							<Button type="primary" style={{backgroundColor:'#FFF3D4',color:'black'}} onClick={(e) => this.onSubmit()}>
								Submit
							</Button>
						</List.Item>
					</List>
				</div>
			</div>
		);
	}
}

export default Reserve;
