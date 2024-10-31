import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #CACACA;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div` /* Corrigido de "content" para "Content" */
  background-color: #FFFF;
  width: 50%; /* Corrigido de "widht" para "width" */
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row; /* "Row" deve ser em minúsculas */
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column; /* "Column" deve ser em minúsculas */
  justify-content: space-between;
  align-items: center;
`;




// import styled from 'styled-components';

// export const Container = styled.div
//     width: 100%;
//     height: 100vh;
//     background-color: #CACACA;

//     display: flex;
//     align-items: center;
//     justify-content: center;
    


//     export const content = styled.div
//          background-color: #FFFF;
//          widht: 50%;
        
         

//     export const Row = styled.div
//          display: flex;
//          flex-direction: Row;
//          justify-content: space-between;
//          align-items: center;


//      export const Column = styled.div
//          display: flex;
//          flex-direction: Column;
//          justify-content: space-between;
//          align-items: center;