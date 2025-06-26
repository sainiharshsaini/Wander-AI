import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Auth = () => {
    return (
        <Tabs defaultValue="login" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <Login/>
            </TabsContent>
            <TabsContent value="signup">
                <Signup/>
            </TabsContent>
        </Tabs>
    )
}

export default Auth