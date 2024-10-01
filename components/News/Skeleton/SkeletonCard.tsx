import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Component for Skeleton card
export const SkeletonCard = () => (
  <Card className="flex flex-col h-full justify-around">
    <CardHeader className="">
      <Skeleton className="w-full h-96 rounded-lg" />
    </CardHeader>
    {/* <CardContent className="flex-grow">
      <div className="flex items-center justify-between py-2">
        <Skeleton className="w-1/2 h-4 rounded-lg" />
        <Skeleton className="w-1/4 h-4 rounded-lg" />
      </div>
      <Skeleton className="w-full h-4 rounded-lg mt-2" />
      <Skeleton className="w-full h-6 rounded-lg mt-2" />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Skeleton className="w-1/2 h-6 rounded-lg" />
      <Skeleton className="w-1/4 h-4 rounded-lg" />
    </CardFooter> */}
  </Card>
);
