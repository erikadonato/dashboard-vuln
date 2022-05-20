import { Nav, Ul, Li, NumberOfPage } from './styles'
import api from '../../services/api';

const Pagination = ({size, setData, url}) => {

  let tamAux = Math.ceil(size/50)

  let arr = []

  for(let i =1; i <= tamAux; i++){
    arr.push(i)
  }

  function attData(number) {
    if(number === 1) {
      api.get(url).then(response => setData(response.data.results))
    } else {
      api.get(`${url}?page=${number}`).then(response => {
        setData(response.data.results)
      })
    }
  }
  
    return (
      <Nav>
        <Ul>
          {arr.map(number => (
            <Li key={number}>
              <NumberOfPage onClick={() => {
                attData(number)              
                }}>
                {number}
              </NumberOfPage>
            </Li>
          ))}
        </Ul>
      </Nav>
    );
  };
  
  export default Pagination;
