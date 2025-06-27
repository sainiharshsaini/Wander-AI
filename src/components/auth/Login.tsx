"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import client from "@/lib/supabase/client"

const Signin = () => {
    const handleSignin = async (e: any) => {
        e.preventDefault();
        const email = e.target[0]?.value;
        const password = e.target[1]?.value;
        console.log(email, password);
        if (!email || !password) {
            toast.error("Please enter email and password")
            return
        }

        const {data, error} = await client.auth.signInWithPassword({
            email,
            password
        })
        
        if (data) {
            toast.success("Success, Please login now.");
        }

        if (error) {
            toast.error("Unable to signin. Please try again.")
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Sign in</CardTitle>
                <CardDescription>Enter email password to sign in</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSignin}>
                    <div className='flex flex-col gap-6'>
                        <div className='grid gap-2'>
                            <Label htmlFor="email">Your email address</Label>
                            <Input id='email' type='email' placeholder='example@gmail.com' required/>
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor="password">Password</Label>
                            <Input id='password' type='password' required/>
                        </div>
                        <Button type='submit' className='w-full' variant="default">Sign in</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default Signin