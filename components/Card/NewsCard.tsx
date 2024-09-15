import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import React from "react";

interface NewsCardProps {
  title: string;
  description: string;
  content?: string;
  footer?: React.ReactNode;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  content,
  footer,
}) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default NewsCard;
