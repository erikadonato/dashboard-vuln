import { useEffect, useState } from 'react';
import api from '../../services/api';
import { SmallCardContainer, CardSpace, PaginationSpace } from './styles'
import { Container } from '../Container/styles'
import  Pagination  from '../Pagination'

const SmallCard = () => {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

     // Get current posts
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
 
      // Change page
     const paginate = (pageNumber) => setCurrentPage(pageNumber);
 

    useEffect(() => {
        api.get('/api/vulnerabilities/').then(response => setData(response.data.results))
    })


    return (
        <Container>
            <div>
            <CardSpace>
                {currentPosts.map((item) => {
                    return (
                        <SmallCardContainer>
                            {item.title}
                        </SmallCardContainer>
                    )
                })}
            </CardSpace>
                <Pagination 
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                />
             </div>
             <div>
                 
             </div>
        </Container>
    )
}

export default SmallCard;