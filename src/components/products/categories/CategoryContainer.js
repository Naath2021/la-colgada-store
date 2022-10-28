import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { firebaseDb } from "../../../firebase/FirebaseInitializer"
import { collection, getDocs, query, where } from "firebase/firestore"
import ProductList from "../ProductList"

const CategoryContainer = () => {

  const { category } = useParams();
  const [productCategory, setProductCategory] = useState();
  const categoryCollection = collection(firebaseDb, "products");
  const queryFiltered = query(categoryCollection, where("category", "==", category))
  useEffect(() => {
    getProductsCategory()
  }, [category])

  const getProductsCategory = () => {
    category
      ? getDocs(queryFiltered).then((res) => {
        const data = res.docs.map((product) => {
          return { id: product.id, ...product.data() }

        })
        setProductCategory(data)
      }).catch(err => console.log(err))

      : getDocs(categoryCollection).then((res) => {
        const data = res.docs.map((product) => {
          return { id: product.id, ...product.data() }
        })
        setProductCategory(data)
      })
  }

  return (
    <div>{productCategory && <ProductList list={productCategory} />}</div>
  )
}

export default CategoryContainer