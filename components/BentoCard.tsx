type Props = {
  title: string;
  description: string;
  className?: string;
};

export default function BentoCard({ title, description, className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/30 backdrop-blur-md p-4 sm:p-6 ${className}`}>
      <h3 className="text-4xl font-semibold text-foreground dark:text-gray-100">{title}</h3>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}
