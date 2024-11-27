import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import {logOut} from "@/db/apiAuth";
  import useFetch from "@/hooks/use-fetch";
  import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
  import {LinkIcon, LogOut} from "lucide-react";
  import {Link, useNavigate} from "react-router-dom";
  import {BarLoader} from "react-spinners";
  import {Button} from "./ui/button";
  import {UrlState} from "@/context";
  import { useState } from "react";
  import logo from "@/assets/logo.webp";
  import { FaBars, FaEnvelope, FaHome, FaInfoCircle, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user, fetchUser} = UrlState();
    const {loading, fn: fnLogout} = useFetch(logOut);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#003d63] text-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link to={"/"} className="flex justify-center items-center">
                        <img src={logo} alt="app-logo" className="max-h-14 rounded-full" />
                        <span className="text-[#b3d5ba] fs1 font-bold text-xl">&nbsp;SortX</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to={"/"} className="flex items-center space-x-1 hover:text-gray-200">
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link to={"/about"} className="flex items-center space-x-1 hover:text-gray-200">
                        <FaInfoCircle /> <span>About</span>
                    </Link>
                    <Link to={"/contact"} className="flex items-center space-x-1 hover:text-gray-200">
                        <FaEnvelope /> <span>Contact</span>
                    </Link>
                    {!user ?
                        <Button onClick={() => { navigate("/auth") }}>Login</Button> : (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src={user?.user_metadata?.profile_pic} className="rounded-full max-h-14 object-contain" />
                                        <AvatarFallback>SM</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link className="flex gap-2" to={"/dashboard"}>My Links <LinkIcon /></Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={()=>{
                                            fnLogout().then(()=>{
                                                fetchUser();
                                                navigate("/")
                                            })
                                        }} className="text-red-600 font-bold cursor-pointer">
                                        <span >Logout</span>
                                        <LogOut />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#003d63]">
                    <Link to={"/"} className=" py-2 px-4 hover:bg-blue-800 flex items-center space-x-2">
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link to={"/about"} className=" py-2 px-4 hover:bg-blue-800 flex items-center space-x-2">
                        <FaInfoCircle /> <span>About</span>
                    </Link>
                    <Link to={"/contact"} className=" py-2 px-4 hover:bg-blue-800 flex items-center space-x-2">
                        <FaEnvelope /> <span>Contact</span>
                    </Link>
                    {!user ?
                        <Button onClick={() => { navigate("/auth") }}>Login</Button> : (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src={user?.user_metadata?.profile_pic} className="rounded-lg max-h-16 border border-amber-50 object-contain mx-4" />
                                        <AvatarFallback>SM</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link className="flex gap-2" to={"/dashboard"}>My Links <LinkIcon /></Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={()=>{
                                            fnLogout().then(()=>{
                                                fetchUser();
                                                navigate("/")
                                            });
                                        }} className="text-red-600 font-bold cursor-pointer">
                                    <span>Logout</span>
                                        <LogOut />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                </div>
            )}
            {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
        </nav>
    );
};

export default Navbar;

