import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { BeatLoader } from 'react-spinners';
import Error from './Error';
import * as Yup from 'yup';
import useFetch from '@/hooks/use-fetch';
import { login } from '@/db/apiAuth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UrlState } from '@/context';


const Login = () => {
    const [errors, setErrors] = useState([])
    const [fromData, setFromData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const longLink = searchParams.get("createNew");

    const handelChangInput = (e) => {
        const {name, value} = e.target;
        setFromData((previous)=>({...previous, [name]: value}));
    };
    const {data,loading,fn: fnLogin, error} = useFetch(login,fromData);
    const {fetchUser} = UrlState();
    useEffect(() => {
        console.log(data);        
        if (error === null && data) {
            navigate(`/dashboard?${longLink?`createNew=${longLink}`:""}`)
            fetchUser();
        }
    }, [data,error])
    
    const handelLogin =async (e) => {
        setErrors([]);
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email('Invalid email').required('Email is required'),
                password: Yup.string().required('Password is required').min(6,"Password must be at least 6 characters"),
            }) 
            await schema.validate(fromData,{abortEarly:false});
            //api call
            await fnLogin();

        } catch (e) {
            const newErrors = {};
            e?.inner?.forEach(err => {
                newErrors[err.path]= err.message;
            });
            setErrors(newErrors)
        }
    }
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>to your account if you have one</CardDescription>
                    {error && <Error message={error.message} />}
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className='space-y-1'>
                        <Input name="email" type="email" placeholder="Enter Email" onChange={handelChangInput}/>
                        {errors.email && <Error message={errors.email} />}
                    </div>
                    <div className='space-y-1'>
                        <Input name="password" type="password" placeholder="Enter password" onChange={handelChangInput}/>
                        {errors.password && <Error message={errors.password} />}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" onClick={handelLogin}>{loading? <BeatLoader size={10} color='#36d7b7'/>:'Login'}</Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Login;
