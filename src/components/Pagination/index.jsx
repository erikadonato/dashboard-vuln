import { Nav, Ul, Li, NumberOfPage } from './styles'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <Nav>
        <Ul>
          {pageNumbers.map(number => (
            <Li key={number}>
              <NumberOfPage onClick={() => paginate(number)}>
                {number}
              </NumberOfPage>
            </Li>
          ))}
        </Ul>
      </Nav>
    );
  };
  
  export default Pagination;
