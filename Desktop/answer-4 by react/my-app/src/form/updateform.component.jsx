import '../form/formstyle.css'
import React, { useState } from 'react';

const UpdateFormdata = () => {
    const [form, updateForm] = useState([]);
    const [forms, changevalueForm] = useState({});

    const onSubmitForm = (event) => {
        event.preventDefault();
        let datainput = {};


        const getelement = event.target.elements;
        for (const names of getelement) {
            //switch
            switch(names.type){
                case 'text':
                case 'email':
                    datainput[names.name] = names.value
                    break;
                case 'radio':
                    if(names.checked){
                        datainput[names.name] = names.value
                    }
                    break;
            }
            // if (names.type === 'text') {
            //     datainput[names.name] = names.value
            // }
            // if (names.type === 'email') {
            //     datainput[names.name] = names.value
            // }
            // if (names.type === 'radio' && names.checked) {
            //     datainput[names.name] = names.value
            // }
            //if (names.type === 'radio' && names.id=='Radios2') {
                //datainput[names.name] = names.value
            //}
        }
        //let arratinputadata=[...form]
        //console.log(arratinputadata);
       // arratinputadata.push(datainput)
        //updateForm(arratinputadata)
        updateForm([...form,datainput])
        //console.log(form);

        fetch("https://google.com ", {
            method: "POST",
            headers: "headers",
            body: JSON.stringify(datainput)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (getelement) {
                console.log('success:', getelement);
            })
            .catch(function (error) {
                console.log('error:', error);
            })
        //.then(function (data) {
        // console.log(data)
        // });

    }
    const onChangeinputform = (event) => {
        const value = event.target.value;
        changevalueForm({ ...forms, [event.target.name]: value });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="offset-2 col-8 p-5">
                        <form className="font text" onSubmit={onSubmitForm}>
                            <div className="form-group">
                                <label for="names">نام خود را وارد کنید</label>
                                <input type="text" name="firstname" className="form-control" id="names" value={forms.firstName} onChange={onChangeinputform} />
                            </div>
                            <div className="form-group">
                                <label for="familly">نام خانوادگی خود را وارد کنید</label>
                                <input type="text" name="lastname" className="form-control" id="familly" value={forms.lastName} onChange={onChangeinputform} />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">ایمیل خود را وارد کنید</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={forms.email} onChange={onChangeinputform} />
                            </div>
                            <div><label className="form-check-label">جنسیت خود را انتخاب کنید</label></div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="Radios1" value="male" onChange={onChangeinputform} />
                                <label className="form-check-label" for="Radios1">
                                    مرد
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="Radios2" value="Female" onChange={onChangeinputform} />
                                <label className="form-check-label" for="Radios2">
                                    زن
                            </label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3"><b>ثبت</b></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="offset-2 col-8 p-5">
                        <div class="table-responsive-lg">
                            <table class="table table-striped texttable font">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">نام ورودی</th>
                                        <th scope="col">مقدار ورودی</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr className="bg-success">
                                        <th scope="row">firstname</th>
                                        <td >{forms.firstname}</td>
                                    </tr>
                                    <tr className="table-secondary" >
                                        <th scope="row">lastname</th>
                                        <td >{forms.lastname}</td>
                                    </tr>
                                    <tr className="bg-danger">
                                        <th scope="row">email</th>
                                        <td >{forms.email}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <th scope="row">gender</th>
                                        <td >{forms.gender}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="offset-2 col-8 p-5">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered texttable font">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">نام ورودی</th>
                                        <th scope="col">مقدار ورودی</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {form.map((item, index) => {
                                        return (
                                            <>
                                                <tr key={index} >
                                                    <th scope="row">firstname</th>
                                                    <td >{item.firstname}</td>
                                                </tr>
                                                <tr key={index}>
                                                    <th scope="row">lastname</th>
                                                    <td  >{item.lastname}</td>
                                                </tr>
                                                <tr key={index}>
                                                    <th scope="row">email</th>
                                                    <td >{item.email}</td>
                                                </tr>
                                                <tr key={index} >
                                                    <th scope="row">gender</th>
                                                    <td >{item.gender}</td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default UpdateFormdata