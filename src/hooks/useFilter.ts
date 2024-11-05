import { useState} from "react";
import { Product } from "../types/types";


export const useFilter = () => {
  
    const [filter, setFilter] = useState({
        minRange: 0,
        maxRange: 0,
        category: ['']
    });

    const [prevFilter, setPrevFilter] = useState({
        minRange: 0,
        maxRange: 0,
        category: ['']
    });

    const priceHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setPrevFilter({
            ...prevFilter,
            [name]: value,
        })
    }

    const categoryHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked)
        {
            setPrevFilter((prevFilter) => ({
                ...prevFilter,
                category: [
                    ...prevFilter.category, event.target.value
                ]
            }))
        }
        else if(!event.target.checked)
        {
            setPrevFilter((prevFilter) => ({
                ...prevFilter,
                category: prevFilter.category.filter(item => item !== event.target.value)
            }))
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFilter(prevFilter)
        setFilter((filter) => ({
            ...filter,
            category: filter.category.slice(1)
        }))
        
    }

    function isFilter() {
        let condition = 0;
        if(filter.minRange && filter.maxRange !== 0)
        {
            condition++   
        }
        if(!filter.category.includes('') && filter.category.length >= 1)
        {  
            condition++       
        }
        return condition > 0   
    }

    function filterProducts(product: Product, minRange: number, maxRange: number, category: string[] ){
        let condition = 0;
        if((minRange && maxRange !== undefined) || (minRange && maxRange !== null) || (minRange + maxRange !== 0) || (minRange < maxRange))
        {
            if(product.price >= minRange && product.price <= maxRange)
            {
                console.log(product.name + " precio: " + minRange + " - " + product.price + " - " + maxRange)
                condition++
            }
        }
        if(category.includes(product.category))
        {
            condition++
        }

        if(condition == 1 && (minRange + maxRange == 0))
        {
            console.log("Pasa los filtros: " + product.name)
            return true
        }
        else if(condition == 1 && (category.length == 0))
        {
            return true
        }
        else if(condition == 2)
        {
            return true
        }
        else{
            return false
        }
    }

    return{
        filter,
        filterProducts,
        priceHandle,
        categoryHandle,
        handleSubmit,
        isFilter
    }
}