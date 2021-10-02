// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "../../../../../shared/metronic/_partials/controls/forms/Input";
/* change module */
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component";
import { UploadFile } from "../../../../../shared/components/upload-file/upload-file";
import { CardImage } from "../../../../../shared/components/upload-file/card-image";
import { uploadFile as Upload } from "../../../../../shared/components/upload-file/upload-file.api";
import { ModuleCreateSchema } from "./user-create-form.schema";
import { usersRole } from "../users-ui.helpers";

export function ModuleCreateForm({ record, btnRef, saveRecord }) {
    const [uploadFile, setUploadFile] = useState();
    const [loading, setLoading] = useState(false)

    const prepareObjectforSending = (values) => {
        let obj = Object.assign(values)
        obj.profile.picture = uploadFile
        return obj
    }


    const onFileUpload = async (event) => {
        setLoading(true)
        const data = new FormData();
        data.append("file", event.target.files[0]);
        data.append("module", "users");

        const responseUplode = await Upload(data);

        if (responseUplode?.data?.success) {
            setUploadFile(responseUplode.data.data.fileAddress)
            setLoading(false)
        }
    };


    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={record}
                validationSchema={ModuleCreateSchema}
                onSubmit={(values) => {
                    saveRecord(prepareObjectforSending(values));
                }}
            >
                {({ handleSubmit, setFieldValue, errors, touched }) => {
                    return (
                        <>
                            <Form className="form form-label-right">
                                <div className="form-group mb-5 row">
                                    <div className="col-lg-3">
                                        <Field
                                            name="profile.name"
                                            component={Input}
                                            placeholder="Name"
                                            label="Name"
                                            style={{ border: errors && errors.profile && touched.profile && "1px solid red" }}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="profile.name"
                                            className="text-danger mt-1"
                                        />
                                    </div>
                                    <div className="col-lg-2">
                                        <label htmlFor="">Choose Role</label>
                                        <CustomSelect
                                            name="role"
                                            customStyles={{ lineHeight: '20px' }}
                                            value={record && record.role}
                                            options={usersRole}
                                            onChange={(value) => setFieldValue("role", value.value)}
                                        />
                                        <ErrorMessage name="role" component="div" className="text-danger mt-1"/>
                                    </div>

                                    <div className="col-lg-4">
                                        <Field
                                            name="email"
                                            component={Input}
                                            placeholder="Email"
                                            label="Email"
                                        />
                                    </div>

                                    <div className="col-lg-3">
                                        <Field
                                            name="password"
                                            component={Input}
                                            placeholder="Password"
                                            label="Password"
                                        />
                                    </div>
                                </div>



                                <CardImage image={uploadFile} removeFile={() => setUploadFile(null)} />
                                <div className="mt-5">
                                    <Field
                                        loading={loading}
                                        name="profile.picture"
                                        component={UploadFile}
                                        onChange={onFileUpload}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={{ display: "none" }}
                                    ref={btnRef}
                                    onSubmit={() =>
                                        handleSubmit()
                                    }
                                ></button>
                            </Form>
                        </>
                    )
                }}
            </Formik>
        </>
    );
}
