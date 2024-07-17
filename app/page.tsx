import { Hero, ExperienceSkills } from "@/components/index";

export default function page() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <Hero />
      <ExperienceSkills />
    </main>
  );
}
