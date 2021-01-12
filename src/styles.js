import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgLoading = styled.img`
  width: 500;
  height: 500;
`;

export const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Counter = styled.div`
  font-size: 15px;
  color: palevioletred;
`;

export const Title = styled.div`
  font-size: 17px;
  color: palevioletred;
`;

export const MenuBaseContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListChild = styled.li`
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;

    li:last-child {
    border: none;
  }

  li a {
    text-decoration: none;
    color: #000;
    display: block;
    width: 200px;
  
    -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
    -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
    -o-transition: font-size 0.3s ease, background-color 0.3s ease;
    -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
    transition: font-size 0.3s ease, background-color 0.3s ease;
  }
  
  li a:hover {
    font-size: 30px;
    background: #f6f6f6;
  }
`;