import {Card, CardHeader, CardDescription, CardTitle} from "@/components/ui/card";

export default function InfoCard({title, description}: {title: string; description: string}) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle>$ {title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
