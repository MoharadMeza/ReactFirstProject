import React, { useEffect, useState } from 'react'
import { LoadingDialog } from "../../../../_metronic/_partials/controls/LoadingDialog";
import { Formik } from "formik";
import axios from 'axios'
import { shallowEqual, useSelector } from "react-redux";
import CustomSelect from "../../../shared/components/custom-select/custom-select.component"
import SelectFlag from '../../../shared/components/select-with-flag/select-with-flag.component'
import RatesTable from './rates-table/rates-table.component'
import initialValues from "./rates.init-value"
import {
    categoryCountryPrefixOptions, currencyPrefixOptions
} from './rates.enum'
import './rates.scss'

function RatesForm() {
    const { currencyUser } = useSelector(
        ({ auth }) => ({
            currencyUser: auth.user.currencySettings.currency!==null? auth.user.currencySettings.currency
            : 'eur'
        }),
        shallowEqual
    );
    const [entities, setEntities] = useState({});
    const [loading, setLoading] = useState(true);
    const [firstButton, setFirstButton] = useState({
        A: "lightblue", B: "white", C: "white",
        D: "white", E: "white", F: "white", G: "white", H: "white", I: "white", J: "white", K: "white", L: "white", M: "white", N: "white", O: "white", P: "white", Q: "white", R: "white", S: "white", T: "white", U: "white", V: "white", W: "white", X: "white",
        Y: "white", Z: "white"
    });
    const [prevColor, setPrevColor] = useState("A");
    const [showCountry, setShowCountry] = useState({
        A: true, B: false, C: false,
        D: false, E: false, F: false, G: false, H: false, I: false, J: false, K: false, L: false, M: false, N: false, O: false, P: false, Q: false, R: false, S: false, T: false, U: false, V: false, W: false, X: false,
        Y: false, Z: false
    })
    const [prevCountry, setPrevCountry] = useState("A");
    const [labelTable, setLabelTable] = useState("IRR")

    const changeStep = (nameCountry) => {
        let tempButtonColor = firstButton;
        tempButtonColor[nameCountry] = "lightblue"
        tempButtonColor[prevColor] = "white"
        setFirstButton(tempButtonColor)
        setPrevColor(nameCountry)
        let tempShowCountry = showCountry;
        tempShowCountry[nameCountry] = true;
        tempShowCountry[prevCountry] = false;
        setShowCountry(tempShowCountry);
        setPrevCountry(nameCountry);
    }

    const getCurrency = async (currency) => {
        setLoading(true);
        setLabelTable(currency.toUpperCase())
        const response = await axios.post(`https://currency-exchanger.007voip.com/api/rates/all/categorized`, {
            "currency": `${currency}`
        });
        if (response?.data?.success) {
            setEntities(
                response.data.data
            );

        }

        setLoading(false);
    };

    useEffect(() => {
        setLoading(true)
        initialValues.currencySelect=currencyUser
        const getCountry = async () => {


            const response = await axios.post(`https://currency-exchanger.007voip.com/api/rates/all/categorized`, {
                "currency": currencyUser.toLowerCase()
            });
            if (response?.data?.success) {
                setEntities(
                    response.data.data
                );

            }

            setLoading(false);
        };
        getCountry();
    }, [currencyUser])
    return (
        <>
            < Formik
                initialValues={initialValues}
                enableReinitialize={true}
            >
                {formik => {
                    const {
                        setFieldValue,
                        values

                    } = formik;
                    return (
                        <>
                            <div className="row rates pr-lg-5">
                                <div className="col-12 bg-white">
                                    <h3 className="mt-5 mb-5 p-5">Select a country</h3>
                                </div>
                                <div className="col-12 Rates">
                                    <div className="d-flex flex-column-fluid">


                                        <div className="container">
                                            <div className="card card-custom card-transparent shadow-none">
                                                <div className="card-body p-0" >


                                                    <div className="ratesForm" id="kt_wizard">

                                                        <div className="btn-group nav mt-5 mb-lg-5 mb-md-5 ratesFormNav" role="group" aria-label="Basic example">
                                                            <button type="button" className="btn" style={{ background: firstButton.A }} onClick={() => changeStep("A")}>A</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.B }} onClick={() => changeStep("B")}>B</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.C }} onClick={() => changeStep("C")}>C</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.D }} onClick={() => changeStep("D")}>D</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.E }} onClick={() => changeStep("E")}>E</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.F }} onClick={() => changeStep("F")}>F</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.G }} onClick={() => changeStep("G")}>G</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.H }} onClick={() => changeStep("H")}>H</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.I }} onClick={() => changeStep("I")}>I</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.J }} onClick={() => changeStep("J")}>J</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.K }} onClick={() => changeStep("K")}>K</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.L }} onClick={() => changeStep("L")}>L</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.M }} onClick={() => changeStep("M")}>M</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.N }} onClick={() => changeStep("N")}>N</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.O }} onClick={() => changeStep("O")}>O</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.P }} onClick={() => changeStep("P")}>P</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.Q }} onClick={() => changeStep("Q")}>Q</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.R }} onClick={() => changeStep("R")}>R</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.S }} onClick={() => changeStep("S")}>S</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.T }} onClick={() => changeStep("T")}>T</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.U }} onClick={() => changeStep("U")}>U</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.V }} onClick={() => changeStep("V")}>V</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.W }} onClick={() => changeStep("W")}>W</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.X }} onClick={() => changeStep("X")}>X</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.Y }} onClick={() => changeStep("Y")}>Y</button>
                                                            <button type="button" className="btn" style={{ background: firstButton.Z }} onClick={() => changeStep("Z")}>Z</button>
                                                        </div>
                                                        {loading ? <LoadingDialog
                                                            isLoading={loading}
                                                            text="loading..."
                                                        /> :
                                                            <div className="card card-custom card-shadowless rounded-top-0" >
                                                                <div className="card-body p-0 ">

                                                                    <div className="form-group row ">

                                                                        <div className="col-lg-5 col-sm-9  mx-sm-3 select">
                                                                            <CustomSelect
                                                                                options={categoryCountryPrefixOptions}
                                                                                value={initialValues.categoryCountry}
                                                                                customStyles={{ lineHeight: "35px" }}
                                                                                onChange={(value) => {
                                                                                    setFieldValue("nationality", value.value)
                                                                                    changeStep(value.value)

                                                                                }

                                                                                }

                                                                                id="nationality"
                                                                                name="nationality"

                                                                            />

                                                                        </div>
                                                                        <div className="col-lg-5 col-md-6 mt-5 ml-lg-3 ml-md-3 col-sm-9 mx-sm-3 selectFlag">
                                                                            <SelectFlag
                                                                                value={values.currencySelect.toLowerCase()}
                                                                                options={currencyPrefixOptions}
                                                                                customStyles={{ lineHeight: "35px" }}
                                                                                onChange={value => {
                                                                                   setFieldValue("currencySelect",value.value)
                                                                                    getCurrency(value.value)

                                                                                }}
                                                                                id="currencySelect"
                                                                                name="currencySelect" />

                                                                        </div>



                                                                    </div>


                                                                    <div className="row  py-8  py-lg-15 ">
                                                                        <div className="col-lg-12 col-md-12 col-sm-12">


                                                                            {showCountry.A ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 px-2">


                                                                                    <RatesTable countryName={entities.A} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.B ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">

                                                                                    <RatesTable countryName={entities.B} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""}
                                                                            {showCountry.C ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.C} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.D ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.D} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.E ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.E} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.F ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.F} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.G ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.G} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.H ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.H} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.I ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.I} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.J ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.J} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.K ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.K} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.L ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.L} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.M ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.M} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.N ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.N} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.O ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.O} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.P ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.P} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.Q ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.Q} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.R ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.R} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.S ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.S} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.T ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.T} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.U ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.U} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.V ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.V} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.W ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.W} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.X ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.X} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.Y ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.Y} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }
                                                                            {showCountry.Z ?
                                                                                <div className="pb-5 col-lg-12 col-md-12 col-sm-12 ">


                                                                                    <RatesTable countryName={entities.Z} labelTable={labelTable} />

                                                                                </div>
                                                                                : ""
                                                                            }








                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        }
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

                }
            </Formik >
        </>
    )
}
export default RatesForm