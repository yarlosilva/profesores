import './group.styles.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getData, firestore } from '../../firebase/firebase.utilis';
import {
    Badge,
    Card,
    CardHeader,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Progress,
    Table,
    Row,
    UncontrolledTooltip
} from "reactstrap";

import TableC from './../../component/table/table.component';


const GroupPage = () => {
    const { group } = useParams()
    const [currentResult, setCurrentResult] = useState()
    const [result, setResult] = useState();

    useEffect(() => {
        const getResult = async () => {
            const docRef = firestore.doc('result/l1aU30VzftlGgYP4Y91W');
            const data = await docRef.get();
            let res = data.data();
            const resMod = res[group];
            setCurrentResult(resMod)

        }
        getResult()
    }, [])
    console.log(currentResult)
    return currentResult ? (
        <>
            <h1 className='m-auto'>{group}</h1>
            <Row className="mt-5">

                <div className="col col-sm-8 m-auto">
                    <Card className="bg-default shadow" style={{ padding: '2rem' }}>
                        <CardHeader className="bg-transparent border-0">
                            <h3 className="text-white mb-0">Last Exams</h3>
                        </CardHeader>
                        <Table
                            className="align-items-center table-dark table-flush"
                            responsive

                        >
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentResult.map(el => <TableC {...el} />)
                                }
                            </tbody>
                        </Table>
                    </Card>
                </div>
            </Row>
        </>) : (<div>Loading...</div>);
}

export default GroupPage;