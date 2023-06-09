import React,{useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import AllRoutes from './AllRoutes'
import { API_getCategories,API_getProducts,API_getOrders,API_getUsers } from './api'
import {getCategories} from './reducers/features/category/categorySlice'
import { getProducts } from './reducers/features/products/productSlice'
import Loading from './Pages/Loading/Loading'
import { setLoading } from './reducers/features/loading/loadingSlice'
import Alert  from './Components/Alert/Alert'

import { setOrders } from './reducers/features/orders/orderSlice'
import { setUsers } from './reducers/features/users/userSlice'
const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
      const getCategoryData = async()=>{
          dispatch(setLoading(Boolean(true)))
          try {

            const {data}=await API_getCategories();
            dispatch(getCategories(Object(data)))
          } catch (error) {
            console.log("error",error)
          }
          dispatch(setLoading(Boolean(false)))
      }
      getCategoryData();
      const getProductData =async()=>{
          try {
            const {data} = await API_getProducts();
            dispatch(getProducts(Object(data)))
          } catch (error) {
            console.log("error",error)
          }
      }
      getProductData()

      const getOrdersData=async()=>{
        try {
            const {data}=await API_getOrders();
            dispatch(setOrders(data))
        } catch (error) {
          console.log(error)
        }
      }
      getOrdersData()
      const getUsersData =async()=>{
        try {
          const {data}=await API_getUsers()
          dispatch(setUsers(data))
        } catch (error) {
          console.log(error)
        }
      }
      getUsersData()
  },[])
  return (
      <>
      <Loading />
      <Alert/>
      <Router>
        <AllRoutes />
      </Router>
    </>

  )
}

export default App
