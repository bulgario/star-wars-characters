import React, { useState, useEffect } from 'react';
import { Loading, ImgLoading, Button, Counter, Title, MenuBaseContainer, ListChild } from '../../styles';
import yoda from '../../assets/yoda.gif';

const Request = (props) => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ currentData, setCurrentData ] = useState();
  const [ next, setNextPage ] = useState();
  const [ previous, setPreviousPage ] = useState();
  const [ totalPages, setTotalPages ] = useState();
  const [ loading, setLoading ] = useState(false);

  const getData = (url) => {
    try {
      setLoading(true);
      setTimeout(() => {
        fetch(url)
        .then(data => data.json())
        .then(data => {
          setTotalPages(Math.ceil(data.count/10));
          setCurrentData(data.results);
          setNextPage(data.next);
          setPreviousPage(data.previous);
        });
        setLoading(false);
      }, 2000);
     
		} catch (err) {
      console.log("Error trying get Datas", err)
      setLoading(false);
			return err
		}
  }

  const listItens = () => (
    currentData && (
      <MenuBaseContainer>
        {currentData.map(data => (
          <ListChild>{data.name}</ListChild>
        ))}    
      </MenuBaseContainer>
    )
  )

  useEffect(() => {
    getData(`https://swapi.dev/api/${props.path}?format=json&page=1`);
  }, []);


  return (
    <>
    { loading ? 
    <Loading>
      <ImgLoading src={yoda} alt="Loading..." />
    </Loading> : (
      <>
        {listItens()}

        <Loading>
          { previous && <Button onClick={() => { getData(previous); setCurrentPage(currentPage - 1) }}>Previous</Button> }
          { next && <Button onClick={() => { getData(next); setCurrentPage(currentPage + 1) }}>Next</Button> }
        </Loading>
        
          <Counter>
            <Title>Total de Páginas {totalPages}</Title>
          </Counter>
          <Counter>
            <Title>Página Atual {currentPage}</Title>
          </Counter>
        
      </>
    )}
    </>
  );
}

export default Request;