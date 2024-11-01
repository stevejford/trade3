import { Badge } from "@/components/ui/badge";

const categories = [
  "Plumber",
  "Electrician",
  "Builder",
  "Carpenter",
  "Painter",
  "Gardener",
  "Roofer",
  "Handyman"
];

export default function CategoryFilter() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Browse by Trade</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="secondary"
            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200"
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}