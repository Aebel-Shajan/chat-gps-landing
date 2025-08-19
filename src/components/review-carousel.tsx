import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import reviews from "@/assets/reviews.json"

import { Star } from "lucide-react"

interface ReviewProps {
  name: string
  avatarUrl?: string
  review: string
  rating: number
  timestamp?: string
}

export function Review({ name, avatarUrl, review, rating, timestamp }: ReviewProps) {
  return (
    <div className="flex gap-3  bg-background rounded-md p-3 w-75 h-40 overflow-hidden ">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <span className="font-medium text-sm">{name}</span>
        {timestamp && (
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        )}
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-current text-yellow-500" : "text-muted-foreground"
                }`}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground ">{review}</p>
      </div>
    </div>
  )
}


export default function ReviewCarousel() {

  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  )


  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true, dragFree: true, align: "start", slidesToScroll: 1 }}
      className="w-full"
    >
      <CarouselContent>

        {reviews.map((review, i) => (
          <CarouselItem key={i} className="basis-1/2">
            <Review name={review.name} review={review.comment} timestamp={review.date} rating={review.rating} />
            {/* <ReviewCarouselItem text={i} /> */}
          </CarouselItem>
        ))}

      </CarouselContent>
    </Carousel>
  )
}



