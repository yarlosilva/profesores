import './side-nav.styles.scss';

import { Link } from "react-router-dom";
// reactstrap components
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Navbar,
    Nav,
    Container,
    Media
} from "reactstrap";


const SideNav = () => {
    return (
        <>
            <div className="row">

                <div className="col-lg-6 m-auto">
                    <Link to='/grade'>Create Question </Link>
                    <div className="student-class">
                        <Link to='/1'>
                            1st
                        {/*el.grade*/}
                            <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                        </Link>

                    </div>
                    <div className="student-class">
                        <Link to='/2'>
                            2nd
                        {/*el.grade*/}
                            <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                        </Link>

                    </div>
                    <div className="student-class">
                        <Link to='/3'>
                            3rd
                        {/*el.grade*/}
                            <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                        </Link>

                    </div>
                    <div className="student-class">
                        <Link to='/4'>
                            4th
                        {/*el.grade*/}
                            <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                        </Link>

                    </div>
                    <div className="student-class">
                        <Link to='/5'>
                            5th
                        {/*el.grade*/}
                            <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                        </Link>

                    </div>
                    <div className="student-class">
                        <Link to='/6'>
                            6th
                        {/*el.grade*/}
                            <span style={{ backgroundColor: '#e74c3c' }} className="student-class__outlined">&nbsp;</span>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SideNav;