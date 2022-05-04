import { React, useState, useEffect } from 'react'
import '../styles/Home.css';
import axios from 'axios'


function PostItem() {

  const [products, setProducts] = useState([])

  // const fetchNews = () => {
  //   axios.get(`http://localhost:5000/data`)
  //     .then((response) => {
  //       setProducts(response.data)
  //     })
  //     .catch(error => console.log(error));
  // }

  useEffect (() => {
    axios.get(`http://localhost:5000/data`)
      .then((response) => {
        setProducts(response.data)
      })
      .catch(error => console.log(error));
  } ,[])
  

  return (

    <div >
      {
        products.map((item) => {
          return (
            <div className='post' >
              <img className='post-img' src={item.img} />
              <h2 className='post-title'>{item.title}</h2>
              <p className='post-desc'>{item.description}</p>
            </div>

          )
        })
      }




    </div>
  )
}

// export default PostItem




// const Product = ({ title, category }) => {
//   return (
//     <article>
//       <h3>{title}</h3>
//       <p>{category}</p>
//     </article>
//   );
// };

// const PostItem = props => {
//   const { products } = props;

//   const renderProducts = products.map(({ id, title, category }) => {
//     return (
//       <li key={id}>
//         <Product title={title} category={category} />
//       </li>
//     );
//   });

//   return <ul>{renderProducts}</ul>;
// };

export default PostItem;