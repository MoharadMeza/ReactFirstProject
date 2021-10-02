import React, { useEffect, useState } from 'react'
import KTWizard from '../../../../../_metronic/_assets/js/components/wizard'
import { KTUtil } from "../../../../../_metronic/_assets/js/components/util";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import { Link} from "react-router-dom";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Formik} from "formik";
import Switch from "@material-ui/core/Switch/Switch"
// import paginationFactory, {
// 	PaginationProvider,
// } from "react-bootstrap-table2-paginator";
// import { Pagination } from "../../../_metronic/_partials/controls";
// import BootstrapTable from "react-bootstrap-table-next";
import CustomSelect from "../../../../shared/components/custom-select/custom-select.component"
import SelectFlag from '../../../../shared/components/select-with-flag/select-with-flag.component'
import PasswordSchema from "./setting.validation"
import {
	countryPrefixOptions, 
	// countryLocalAccessPrefixOptions,
	languagePrefixOptions, currencyCountryPrefixOptions, timeZonePrefixOptions, telphoneNumPrefixOptions,
} from './setting.enum'
// import columns from './setting.column'
import './setting.scss'
function Setting({ record, tab, saveRecord,changePassword }) {
	const nameBtnStep = {
		1: "save changes", 2: "save changes", 4: "save billing profile"
		,  3: "change currency", 5: "change password"
	};
	const [nameCurrentBtn, setNameCurrentBtn] = useState(nameBtnStep[1])
	const [showPassword, setShowPassword] = useState(false);
	const [showRetypePassword, setShowRetypePassword] = useState(false);
	const [currencyNow, setCurrencyNow] = useState()
	const [billingButtonCheck, setBillingButtonCheck] = useState(true)
	const [inCorrectPassword, setInCorrectPassword] = useState(false);
	const [inCorrectPasswordMess, setInCorrectPasswordMess] = useState("");
	const [currentPassErrorMess,setCurrentPassErrorMess]=useState("")

	// const [accessNum, setAccessNum] = useState({
	// 	dataTable: [],
	// 	total: 0,
	// });
	const getInputClasses = () => {
		if (inCorrectPassword) {
			return "is-invalid";
		}
		return "";
	};

	const handleSubmitStep = (values) => {
		let wizard = new KTWizard('kt_wizard')
		if(wizard.currentStep===5)
		{
			if(KTUtil.getById('CurrentPassword').value)
			{
				if(KTUtil.getById('newPassword').value!==KTUtil.getById('retypeNewPassword').value)
				{
					setInCorrectPassword(true);
					setInCorrectPasswordMess("Password and Confirm Password didn't match")
				}
				else if(KTUtil.getById('newPassword').value===KTUtil.getById('retypeNewPassword').value)
				{
					setInCorrectPassword(false);
					setInCorrectPasswordMess("")
					let changePassObj={
						currentPassword:KTUtil.getById('CurrentPassword').value,
						newPassword:KTUtil.getById('newPassword').value
					   }
					changePassword(changePassObj,wizard.currentStep)
				}
				
			}
			else if(!KTUtil.getById('CurrentPassword').value)
			{
				setCurrentPassErrorMess("This feild not be empty")
			}

		}
		else
		{
			saveRecord(values,wizard.currentStep)
		}
		setNameCurrentBtn(nameBtnStep[wizard.currentStep]);
		
	}
	// const paginationOptions = {
	// 	custom: true,
	// 	totalSize: accessNum.total,
	// 	// sizePerPageList: 4,
	// 	sizePerPage: 2,
	// 	page: 10,
	// };


	const setNameBtnStep = () => {
		let wizard = new KTWizard('kt_wizard')
		wizard.on('changed', function () {
			KTUtil.scrollTop();

			setNameCurrentBtn(nameBtnStep[wizard.currentStep]);
		});
	}

	useEffect(() => {
		new KTWizard('kt_wizard', {
			startStep: tab, // Initial active step number
			clickableSteps: true,  // Allow step clicking
		});
		setCurrencyNow("IRR 49.423")
		// setAccessNum({
		// 	dataTable: [{ idNumber: 1, number: "+98-654123" },
		// 	{ idNumber: 2, number: "+98-124781" },
		// 	{ idNumber: 3, number: "+50-6255" },
		// 	{ idNumber: 4, number: "+30-565" }],
		// 	total: 5,
		// });
	}, [tab])

	useEffect(() => {
		setNameBtnStep()

	})

	return (
		<>
			< Formik
				initialValues={record}
				validationSchema={PasswordSchema}
				enableReinitialize={true}
				onSubmit={values => {
					handleSubmitStep(values)
				}}
			>
				{({ handleSubmit, setFieldValue, values, getFieldProps }) => (


					<>
						<div className="row bg-white setting-profile">
							<div className="col-12 pt-5 mb-5">
								<h1>Setting Profile</h1>
							</div>
							<div className="col-12 px-0">
								<div className="d-flex flex-column-fluid">
									<div className="container-fluid px-3">
										<div className="card card-custom card-transparent">
											<div className="card-body p-0 " >

												<div className="wizard wizard-4" id="kt_wizard" data-wizard-state="step-first" data-wizard-clickable="true">

													<div className="wizard-nav bg-white">
														<div className="wizard-steps">

															<div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
																<div className="wizard-wrapper ">

																	<div className="wizard-label">
																		<div className="wizard-title">Profile</div>

																	</div>
																</div>
															</div>

															<div className="wizard-step" data-wizard-type="step">
																<div className="wizard-wrapper">

																	<div className="wizard-label">
																		<div className="wizard-title">Location&Call ID</div>

																	</div>
																</div>
															</div>

															<div className="wizard-step" data-wizard-type="step">
																<div className="wizard-wrapper">

																	<div className="wizard-label">
																		<div className="wizard-title">Currency</div>

																	</div>
																</div>
															</div>
															
															<div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
																<div className="wizard-wrapper ">

																	<div className="wizard-label">
																		<div className="wizard-title">Billing</div>

																	</div>
																</div>
															</div>

															{/* <div className="wizard-step" data-wizard-type="step">
																<div className="wizard-wrapper">

																	<div className="wizard-label">
																		<div className="wizard-title">Local access number</div>

																	</div>
																</div>
															</div> */}

															<div className="wizard-step" data-wizard-type="step">
																<div className="wizard-wrapper">

																	<div className="wizard-label">
																		<div className="wizard-title">Change password</div>

																	</div>
																</div>
															</div>

														</div>
													</div>

													<div className="card card-custom card-shadowless bg-gray-100 rounded-top-0" >
														<div className="card-body p-0 ">
															<div className="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
																<div className="col-xl-12 col-xxl-7">

																	<form className="form mt-0 mt-lg-10" id="kt_form" onSubmit={handleSubmit}>

																		<div className="pb-5" data-wizard-type="step-content" data-wizard-state="current" id="form1">

																			<div className="form-group">
																				<label>Name</label>
																				<input type="text" className="form-control form-control-lg" id="profile.name" name="profile.name"
																					{...getFieldProps("profile.name")} />

																			</div>
																			<div className="form-group row g-0">
																				<div className="col-lg-12">
																					<label >Telephone number</label>
																				</div>
																				<div className="col-lg-4 col-md-4 col-sm-12 pr-lg-0 pr-md-0">
																					<SelectFlag
																						options={telphoneNumPrefixOptions}
																						value={values.profile.countryCode}
																						customStyles={{ lineHeight: "30px" }}
																						onChange={value => {
																							setFieldValue("profile.countryCode", value.value);


																						}}

																						id="profile.countryCode"
																						name="profile.countryCode" />

																				</div>

																				<div className="col-lg-8 col-md-8 col-sm-12 pl-lg-0 pl-md-0">
																					<input type="number" className="form-control  form-control-lg" id="profile.telephoneNumber" name="profile.telephoneNumber"
																						{...getFieldProps("profile.telephoneNumber")} />


																				</div>
																			</div>

																			<div className="form-group row">
																				<div className="col-lg-12">
																					<label>Language</label>
																				</div>
																				<div className="col-lg-12">
																					<CustomSelect
																						options={languagePrefixOptions}
																						customStyles={{ lineHeight: "30px" }}
																						value={values.profile.language}
																						onChange={(value) => {
																							setFieldValue("profile.language", value.value)

																						}
																						}
																						placeholder="select your language"
																						id="profile.language"
																						name="profile.language"

																					/>

																				</div>
																			</div>
																			<div className="form-group">
																				<label>Email</label>
																				<input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Sample@gmailcom"
																					{...getFieldProps("email")} />
																			</div>
																			<div className="form-group  pt-5">

																				<label className=" blueTitle font-weight-bold">Promotional emails</label>

																				<div className="bg-white py-2 ">
																					<Switch
																						onChange={(event) => setFieldValue("emailSettings.promotionalEmails", event.target.checked)}
																						name="emailSettings.promotionalEmails"
																						defaultChecked={record ? record.emailSettings.promotionalEmails : false}
																						inputProps={{ 'aria-label': 'secondary checkbox' }}
																					/>

																					<span>I want to subscribe to special offers that will save
																					me money.
																								</span>


																				</div>

																			</div>
																			<div className="form-group  pt-5">

																				<label className="blueTitle font-weight-bold">Privacy settings</label>
																				<div className="bg-white px-5 py-5">
																					<div className="row mb-2">
																						<div className="col">

																							<span className="text-warning svg-icon svg-icon-md svg-icon-warning py-lg-2 py-md-2 py-sm-0 warningBackground">
																								<SVG
																									className="svgWarning"
																									src={toAbsoluteUrl(
																										"/media/svg/icons/Code/Warning-2.svg"
																									)}
																								></SVG>
																								{``}

																							By disable your actual call and SMS history
																								will not be visible any more.
																									</span>

																						</div>
																					</div>
																					<div className="row mb-2">
																						<label className="col-lg-3 col-md-3 col-sm-6 col-form-label pr-0 ">Your tracking history:</label>
																						<div className="col-lg-8 col-md-9 col-sm-6 col-form-label">
																							<div className="form-check">
																								<input className="form-check-input" type="radio" name="trackingHistory" id="trackingEnable" value="true" defaultChecked={record.privacySettings.trackingHistory==='true'||record.privacySettings.trackingHistory}
																									onChange={(event) => {
																										setFieldValue("privacySettings.trackingHistory", event.currentTarget.value)
																									}} />
																								<label className="form-check-label" htmlFor="trackingEnable">
																									Enabled
																									</label>
																							</div>
																							<div className="form-check">
																								<input className="form-check-input" type="radio" name="trackingHistory" id="trackingDisable" value="false" defaultChecked={record.privacySettings.trackingHistory==='false'||!record.privacySettings.trackingHistory}

																									onChange={(event) => {
																										setFieldValue("privacySettings.trackingHistory", event.currentTarget.value)
																									}} />
																								<label className="form-check-label" htmlFor="trackingDisable">
																									Disabled
																									</label>
																							</div>
																						</div>

																					</div>

																					{/* <div className="form-check mb-2">
																						<input type="checkbox" className="form-check-input" id="deleteSmsCheck"
																							{...getFieldProps("deleteSmsCheck")} />
																						<label className="form-check-label" htmlFor="deleteSmsCheck">Delete SMS history & do not track
																									it any more.</label>
																					</div> */}

																				</div>


																			</div>

																			<div className="form-group  pt-5">

																				<label className=" blueTitle font-weight-bold">Personal data</label>

																				<div className="row bg-white d-flex m-0">
																					<div className="col-9">
																						<p className="py-5 ">view your personal data that is stored in our sysyem

																								</p>

																					</div>
																					<div className="col-3 d-flex justify-content-end">
																						<Link
																							to={{ pathname: "https://quera.ir/" }}
																							target="_blank"
																							className="py-5 px-5 linkView "
																						>
																							View </Link>

																					</div>


																				</div>

																			</div>


																		</div>

																		<div className="pb-5" data-wizard-type="step-content">

																			<div className="form-group row">
																				<div className="col-lg-12">
																					<label>Time zone</label>
																				</div>

																				<div className="col-lg-12">
																					<CustomSelect
																						options={timeZonePrefixOptions}
																						value={values.locationSettings.timeZone}
																						customStyles={{ lineHeight: "30px" }}
																						onChange={(value) => {
																							setFieldValue("locationSettings.timeZone", value.value)

																						}

																						}
																						placeholder="select your time zone"

																						id="locationSettings.timeZone"
																						name="locationSettings.timeZone"

																					/>

																				</div>

																			</div>


																			<div className="form-group row ">
																				<div className="col-lg-12">
																					<label >Country</label>
																				</div>
																				<div className="col-lg-12 ">
																					<SelectFlag
																						options={countryPrefixOptions}
																						value={values.locationSettings.country}
																						customStyles={{ lineHeight: "30px" }}
																						onChange={value => {
																							setFieldValue("locationSettings.country", value.value);


																						}}

																						id="locationSettings.country"
																						name="locationSettings.country" />

																				</div>


																			</div>

																			<div className="form-group   pt-5">

																				<label className="blueTitle font-weight-bold">Caller ID</label>

																				<div className="row bg-white mx-0 px-5 py-5">

																					<div className="col-1 pr-0 warningBackground">

																						<span className=" svg-icon svg-icon-md svg-icon-warning">
																							<SVG
																								className="svgWarning"
																								src={toAbsoluteUrl(
																									"/media/svg/icons/Code/Warning-2.svg"
																								)}
																							></SVG>
																							{``}


																						</span>

																					</div>
																					<div className="col-11 text-warning warningBackground pl-0">
																						<p>
																							You can disable your call and SMS history tracking, by pushing the button above.
																									Remember, your actual call and SMS  	<Link
																								to={{ pathname: " https://getbootstrap.com/docs/4.5/utilities/text/" }}
																								target="_blank"
																								className="linkView "
																							>
																								https://getbootstrap.com/docs/4.5/utilities/text/ </Link>history will not be visible anymore.
																										</p>
																					</div>

																				</div>
																			</div>


																		</div>

																		<div className="pb-5" data-wizard-type="step-content">
																			<div className="form-group row mb-0">
																				<div className="col-lg-12">
																					<label >Currency</label>
																				</div>
																				<div className="col-lg-12 ">
																					<SelectFlag
																						options={currencyCountryPrefixOptions}
																						value={values.currencySettings.currency}
																						customStyles={{ lineHeight: "30px" }}
																						onChange={value => {
																							setFieldValue("currencySettings.currency", value.value);


																						}}

																						id="currencySettings.currency"
																						name="currencySettings.currency" />

																					<div className="col-lg-12 pt-lg-5 pt-2 px-0">
																						<p>$1.00={currencyNow}</p>

																					</div>
																				</div>


																			</div>

																			<div className="form-group">

																				<Switch
																					onChange={(event) => setFieldValue("currencySettings.restoreToEUR", event.target.checked)}
																					name="currencySettings.restoreToEUR"
																					defaultChecked={record ? record.currencySettings.restoreToEUR : false}
																					inputProps={{ 'aria-label': 'secondary checkbox' }}
																				/>
																				<span>Restore to EUR</span>
																			</div>

																		</div>

																		<div className="pb-5" data-wizard-type="step-content">

																			<div className="form-group row ">


																				<div className="col-1 pr-0 py-3 warningBackground rounded ">

																					<span className=" svg-icon svg-icon-md svg-icon-warning ">
																						<SVG
																							className="svgWarning my-3"
																							src={toAbsoluteUrl(
																								"/media/svg/icons/Code/Warning-2.svg"
																							)}
																						></SVG>
																						{``}


																					</span>

																				</div>
																				<div className="col-10 text-warning warningBackground rounded  pl-0">
																					<p className="my-3 py-3">
																						You can disable your call and SMS history tracking, by pushing the button above.
																						Remember, your actual call and SMS history will not be visible anymore.
																						</p>
																				</div>

																			</div>
																			<div className="form-group">
																				<label>Company name</label>
																				<input type="text" className="form-control form-control-lg" id="billing.companyName" name="billing.companyName"
																					{...getFieldProps("billing.companyName")} />

																			</div>

																			<div className="form-group">
																				<label>Register number</label>
																				<input type="number" className="form-control  form-control-lg" id="billing.registerNumber" name="billing.registerNumber"
																					{...getFieldProps("billing.registerNumber")} />

																			</div>
																			<div className="form-group">
																				<label>Tax number</label>
																				<input type="number" className="form-control  form-control-lg" id="billing.taxNumber" name="billing.taxNumber"
																					{...getFieldProps("billing.taxNumber")} />

																			</div>
																			<div className="form-group">
																				<label htmlFor="exampleFormControlTextarea1">Address</label>
																				<textarea className="form-control" id="billing.address" name="billing.address" rows="5"
																					{...getFieldProps("billing.address")}></textarea>
																			</div>
																			<div className="form-group">

																				<div className="form-check">
																					<input type="checkbox" className="form-check-input" id="billingTabCheck"
																						onChange={(event) => {
																							event.currentTarget.value === "on" ? setBillingButtonCheck(false) :
																								setBillingButtonCheck(true)

																						}} />
																					<label className="form-check-label" htmlFor="billingTabCheck">I hereby declare that the information and record(s) submitted as indicated above is true and correct to the best of my knowledge and belief</label>
																				</div>
																			</div>



																		</div>

																		{/* <div className="pb-5" data-wizard-type="step-content">
																			<h5 className="blueTitle pb-2">Available local access numbers</h5>
																			<div className="form-group row mt-lg-5 mt-md-4 mt-sm-2 ">
																				<div className="col-lg-12">
																					<label >Country</label>
																				</div>
																				<div className="col-lg-12 ">
																					<SelectFlag
																						options={countryLocalAccessPrefixOptions}
																						value={values.countryLocalAccess}
																						customStyles={{ lineHeight: "30px" }}
																						onChange={value => {
																							setFieldValue("countryLocalAccess", value.value);


																						}}

																						id="countryLocalAccess"
																						name="countryLocalAccess" />


																				</div>
																			</div>
																			<div className="col-lg-12 bg-white">

																				<PaginationProvider pagination={paginationFactory(paginationOptions)}>
																					{({ paginationProps, paginationTableProps }) => {
																						return (
																							// <Pagination
																							// isLoading={loading}
																							// 	paginationProps={paginationProps}
																							// >
																							<BootstrapTable
																								wrapperClasses="table-responsive"
																								bordered={false}
																								classes="table table-head-custom table-vertical-center overflow-hidden"
																								bootstrap4
																								remote
																								keyField="idNumber"
																								data={accessNum.dataTable}
																								columns={columns}

																								{...paginationTableProps}
																							>

																							</BootstrapTable>
																							// </Pagination>
																						);
																					}}
																				</PaginationProvider></div>
																			<h5 className="blueTitle pb-5 pt-5">Local access number configuration </h5>
																			<div className="form-group row ">
																				<div className="col-lg-12 d-flex mb-2">
																					<Link
																						to={{ pathname: "https://quera.ir/" }}
																						target="_blank"

																						className="py-5  linkView "
																					>
																						How to configure?


																							<OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">
																							When you call a geo-number from this number you will be granted access to the geo-calling-system.
																							(You can remove a number at any time.)

																							Please enter the phone numbers in the international format starting with a plus sign (+) followed by the country code and your phone number. (Example for UK phones: +442012345678 where +44 is the country code)"

																								</Tooltip>}>
																							<span className="d-inline-block">
																								<i className="flaticon2-information icon-md text-muted" data-toggle="tooltip"
																								></i>
																							</span>
																						</OverlayTrigger>
																					</Link>


																				</div>
																				<div className="col-lg-12 pt-5 mx-2 configureBox">
																					<p>
																						When you call a geo-number from this number you will be granted access to the geo-calling-system.
																						(You can remove a number at any time.)
																							<br />
																						<small>Please enter the phone numbers in the international format starting with a plus sign (+) followed by the country code and your phone number.
																								(Example for UK phones: +442012345678 where +44 is the country code)</small>
																					</p>

																				</div>

																			</div>

																			<div className="form-group">
																				<label>Phone number</label>
																				<input type="number" className="form-control form-control-lg" id="phoneNumber" name="phoneNumber"
																					{...getFieldProps("phoneNumber")} />
																				<small> Any phone number you enter here, will be able to make calls trough your account directly</small>
																			</div>


																		</div> */}

																		<div className="pb-5" data-wizard-type="step-content" data-wizard-state="current" id="form1">


																			<div className="form-group pt-5">
																				<p className="font-weight-bold blueTitle">Reset password</p>
																				<div className="input-group">
																					<div className="col-lg-12 p-0">
																						<label>Current password</label>
																					</div>
																					<input type="password" className="form-control form-control-lg  rounded-left" id="CurrentPassword" />
																					<div className="col-lg-12 p-0">
																					{currentPassErrorMess!==""? (
																						<div className="fv-plugins-message-container">
																							<div className="fv-help-block">{currentPassErrorMess}</div>
																						</div>
																					) : null}
																				</div>
																				</div>
																				<div className="input-group pt-4 mt-4">
																					<div className="col-lg-12 px-0">
																						<label>New password</label>
																					</div>
																					<input type={showPassword ? "text" : "password"} className={`form-control form-control-lg  rounded-left ${getInputClasses()}`} id="newPassword"
																					 />

																					<span className="input-group-text showPass">
																						<i
																							className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"
																								}`}

																							onClick={e => setShowPassword(prev => !prev)}
																						/>
																					</span>

																				</div>
																				<div className="input-group pt-4 mt-4">
																					<div className="col-lg-12 px-0">
																						<label>Retype New password</label>
																					</div>

																					<input type={showRetypePassword ? "text" : "password"} className={`form-control form-control-lg  rounded-left ${getInputClasses()}`} id="retypeNewPassword"
																						/>


																					<span className="input-group-text showPass">
																						<i
																							className={`fas ${showRetypePassword ? "fa-eye" : "fa-eye-slash"
																								}`}
																							onClick={e => setShowRetypePassword(prev => !prev)}
																						/>
																					</span>


																				</div>
																				<div>
																					{inCorrectPassword? (
																						<div className="fv-plugins-message-container">
																							<div className="fv-help-block">{inCorrectPasswordMess}</div>
																						</div>
																					) : null}
																				</div>
																			</div>

																		</div>

																		<div className="d-flex justify-content-center border-top mt-5 pt-10">
																			{/* <div className="mr-2">
																				<button type="button" className="btn  font-weight-bolder text-uppercase previousBtn " onClick={onHide}>Cancel</button>
																			</div> */}
																			<div>

																				<button type="submit" className="btn font-weight-bolder text-uppercase customBtn" disabled={nameCurrentBtn === "save billing profile" ? billingButtonCheck : false}>{nameCurrentBtn}</button>


																			</div>
																		</div>

																	</form>

																</div>
															</div>
														</div>
													</div>

												</div>

											</div>
										</div>
									</div>

								</div>

							</div>

						</div>



					</>


				)}
			</Formik >
		</>
	)
}
export default Setting;