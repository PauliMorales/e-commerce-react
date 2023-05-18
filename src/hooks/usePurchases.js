import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import { useState } from "react"

const usePurchases = () => {

    const [purchases, setPurchases] = useState()
    const dispatch = useDispatch()
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

    const buyThisCart = () => {
        axios
            .post(url, {}, getConfigToken())
            .then(() => {
                dispatch(getAllProductsCartThunk());
            })
            .catch((err) => console.error(err))
    }

    const getAllProductsPurchased = () => {
        axios
            .get(url, getConfigToken)
            .then(() => {
                setPurchases(getAllProductsCartThunk());
            })
            .catch((err) => console.error(err))
    }

    return { purchases, getAllProductsPurchased, buyThisCart  }
}

export default usePurchases