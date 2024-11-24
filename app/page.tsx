import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-evenly p-24">
      <Card>
        <CardHeader>
          <CardTitle className="scroll-m-20 font-extrabold text-center">John Allison (they/them)</CardTitle>
        </CardHeader>
      </Card>
    </main>
  );
}
