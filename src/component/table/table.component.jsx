import './table.styles.scss';

const TableC = ({
    firstName,
    average }) => {

    return (
        <tr>

            <td>{firstName}</td>
            <td>
                {average}
            </td>

        </tr>
    );
}

export default TableC;