import {
    Flex,
    Stack,
    Box,
    Image,
    Heading,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    SimpleGrid,
    Text,
   
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import react,{useState,useEffect} from "react";
  import axios from "axios"
import { ProductCard } from '../Components/ProductCard';
import { Loading } from '../Components/Loading';
  
  
 export function Home() {

   const [data,setData]= useState([])
   const [loading,setLoading]= useState(false)

   useEffect(()=>{
        setLoading(true)
     axios.get("https://render-api-go2p.onrender.com/products")
     .then((res)=>{
      //  console.log(res.data)
        setData(res.data)
        setLoading(false)
     }).catch((err)=>{
        console.log(err)
     })
   },[])
  
   if(loading){
    return <Loading/>
   }



    return (
     <>
        <SimpleGrid columns={[1,2,3]} spacing={5}>
        {data.map((el)=><ProductCard key={el.id} data={el} /> )}
       </SimpleGrid>
     </>
        
     
    );
  }
  
