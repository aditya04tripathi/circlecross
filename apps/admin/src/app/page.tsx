import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@circlecross/ui/components/accordion";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <Accordion className="mt-6" defaultValue={[]}>
        <AccordionItem value="shared-ui">
          <AccordionTrigger>Shared UI package</AccordionTrigger>
          <AccordionContent>
            This accordion is imported from the shared @circlecross/ui workspace.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
