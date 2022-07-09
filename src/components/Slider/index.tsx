import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Project } from "../../@types/Project";
import { ConsoleCircle } from "../ConsoleCircle";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LinkWithIcon } from "../LinkWithIcon";

interface SliderProps {
    data: Project[];
}

export function Slider({ data }: SliderProps) {
    return (
        <div className="w-full h-[620px] max-w-screen-lg bg-background rounded-lg overflow-hidden relative">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <header className="w-full h-[4rem] bg-surface-secondary flex gap-1 md:gap-2 flex-row items-center p-4 absolute top-0">
                    <ConsoleCircle color="bg-red-600" />
                    <ConsoleCircle color="bg-amber-400" />
                    <ConsoleCircle color="bg-green-500" />
                </header>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={1}
                    loop
                    navigation
                    pagination
                    autoplay={{ delay: 6000 }}
                    centeredSlides
                    modules={[Pagination, Navigation]}
                    className="w-full h-full z-0"
                >
                    {data.map((project) => (
                        <SwiperSlide key={project.name} className="flex flex-col items-center justify-center hover:cursor-grab p-2">
                            <h1 className="font-fira font-bold text-sm md:text-xl absolute top-5">{project.name}</h1>
                            <div className="group relative md:overflow-hidden h-1/2 flex items-center">
                                <img 
                                    src={project.image.url} 
                                    alt={project.name} 
                                    className="w-full h-auto md:h-auto max-w-3xl group-hover:animate-brightess-25"
                                />
                                <div className="group-hover:flex hidden absolute top-0 left-0 w-full h-full flex-col md:flex-row gap-2 items-center justify-center p-4 animate-fade-to-t">
                                    <p className="w-4/5">{project.description}</p>
                                    <div className="flex flex-col items-center justify-center gap-2 h-full">
                                        <div className="flex flex-row items-center flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="flex flex-1 items-center justify-center text-sm text-primary bg-brand rounded-full
                                                px-4 py-2 break-normal hover:bg-brand-hover transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-row items-center justify-center gap-2">
                                            <LinkWithIcon url={project.github} icon={<AiOutlineGithub />}>
                                                Github
                                            </LinkWithIcon>
                                            {project.url && (
                                                <LinkWithIcon url={project.url} icon={<BiLinkExternal />}>
                                                    Website
                                                </LinkWithIcon>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}