import React, { useEffect} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { UrlState } from "@/context";


const Auth = () => {
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");
  const navigate = useNavigate();

  const {isAuthenticated, loading} = UrlState();
  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate(`/dashboard?${longLink ? `createNew=${longLink}`:""}`);
    }
  }, [isAuthenticated, loading])

  return (
    <div className=" text-[#b3d5ba] min-h-screen flex flex-col items-center justify-center bg-[#020817]">
        <h1 className="text-5xl font-extrabold text-center mb-6">
          {searchParams.get("createNew") ? "Hold up! Let's login first" : "Login/Signup"}
        </h1>
        <Tabs defaultValue="Login" className="w-[400px]">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="SignUp">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="Login">
            <Login />
          </TabsContent>
          <TabsContent value="SignUp">
            <Signup />
          </TabsContent>
        </Tabs>
    </div>
  );
};

export default Auth;
