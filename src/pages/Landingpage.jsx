import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Landingpage = () => {
  const navigate = useNavigate()
  const [longUrl, setLongUrl] = useState("");
  const handelShorten = (e) => {
    e.preventDefault()
    if (longUrl)navigate(`/auth?createNew=${longUrl}`)
  }
  

  return (<>
    <section className="">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 py-16">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-[#ead5ba]">
            Shorten URLs, Share Quickly, <span className="text-[#b3d5ba]">Simplify Links</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            With SortX, you can make your URLs sleek, shareable, and track their performance.
          </p>
          <form onSubmit={handelShorten} className="mt-6 flex gap-2">
            <Input
              type="url"
              value={longUrl}
              placeholder="Paste your URL here..."
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b3d5ba]"
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <Button type="submit" variant="ghost" className="bg-[#b3d5ba] text-black px-6 py-2 rounded-r-lg">
              Shorten
            </Button>
          </form>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/500/300"
            alt="URL Shortening Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    {/* Features Section */}

    {/* <section id="features" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#ead5ba]">Why Choose SortX?</h2>
          <p className="mt-2 text-gray-400">
            Packed with everything you need to manage your URLs efficiently.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#b3d5ba] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1e3e48]">Custom Links</h3>
              <p className="mt-2 text-gray-600">Create links that match your branding.</p>
            </div>
            <div className="bg-[#b3d5ba] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1e3e48]">Analytics</h3>
              <p className="mt-2 text-gray-600">Track clicks and user engagement in real time.</p>
            </div>
            <div className="bg-[#b3d5ba] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1e3e48]">Secure</h3>
              <p className="mt-2 text-gray-600">All links are protected with state-of-the-art encryption.</p>
            </div>
          </div>
        </div>
      </section> */}

    <Accordion type="multiple" collapsible="true" className='w-[90%] mx-auto '>
      <AccordionItem value="item-1">
        <AccordionTrigger>Why Choose SortX?</AccordionTrigger>
        <AccordionContent>
          Packed with everything you need to manage your URLs efficiently.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Custom Links?</AccordionTrigger>
        <AccordionContent>
          Create links that match your branding.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Analytics?</AccordionTrigger>
        <AccordionContent>
          Track clicks and user engagement in real time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Secure?</AccordionTrigger>
        <AccordionContent>
          All links are protected with state-of-the-art encryption.
        </AccordionContent>
      </AccordionItem>
    </Accordion>


    {/* Call to Action */}
    <section id="cta" className=" text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Ready to SortX Your Links?</h2>
        <p className="mt-2 text-lg">Sign up now and start shortening your URLs for free!</p>
        <Link to={"/auth"}><Button className="mt-6 bg-white text-[#1e3e48] font-bold px-8 py-3 rounded-lg hover:bg-gray-100">
          Get Started
        </Button></Link>
      </div>
    </section>

  </>)
}

export default Landingpage;
