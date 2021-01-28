import './create-question.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getListOfData } from '../../firebase/firebase.utilis';

const CreateQuestionComponent = ({ match }) => {
    const [data, setData] = useState();


    useEffect(() => {
        const getData = async () => {
            const Finaldata = await getListOfData();
            setData(Finaldata)
            console.log(Finaldata)

        }
        getData()
    }, [])
    return data ? (
        <div className="row">
            <div className="col-lg-6 m-auto">

                {
                    data.map(el => <div className="student-class">
                        <Link to={`${match.url}/${el.id}`}>{el.data.grade}
                            <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                        </Link>
                    </div>)
                }

            </div >
        </div >
    ) : (<div>Loading...</div>);
}

export default withRouter(CreateQuestionComponent);