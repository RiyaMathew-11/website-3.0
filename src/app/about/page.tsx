"use client";

import {
  Body,
  BodyLarge,
  Heading1,
  Heading2,
  Heading3,
  Title,
} from "@/components/type-styles";
import React, { use } from "react";
import TeamCard from "./components/team-card";
import CloudBottomImage from "@/../public/assets/images/clouds-bottom.png";
import CloudBottomImageDark from "@/../public/assets/images/clouds-bottom-dark.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function About() {
  const { systemTheme, theme } = useTheme();
  const resultantTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="bg-backgroundPrimary flex flex-col overflow-x-hidden border-b border-borderPrimary">
            <div className="relative bg-backgroundEmPrimary bg-center bg-no-repeat bg-cover pt-8 !pb-20 min-h-[50vh] justify-center overflow-hidden">
                <div className="text-center col-start-1 md:col-start-2 col-end-5 md:col-end-8 lg:col-end-12 flex flex-col gap-8 items-center justify-center p-6 lg:p-16">  
                    <div className="flex flex-col gap-6 items-center">
                        <Heading3 className="text-onBackgroundSecondary w-full">
                        Who we are
                        </Heading3>
                        <Title className="w-full md:w-[75%] lg:w-[75%]">
                        Since our inception in 2019, we’ve been helping students keep their heads in the clouds ...
                        while having their feet on the ground.
                        </Title>
                    </div>
                </div>
                
                    {resultantTheme == "light" && (
                    <Image
                        className="w-lvw max-w-[100vw] absolute bottom-[-75px] left-0 right-0"
                        src={CloudBottomImage}
                        alt=""
                    ></Image>
                    )}
                    {resultantTheme == "dark" && (
                    <Image
                        className="w-lvw max-w-[100vw] absolute bottom-[-75px] left-0 right-0"  
                        src={CloudBottomImageDark}
                        alt=""
                    ></Image>
                    )}
                
            </div>

            
            <div className="relative bg-center bg-no-repeat bg-cover p-10 lg:p-32 !pb-0 min-h-[50vh] justify-center">
                <div className="text-center flex flex-col gap-8 items-center justify-center -mt-28 lg:-mt-48">
                    <div className="flex flex-col text-left gap-12 lg:flex-row lg:gap-16">
                        <div className="bg-backgroundSecondary flex flex-col gap-4 items-left p-8 h-fit lg:p-20">  
                            <Heading2 className="text-onBackgroundPrimary w-full">
                                About Google Developer Student Clubs
                            </Heading2>
                            <BodyLarge className="w-full text-onBackgroundSecondary">
                                Google collaborates with university students who are passionate about growing developer communities. 
                                Google Developer Student Club powered by Google Developers is an initiative to grow their knowledge on developer technologies 
                                and more through peer to peer workshops and events, and gain relevant industry experience.
                            <br/><br/>
                            
                                <a className="text-onBackgroundPrimary underline underline-offset-4 "href="/">Learn more about the Programme.</a>
                            </BodyLarge>
                        </div>
                        <div className="bg-backgroundEmSecondary flex flex-col gap-4 items-left p-8 h-fit lg:p-20">  
                            <Heading2 className="text-onBackgroundPrimary w-full">
                                About GDSC MBCET
                            </Heading2>
                            <BodyLarge className="w-full text-onBackgroundSecondary">
                                GDSC MBCET’s legacy is one of bold thinking, creative excellence, and profound impact. 
                                Our members are creative powerhouses who have made groundbreaking contributions to our community and the way it runs.
                                <br/><br/>
                                We believe in fostering a diverse skillset – from technical prowess, event organization and 
                                marketing to communication, collaboration and knowledge sharing. 
                                Each day, we create a collaborative environment where our community, equipped with these tools, can learn, empower others to learn, 
                                and ultimately leverage their talents to become change-makers in the world.
                                <br/><br/>
                                This spirit of innovation and collaboration has guided us since 2019, and we’re excited to see where it takes us in the years and decades to come.
                            </BodyLarge>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-center bg-no-repeat bg-cover p-10 gap-4 lg:p-32 !pb-0 min-h-[50vh] justify-center">
               <div className="flex flex-col gap-4 pb-12">
                <Heading1>
                    Our Incredible Team
                </Heading1>

                <BodyLarge className="lg:w-2/4">
                GDSC MBCET brings together ordinary humans with the extraordinary ability to chase their dreams.
                </BodyLarge>
               </div>

               <div className="bg-backgroundSecondary p-4 rounded-lg">
                    {/* <div className="relative">

                        <Tabs defaultValue="account" className="w-[400px] flex flex-col">
                            <TabsList className="flex justify-start gap-4">
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">Make changes to your account here.</TabsContent>
                            <TabsContent value="password">Change your password here.</TabsContent>
                        </Tabs>

                    </div> */}
                    <div className="flex flex-col gap-2 lg:px-32 lg:py-24">
                        <Heading2>Tenure 23-24</Heading2>
                        <Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </Body>

                        <div className="grid grid-cols-1 lg:grid-cols-3">



                        </div>

                    </div>
               </div>
            </div>


    </div>
    

  );
}

