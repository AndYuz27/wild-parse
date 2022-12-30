import {useState, useEffect} from 'react'
import {getCards} from "../../api.js"
import {Link} from "react-router-dom"
import Card from '../Card/Card.js';



const Catalog = () =>{

const [pords, setProds] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    const setNewCards = async () => {
        let res = await getCards();
        setIsLoaded(true);
        console.log(res);
        setProds(res);
    };
    setNewCards();
}, []);


if (!isLoaded) {
    return(
<div className='loading_block'>
  <div className='bb'>
    <h2>Пожалуйста подождите, данные загружаются</h2>
    <p>Примечание: Данные могут загружаются примерно 20 сек-1 мин.</p>
  </div>
</div>
    );
  } else {
    return (
        <div className="cards_main">
                  <Link className='sub_inp2' to="/search" /*className="hdr_link"*/>Поиск</Link>
        <div className="ff">

        {pords.map((el, index) => {return <Card key={index} prod={el}/>})}
      </div>
      </div>
    );
  }




    // return(

    //         <table>
    //                 <tr><th>Данные с карточки</th></tr>
    //                 {pords.map((el, index) => {return <Card key={index} prod={el}/>})}
    //             </table>

    //         </div>
    //     </div>
    // )
}

export default Catalog

