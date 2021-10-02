import React, { useEffect, useState } from 'react'
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers"
import './rates-table.scss'
const RatesTable = (props) => {

    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        let tempTableData = []
        props.countryName.forEach(item => {
            let data = { country: item.country, type: item.type ? item.type : item.call.operator, call: item.call.rate ? item.call.rate : "__", sms: item.sms.rate ? item.sms.rate : "__", fax: item.fax.rate ? item.fax.rate : "__" }
            tempTableData.push(data);

        });

        setTableData(tempTableData)
        setLoading(false)

    }, [props.countryName])


    return (
        <>
            {loading ? "" :
                <>
                    <div className="container-fluid rates-table rates-table-desktop">
                        <div className="row ">
                            <div className="col col-12">
                                <table className="table tableDesktop">
                                    <thead className="theadRatesTable">
                                        <tr>
                                            <th style={{ width: "40%" }}>Country name</th>
                                            <th style={{ width: "20%" }}>{props.labelTable}/min</th>
                                            <th style={{ width: "20%" }}>{props.labelTable}/sms</th>
                                            <th style={{ width: "20%" }}>Fax/pag</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tbodyRatesTable" >
                                        {
                                            tableData.map((item, index) => {

                                                return (
                                                    <tr key={index}>

                                                        <td>  <img
                                                            src={toAbsoluteUrl(`/media/svg/flags/001-mauritius.svg`)}
                                                            style={{ width: 25, margin: "2px", borderRadius: "10%" }}
                                                            alt={index}
                                                        />{` `}{item.country}({item.type})</td>
                                                        <td>{item.call}</td>
                                                        <td>{item.sms}</td>
                                                        <td>{item.fax}</td>
                                                    </tr>
                                                )


                                            })
                                        }



                                    </tbody>
                                </table>



                            </div>
                        </div>
                    </div>

                        <div className="container rates-table rates-table-mobile">
                            <div className="row ">
                                <div className="col-12 px-0">
                                    {
                                        tableData.map((item, index) => {
                                            return (
                                                <table className="table tableMobile" key={index}>

                                                    <tbody className="tbodyTableMobile" >



                                                        <tr >
                                                            <td className="tdLable">
                                                                Country name
                                                            </td>

                                                            <td>  <img
                                                                src={toAbsoluteUrl(`/media/svg/flags/001-mauritius.svg`)}
                                                                style={{ width: 25, margin: "2px", borderRadius: "10%" }}
                                                                alt={index}
                                                            />{` `}{item.country}</td>

                                                        </tr>
                                                        <tr>
                                                            <td className="tdLable">{props.labelTable}/min</td>
                                                            <td>{item.call}</td>

                                                        </tr>
                                                        <tr >
                                                            <td className="tdLable">{props.labelTable}/sms</td>
                                                            <td>{item.sms}</td>

                                                        </tr>

                                                        <tr>
                                                            <td className="tdLable">Fax/pag</td>
                                                            <td>{item.fax}</td>
                                                        </tr>







                                                    </tbody>
                                                </table>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                      

                </>

            }
        </>
    )
}
export default RatesTable