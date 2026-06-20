type Props = {
  title: string;
  value: number;
  color?: "blue" | "green" | "red";
};

export default function SummaryCard({
  title,
  value,
  color = "blue",
}: Props) {
  const colorClasses = {
    blue: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50",
    green: "border-green-500/30 bg-green-500/5 hover:border-green-500/50",
    red: "border-red-500/30 bg-red-500/5 hover:border-red-500/50",
  };

  const textColorClasses = {
    blue: "text-blue-400",
    green: "text-green-400",
    red: "text-red-400",
  };

  return (
    <div
      className={`bg-slate-900 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${color}-500/10 ${colorClasses[color]}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-slate-400 text-sm font-medium">
          {title}
        </p>
        <div
          className={`w-2 h-2 rounded-full animate-pulse-light ${textColorClasses[color]}`}
        />
      </div>

      <h2 className={`text-4xl font-bold mt-3 ${textColorClasses[color]}`}>
        {value}
      </h2>
    </div>
  );
}