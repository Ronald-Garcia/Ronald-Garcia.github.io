import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";
import { getAllProjects } from "@/lib/store";

const WorkExperiences = () => {

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true})
  )

  const projectList = getAllProjects();

  return (
      <div className="self-center w-full px-20">
      <Carousel className="w-full"
      plugins={[plugin.current]}
      opts={{
        loop: true
      }}>
        <CarouselContent>
          {projectList.map(p => (
            <CarouselItem key={p.id}>
              <div className="p-1"> 
                <Card>
                  <CardContent>
                    <CardHeader className="mx-auto h-[450px] aspect-square overflow-hidden blur-sm">
                      <img
                        src={ p.thumbnail.url }
                        >
                      </img>
                    </CardHeader>
                    <CardFooter className="flex flex-col space-y-1 w-full">
                      <div className="w-full">
                        <p className="text-left text-md font-bold">
                          {p.name}
                        </p>
                      </div>
                      <div className="w-full">
                        <p className="text-left text-sm font-light truncate">
                          {p.description}
                        </p>
                        <p className="text-xs italic font-light">
                        {p.dateEnded !== "Now" ? p.dateStarted.toLocaleDateString("en-US", {
                                day: p.dateStarted.getMonth() === p.dateEnded.getMonth() ? 'numeric' : undefined,
                                month: 'short',
                                year: 'numeric',
                            }) : p.dateStarted.toLocaleDateString("en-US", {
                                month: 'short',
                                year: 'numeric',
                            })} - {p.dateEnded !== "Now" ? p.dateEnded.toLocaleDateString("en-US",{
                                day: p.dateStarted.getMonth() === p.dateEnded.getMonth() ? 'numeric' : undefined,
                                month: "short",
                                year: "numeric"
                            }) : "now"}
                        </p>
                      </div>
                      <div>
                        <a 
                        href={`project/${p.id}`}>
                          Learn more!
                        </a>
                      </div>
                    </CardFooter>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious />
          <CarouselNext />

      </Carousel>
      </div>

  );


}

export default WorkExperiences;