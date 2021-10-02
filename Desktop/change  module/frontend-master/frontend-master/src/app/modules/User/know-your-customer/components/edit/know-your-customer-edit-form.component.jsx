import React, { useEffect, useState } from 'react'
import KTWizard from '../../../../../../_metronic/_assets/js/components/wizard'
import { KTUtil } from "../../../../../../_metronic/_assets/js/components/util";
import { format } from 'date-fns';
import { useFormik } from "formik";
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component"
import SelectFlag from '../../../../../shared/components/select-with-flag/select-with-flag.component'
import { uploadFile } from "../../../../../shared/components/upload-file/upload-file.api";
import { CardImage } from "../../../../../shared/components/upload-file/card-image";
import { CircularProgress } from "@material-ui/core";
import {
	DataSchemaForm1,
	DataSchemaForm2,
	DataSchemaForm3,
	DataSchemaForm4
} from './know-your-customer.validation'
import {
	genderPrefixOptions, nationalPrefixOptions, countryPrefixOptions,
	addProofPrefixOptions, occupationTypePrefixOptions, organaziCountPrefixOptions, homeTelPrefixOptions,
	businessTelPrefixOptions, idTypePrefixOptions
} from './know-your-customer.enum'
import './know-your-customer.scss'

function KycForm({ record, saveRecord, id }) {

	const birthDate = record['birthDate'] ? format(new Date(record['birthDate']), 'yyyy-MM-dd') : record['birthDate'];
	const recordForEdit = Object.assign({}, record, {birthDate,checkBox:""});
	const [step, setStep] = useState(0);
	const [loadingAddProof, setLoadingAddProof] = useState(false)
	const [fileAddProof, setFileAddProof] = useState("")
	const [loadingIdFile, setLoadingIdFile] = useState(false)
	const [fileIdFile, setFileIdFile] = useState("")

	const setToday = () => {
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1; //January is 0!
		let yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd
		}
		if (mm < 10) {
			mm = '0' + mm
		}

		today = yyyy + '-' + mm + '-' + dd;
    return today;
	}

	const handlePrev = () => {
		setStep(step - 1);
	}
	const schema = [DataSchemaForm1, DataSchemaForm2, DataSchemaForm3, DataSchemaForm4]


	const finalData = (formData) => {
		let obj = Object.assign(formData)
		obj.idFile = fileIdFile
		obj.addressProofFile = fileAddProof
		saveRecord(formData)
	}

	const getInputClasses = (fieldname) => {
		if (formik.touched[fieldname] && formik.errors[fieldname]) {
			return "is-invalid";
		}

		if (formik.touched[fieldname] && !formik.errors[fieldname]) {
			return "is-valid";
		}

		return "";
	};
	const formik = useFormik({

		initialValues: recordForEdit,
		validationSchema: schema[step],
		enableReinitialize: true,
		onSubmit: (values) => {
			let wizard = new KTWizard('kt_wizard')
			let currentStep = step >= 3 ? 3 : step + 1;
			if (step === 3) {
				setStep(currentStep);
				finalData(values)
			}
			else {
				setStep(currentStep);
				KTUtil.scrollTop();
				formik.setTouched({});
				wizard.goNext()
			}

		}


	});

	const onFileUploadAddproof = async (event) => {
		setLoadingAddProof(true)

		const data = new FormData();
		data.append("file", event.target.files[0]);
		data.append("module", "know-your-customer");

		const responseUplode = await uploadFile(data);

		if (responseUplode?.data?.success) {
			setFileAddProof(responseUplode.data.data.fileAddress)
			formik.setFieldValue("addressProofFile", responseUplode.data.data.fileAddress)
			setLoadingAddProof(false)
		}
	};
	const onFileUploadIdFile = async (event) => {
		setLoadingIdFile(true)

		const data = new FormData();
		data.append("file", event.target.files[0]);
		data.append("module", "know-your-customer");

		const responseUplode = await uploadFile(data);

		if (responseUplode?.data?.success) {
			setFileIdFile(responseUplode.data.data.fileAddress)
			formik.setFieldValue("idFile", responseUplode.data.data.fileAddress)
			setLoadingIdFile(false)
		}
	};

	const removeFileIdFile = () => {
		setFileIdFile("")
		formik.setFieldValue("idFile", "")
	}
	const removeFileAddproof = () => {
		setFileAddProof("")
		formik.setFieldValue("addressProofFile", "")
	}
	useEffect(() => {
		new KTWizard('kt_wizard', {
			startStep: 1, // Initial active step number
			clickableSteps: false,  // Allow step clicking
		});
	}, [])
	useEffect(() => {
		if (id) {
			setFileAddProof(record.addressProofFile);
			setFileIdFile(record.idFile);
		}
	}, [record, id])

	return (
		<>



			<div className="row bg-white kyc ">
				<div className="col-12 pt-5 mb-5">
					<h1>Know Your Customer</h1>
				</div>
				<div className="col-12">
					<div className="d-flex flex-column-fluid">
						<div className="container">
							<div className="card card-custom card-transparent">
								<div className="card-body p-0 " >

									<div className="wizard wizard-4" id="kt_wizard" data-wizard-state="step-first" data-wizard-clickable="true">

										<div className="wizard-nav bg-white">
											<div className="wizard-steps">

												<div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
													<div className="wizard-wrapper ">

														<div className="wizard-label">
															<div className="wizard-title">General information</div>

														</div>
													</div>
												</div>

												<div className="wizard-step" data-wizard-type="step">
													<div className="wizard-wrapper">

														<div className="wizard-label">
															<div className="wizard-title">Permanet address of residence</div>

														</div>
													</div>
												</div>

												<div className="wizard-step" data-wizard-type="step">
													<div className="wizard-wrapper">

														<div className="wizard-label">
															<div className="wizard-title">Activity & purpose</div>

														</div>
													</div>
												</div>

												<div className="wizard-step" data-wizard-type="step">
													<div className="wizard-wrapper">

														<div className="wizard-label">
															<div className="wizard-title">Identification</div>

														</div>
													</div>
												</div>

											</div>
										</div>

										<div className="card card-custom card-shadowless bg-gray-100 rounded-top-0" >
											<div className="card-body p-0 ">
												<div className="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
													<div className="col-xl-12 col-xxl-7">

														<form className="form mt-0 mt-lg-10" id="kt_form" onSubmit={formik.handleSubmit} >

															<div className="pb-5" data-wizard-type="step-content" data-wizard-state="current" id="form1">

																<div className="form-group">
																	<label>First Name</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"firstName"
																	)}`} id="firstName" name="firstName"
																		{...formik.getFieldProps("firstName")}
																	/>

																	{formik.touched.firstName && formik.errors.firstName ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.firstName}
																			</div>
																		</div>
																	) : null}
																</div>


																<div className="form-group">
																	<label>Last Name</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"lastName"
																	)} `} id="lastName" name="lastName"
																		{...formik.getFieldProps("lastName")} />
																	{formik.touched.lastName && formik.errors.lastName ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.lastName}
																			</div>
																		</div>
																	) : null}

																</div>

																<div className="form-group">
																	<label>Middle Name</label>

																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"middleName"
																	)} `} id="middleName" name="middleName"
																		{...formik.getFieldProps("middleName")} />
																	{formik.touched.middleName && formik.errors.middleName ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.middleName}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group row">
																	<div className="col-lg-12">
																		<label>Gender</label>
																	</div>
																	<div className="col-lg-12">
																		<CustomSelect
																			options={genderPrefixOptions}
																			customStyles={{ lineHeight: "35px" }}
																			value={formik.values.gender}
																			onChange={(value) => {

																				formik.setFieldValue("gender", value.value)

																			}
																			}

																			placeholder="select your gender"
																			id="gender"
																			name="gender"

																		/>

																		{formik.touched.gender && formik.errors.gender ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.gender}
																				</div>
																			</div>
																		) : null}

																	</div>



																</div>
																<div className="form-group row">
																	<div className="col-lg-12">
																		<label>Nationality</label>
																	</div>
																	<div className="col-lg-12">
																		<CustomSelect
																			options={nationalPrefixOptions}
																			value={formik.values.nationality}
																			customStyles={{ lineHeight: "35px" }}
																			onChange={(value) => {
																				formik.setFieldValue("nationality", value.value)

																			}

																			}
																			placeholder="select your nationality"
																			id="nationality"
																			name="nationality"

																		/>
																		{formik.touched.nationality && formik.errors.nationality ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.nationality}
																				</div>
																			</div>
																		) : null}

																	</div>

																</div>
															</div>

															<div className="pb-5" data-wizard-type="step-content">

																<div className="form-group">
																	<label>Address</label>
																	<textarea type="text" className={`form-control form-control-lg ${getInputClasses(
																		"address"
																	)}`} id="address" name="address" row="1"
																		{...formik.getFieldProps("address")} />
																	{formik.touched.address && formik.errors.address ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.address}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>City</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"city"
																	)}`} id="city" name="city"
																		{...formik.getFieldProps("city")} />
																	{formik.touched.city && formik.errors.city ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.city}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>Postal code</label>
																	<input type="number" className={`form-control form-control-lg ${getInputClasses(
																		"postalCode"
																	)}`} id="postalCode" name="postalCode"
																		{...formik.getFieldProps("postalCode")} />
																	{formik.touched.postalCode && formik.errors.postalCode ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.postalCode}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>State</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"state"
																	)}`} id="state" name="state"
																		{...formik.getFieldProps("state")} />
																	{formik.touched.state && formik.errors.state ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.state}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group row">
																	<div className="col-lg-12">
																		<label>Country</label>
																	</div>

																	<div className="col-lg-12">
																		<CustomSelect
																			options={countryPrefixOptions}
																			value={formik.values.country}
																			customStyles={{ lineHeight: "35px" }}
																			onChange={(value) => {
																				formik.setFieldValue("country", value.value)

																			}

																			}
																			placeholder="select your Country"
																			// onBlur={() =>
																			// 	setFieldTouched("countryCode", true)
																			// }
																			id="country"
																			name="country"

																		/>

																		{formik.touched.country && formik.errors.country ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.country}
																				</div>
																			</div>
																		) : null}

																	</div>

																</div>
																<div className="form-group row">
																	<div className="col-lg-12">
																		<label>Address proof type</label>
																	</div>

																	<div className="col-lg-12">
																		<CustomSelect
																			options={addProofPrefixOptions}
																			value={formik.values.addressProofType}
																			customStyles={{ lineHeight: "35px" }}
																			onChange={(value) => {
																				formik.setFieldValue("addressProofType", value.value)

																			}

																			}
																			placeholder="Latest telephone bill"

																			id="addressProofType"
																			name="addressProofType"

																		/>
																		{formik.touched.addressProofType && formik.errors.addressProofType ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.addressProofType}
																				</div>
																			</div>
																		) : null}

																	</div>

																</div>
																<div className="form-group mx-1 row" >
																	<div className="col-lg-12 mx-0 px-0"><label>Address proof file</label></div>
																	<div className="col-lg-12 px-0 custom-file  uploadFile">
																		<input type="file" className="custom-file-input form-control-lg" onChange={onFileUploadAddproof} id="addressProofFile"
																			name="addressProofFile"
																		/>
																		<label className="custom-file-label" htmlFor="addressFile">Choose file
																		{loadingAddProof && (
																			<CircularProgress className="ml-3" size={20} color="secondary" />
																		)}
																		</label>
																	</div>

																	<div className="col-lg-12 mt-5">
																		{fileAddProof !== "" ?
																			<div className="col-lg-4 col-md-6 col-sm-8">
																				<CardImage image={fileAddProof} removeFile={removeFileAddproof} />
																			</div>
																			: null
																		}
																	</div>
																	{formik.touched.addressProofFile && formik.errors.addressProofFile ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.addressProofFile}
																			</div>
																		</div>
																	) : null}


																</div>
																<div className="form-group">
																	<label>Email</label>
																	<input type="email" className={`form-control form-control-lg ${getInputClasses(
																		"email"
																	)}`} id="email" name="email" placeholder="Sample@gmailcom"
																		{...formik.getFieldProps("email")} />
																	{formik.touched.email && formik.errors.email ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.email}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group row g-0">
																	<div className="col-lg-12">
																		<label >Home telephone</label>
																	</div>
																	<div className="col-lg-4 col-md-4 col-sm-12 pr-lg-0 pr-md-0">
																		<SelectFlag
																			options={homeTelPrefixOptions}
																			value={formik.values.phoneCountryCode}
																			customStyles={{ lineHeight: "30px" }}
																			onChange={value => {
																				formik.setFieldValue("phoneCountryCode", value.value);


																			}}

																			id="phoneCountryCode"
																			name="phoneCountryCode" />
																		{formik.touched.phoneCountryCode && formik.errors.phoneCountryCode ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.phoneCountryCode}
																				</div>
																			</div>
																		) : null}

																	</div>

																	<div className="col-lg-8 col-md-8 col-sm-12 pl-lg-0 pl-md-0">
																		<input type="number" className="form-control  form-control-lg" id="homeTelephone" name="homeTelephone"
																			{...formik.getFieldProps("homeTelephone")} />
																		{formik.touched.homeTelephone && formik.errors.homeTelephone ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.homeTelephone}
																				</div>
																			</div>
																		) : null}
																	</div>


																</div>
																<div className="form-group row g-0">
																	<div className="col-lg-12">
																		<label >Business telephone</label>
																	</div>
																	<div className="col-lg-4 col-md-4 col-sm-12 pr-lg-0 pr-md-0">
																		<SelectFlag
																			options={businessTelPrefixOptions}
																			customStyles={{ lineHeight: "30px" }}
																			value={formik.values.businessCountryCode}
																			onChange={value => {
																				formik.setFieldValue("businessCountryCode", value.value);

																			}}
																			id="businessCountryCode"
																			name="businessCountryCode" />

																		{formik.touched.businessCountryCode && formik.errors.businessCountryCode ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.businessCountryCode}
																				</div>
																			</div>
																		) : null}
																	</div>
																	<div className="col-lg-8 col-md-8 col-sm-12 pl-lg-0 pl-md-0">
																		<input type="number" className="form-control  form-control-lg" id="businessTelephone" name="businessTelephone"
																			{...formik.getFieldProps("businessTelephone")} />
																		{formik.touched.businessTelephone && formik.errors.businessTelephone ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.businessTelephone}
																				</div>
																			</div>
																		) : null}
																	</div>

																</div>
															</div>

															<div className="pb-5" data-wizard-type="step-content">
																<div className="form-group row">
																	<div className="col-lg-12">
																		<label>Occupation type</label>
																	</div>

																	<div className="col-lg-12">
																		<CustomSelect
																			options={occupationTypePrefixOptions}
																			value={formik.values.occupationType}
																			customStyles={{ lineHeight: "35px" }}
																			onChange={(value) => {
																				formik.setFieldValue("occupationType", value.value)

																			}

																			}
																			placeholder="select your occupation"

																			id="occupationType"
																			name="occupationType"

																		/>
																		{formik.touched.occupationType && formik.errors.occupationType ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.occupationType}
																				</div>
																			</div>
																		) : null}

																	</div>

																</div>
																<div className="form-group">
																	<label>Occupation details</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"occupationDetails"
																	)}`} id="occupationDetails"
																		{...formik.getFieldProps("occupationDetails")} />
																	{formik.touched.occupationDetails && formik.errors.occupationDetails ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.occupationDetails}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>Organization name</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"organizationName"
																	)}`} id="organazationName"
																		{...formik.getFieldProps("organizationName")} />
																	{formik.touched.organizationName && formik.errors.organizationName ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.organizationName}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>Organization position</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"organizationPosition"
																	)}`} id="organizationPosition"
																		{...formik.getFieldProps("organizationPosition")} />
																	{formik.touched.organizationPosition && formik.errors.organizationPosition ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.organizationPosition}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>Organization address</label>
																	<textarea type="text" className={`form-control form-control-lg ${getInputClasses(
																		"organizationAddress"
																	)}`} id="organizationAddress" row="1"
																		{...formik.getFieldProps("organizationAddress")} />
																	{formik.touched.organizationAddress && formik.errors.organizationAddress ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.organizationAddress}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>Organization city</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"organizationCity"
																	)}`} id="organizationCity"
																		{...formik.getFieldProps("organizationCity")} />
																	{formik.touched.organizationCity && formik.errors.organizationCity ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.organizationCity}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>Organization postal code</label>
																	<input type="number" className={`form-control form-control-lg ${getInputClasses(
																		"organizationPostalCode"
																	)}`} id="organizationPostalCode"
																		{...formik.getFieldProps("organizationPostalCode")} />
																	{formik.touched.organizationPostalCode && formik.errors.organizationPostalCode ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.organizationPostalCode}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>Organization state</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"organizationState"
																	)}`} id="organizationState"
																		{...formik.getFieldProps("organizationState")} />
																	{formik.touched.organizationState && formik.errors.organizationState ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.organizationState}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group row">
																	<div className="col-lg-12">
																		<label>Organization country</label>
																	</div>

																	<div className="col-lg-12">
																		<CustomSelect
																			options={organaziCountPrefixOptions}
																			value={formik.values.organizationCountry}
																			customStyles={{ lineHeight: "35px" }}
																			onChange={(value) => {
																				formik.setFieldValue("organizationCountry", value.value)

																			}

																			}
																			placeholder="select your country"

																			id="organizationCountry"
																			name="organizationCountry"

																		/>
																		{formik.touched.organizationCountry && formik.errors.organizationCountry ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.organizationCountry}
																				</div>
																			</div>
																		) : null}

																	</div>

																</div>

																<div className="form-group">
																	<label>Organization website</label>
																	<input type="text" className={`form-control form-control-lg ${getInputClasses(
																		"organizationWebsite"
																	)}`} id="organizationWebsite"
																		{...formik.getFieldProps("organizationWebsite")} />
																	{formik.touched.organizationWebsite && formik.errors.organizationWebsite ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.organizationWebsite}
																			</div>
																		</div>
																	) : null}
																</div>



															</div>

															<div className="pb-5" data-wizard-type="step-content">

																<div className="form-group row">
																	<div className="col-lg-12">
																		<label>Id type</label>
																	</div>

																	<div className="col-lg-12">
																		<CustomSelect
																			options={idTypePrefixOptions}
																			value={formik.values.idType}
																			customStyles={{ lineHeight: "35px" }}
																			onChange={(value) => {
																				formik.setFieldValue("idType", value.value)

																			}

																			}
																			placeholder="select your occupation"

																			id="idType"
																			name="idType"

																		/>
																		{formik.touched.idType && formik.errors.idType ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.idType}
																				</div>
																			</div>
																		) : null}

																	</div>

																</div>


																<div className="form-group">
																	<label>Id number</label>
																	<input type="number" className={`form-control form-control-lg ${getInputClasses(
																		"idNumber"
																	)}`} id="idNumber"
																		{...formik.getFieldProps("idNumber")} />
																	{formik.touched.idNumber && formik.errors.idNumber ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.idNumber}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group mx-1 row" >
																	<div className="col-lg-12 mx-0 px-0"><label>Id file</label></div>
																	<div className="col-lg-12 px-0 custom-file  uploadFile">
																		<input type="file" className="custom-file-input form-control-lg" onChange={onFileUploadIdFile} id="idFile"
																			name="idFile"
																		/>
																		<label className="custom-file-label" htmlFor="idFile">Choose file
																		{loadingIdFile && (
																			<CircularProgress className="ml-3" size={20} color="secondary" />
																		)}
																		</label>
																	</div>

																	<div className="col-lg-12 mt-5">
																		{fileIdFile !== "" ?
																			<div className="col-lg-4 col-md-6 col-sm-8" >
																				<CardImage image={fileIdFile} removeFile={removeFileIdFile} />
																			</div>
																			: null
																		}
																	</div>
																	{formik.touched.idFile && formik.errors.idFile ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.idFile}
																			</div>
																		</div>
																	) : null}


																</div>


																<div className="form-group">
																	<label>Birth date</label>
																	<input type="date" className={`form-control form-control-lg ${getInputClasses(
																		"birthDate"
																	)}`} id="birthDate" name="birthDate" max={setToday()}
																		{...formik.getFieldProps("birthDate")}
																	/>
																	{formik.touched.birthDate && formik.errors.birthDate ? (
																		<div className="fv-plugins-message-container">
																			<div className="fv-help-block">
																				{formik.errors.birthDate}
																			</div>
																		</div>
																	) : null}
																</div>
																<div className="form-group">
																	<label>Terms & conditions</label>

																	<p className="p-5 condition">
																		The General Data Protection Regulation (GDPR) — Europe’s strict privacy law that applies to companies worldwide with EU users — does not directly affect the terms and conditions of your website.

																		Although the GDPR doesn’t regulate what your terms and conditions must include, it mandates that you create a separate website privacy policy, as does the newly enacted California Consumer Privacy Act (CCPA). See our CCPA vs GDPR infographic to understand the differences between these two laws.

																					</p>


																</div>
																<div className="form-group">
																	<div className="checkbox-inline">
																		<label className="checkbox checkbox-lg checkbox-success">
																			<input type="checkbox" name="checkBox" id="checkBox"
																				{...formik.getFieldProps("checkBox")} />
																			<span></span>I agree with all the terms and conditions</label>
																		{formik.touched.checkBox && formik.errors.checkBox ? (
																			<div className="fv-plugins-message-container">
																				<div className="fv-help-block">
																					{formik.errors.checkBox}
																				</div>
																			</div>
																		) : null}
																	</div>

																</div>
															</div>
															<div className="d-flex justify-content-center border-top mt-5 pt-10">
																<div className="mr-2">
																	<button type="button" className="btn  font-weight-bolder text-uppercase previousBtn " data-wizard-type="action-prev"
																		onClick={handlePrev}>Previous</button>
																</div>
																<div>

																	{step !== 3 ?
																		<button type="submit" className="btn font-weight-bolder text-uppercase customBtn" >save & continue</button>
																		:
																		<button type="submit" className="btn  font-weight-bolder text-uppercase customBtn " >I agree & submit my information</button>
																	}
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
	)
}
export default KycForm