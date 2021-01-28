import { useEffect, useState } from 'react';
import { getListOfData } from "../../firebase/firebase.utilis";
import { Link } from "react-router-dom"


const Homepage = () => {
    const [list, setList] = useState(undefined)

    useEffect(() => {
        const fetch = async () => {
            const data = await getListOfData();
            setList(data)

        }

        fetch()
        console.log(list);

    }, [])
    if (!list) {
        return <div>Loading...</div>
    }
    return (
        <div className="container">

            <ul>
                {
                    list.map(el => {
                        return <li><Link to={`/${el.id}`}>{el.data.grade}</Link></li>
                    })
                }
            </ul>

        </div>
    );
}

export default Homepage;