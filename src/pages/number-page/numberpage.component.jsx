import { Link, useParams, withRouter } from 'react-router-dom';

const NumberPage = ({ match }) => {
    const { id } = useParams();
    return (
        <div className="row">
            <div className="col-lg-6 m-auto">
                <div className="student-class">
                    <Link to={`${match.url}/${id}A`}>
                        {`${id}A`}
                        {/*el.grade*/}
                        <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                    </Link>

                </div>
                <div className="student-class">
                    <Link to={`${match.url}/${id}B`}>
                        {`${id}B`}
                        {/*el.grade*/}
                        <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                    </Link>

                </div>
                <div className="student-class">
                    <Link to={`${match.url}/${id}C`}>
                        {`${id}C`}
                        {/*el.grade*/}
                        <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                    </Link>

                </div>
                <div className="student-class">
                    <Link to={`${match.url}/${id}D`}>
                        {`${id}D`}
                        {/*el.grade*/}
                        <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                    </Link>

                </div>
                <div className="student-class">
                    <Link to={`${match.url}/${id}E`}>
                        {`${id}E`}
                        {/*el.grade*/}
                        <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                    </Link>

                </div>
                <div className="student-class">
                    <Link to={`${match.url}/${id}F`}>
                        {`${id}F`}
                        {/*el.grade*/}
                        <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default withRouter(NumberPage);