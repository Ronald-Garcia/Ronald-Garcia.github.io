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

const AboutMeCarousel = () => {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true})
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
                    <CardHeader className="h-[500px]">
                      <img
                        className="rounded-[150px]"
                        src={ p.images[0].url }
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

export default AboutMeCarousel;