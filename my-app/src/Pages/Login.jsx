import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    useColorModeValue
  } from '@chakra-ui/react';
  import {useState} from "react"
import { Form, Navigate, useNavigate } from 'react-router-dom';
  
  export function Login() {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
     const navigate=useNavigate()
    const handleLogin=(e)=>{
         e.preventDefault()

        const user={
           "email":email,
           "password":password
        }
        // console.log(user)
        if(user.email=="" || user.password==""){
            alert("Invalid Credentials")
        }
        else{
            alert("Success Login")
            navigate("/")
        }
    }


    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={4} w={'full'} maxW={'md'} p={6}  bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'} >
            <Heading fontSize={'2xl'}>Log in to your account</Heading>
           <form onSubmit={handleLogin}>
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            <Stack  mt={4} spacing={6}>
              <Button type="submit" colorScheme={'pink'} variant={'solid'}>
                Sign in
              </Button>
              
            </Stack>
            </form> 
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={"https://static.toiimg.com/photo/92751252.cms"
            }
          />
        </Flex>
      </Stack>
    );
  }