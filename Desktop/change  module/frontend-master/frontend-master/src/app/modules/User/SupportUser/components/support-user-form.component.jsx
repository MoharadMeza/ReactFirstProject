import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input as CustomInput } from "../../../../shared/metronic/_partials/controls/forms/Input"
import SelectFlag from "../../../../shared/components/select-with-flag/select-with-flag.component"
import CustomSelect from "../../../../shared/components/custom-select/custom-select.component";
import { initialValues } from "./support-user-form.init-values";
import { UploadFile } from "../../../../shared/components/upload-file/upload-file";
import { uploadFile as Upload } from "../../../../shared/components/upload-file/upload-file.api";
import { CardImage } from "../../../../shared/components/upload-file/card-image";
import { countriesCode } from "../../../../helpers/countries";
import { ModuleCreateSchema } from "./support-form.schema"
import { supportType } from "./support-user.enum"


export function ModuleEdit({ btnRef, saveRecord }) {
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(false)

    const onFileUpload = async (event) => {
        setLoading(true)
        const data = new FormData();
        data.append("file", event.target.files[0]);
        data.append("module", "supports");
        btnRef.current.disabled = true
        const responseUplode = await Upload(data);
        btnRef.current.disabled = false
        if (responseUplode?.data?.success) {
            setFiles([...files, responseUplode.data.data.fileAddress])
            setLoading(false)
        }
    };

    const removeFile = (index) => {
        setFiles(files.filter((item, i) => i !== index))
    }

    const prepareObjectforSending = (values) => {
        let obj = Object.assign(values)
        obj.uploadFile = files
        return obj
    }

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={ModuleCreateSchema}
                onSubmit={values => {
                    saveRecord(prepareObjectforSending(values));
                }}
            >
                {({ handleSubmit, setFieldValue, values, errors }) => (
                    <>
                        <Form className="form form-label-right">
                            <div className="form-group row">
                                <div className="col-lg-6">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        component={CustomInput}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="col-lg-6 mt-lg-0 mt-5">
                                    <label htmlFor="">Phone Number</label>
                                    <div className="row">
                                        <div className="col-5 pr-0 mr-auto">
                                            <SelectFlag
                                                customStyles={{ lineHeight: "20px"}}
                                                options={countriesCode}
                                                name="countryCode"
                                                placeholder="country code"
                                                onChange={(value) => setFieldValue("countryCode", value.value)}
                                            />
                                        </div>
                                        <div className="col-7 pl-0">
                                            <Field
                                                disabled={values && !values.countryCode}
                                                min={0}
                                                type="number"
                                                name="contactPhone"
                                                component={CustomInput}
                                                placeholder="Phone"
                                            />
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-lg-4">
                                    <Field
                                        type="time"
                                        name="contactHour"
                                        component={CustomInput}
                                        label="Please Enter Hour"
                                        onChange={(value) => setFieldValue("contactHour", value.target.value)}
                                    />
                                </div>
                                <div className="col-lg-4 mt-lg-0 mt-5">
                                    <label htmlFor="">Type of Support</label>
                                    <CustomSelect
                                        name="typeOfSupport"
                                        options={supportType}
                                        customStyles={{ lineHeight: "20px" }}
                                        onChange={value => {
                                            setFieldValue("typeOfSupport", value.value);
                                        }}
                                    />
                                    <ErrorMessage component="div" className="mt-1 text-danger" name="typeOfSupport" />
                                </div>
                            </div>
                            <div className="form-group row mb-5">
                                <div className="col-lg-4">
                                    <Field
                                        loading={loading}
                                        hidden
                                        type="file"
                                        name="uploadFile"
                                        component={UploadFile}
                                        onChange={(event) => {
                                            if (event.target.files.length)
                                                onFileUpload(event)
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="row mb-5">
                                {files.length > 0 && files.map((item, index) =>
                                    <div className="col-6 mb-5 col-lg-3" key={index}>
                                        <CardImage image={item} index={index} removeFile={removeFile} />
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <Field
                                    name="message"
                                    as="textarea"
                                    rows="10"
                                    className="form-control"
                                />
                                <ErrorMessage component="div" className="mt-1 text-danger" name="message" />
                            </div>
                            <button
                                type="submit"
                                style={{ display: "none" }}
                                ref={btnRef}
                                onSubmit={() => !loading && handleSubmit()}
                            ></button>
                        </Form>
                    </>
                )}
            </Formik>
        </>
    );
}