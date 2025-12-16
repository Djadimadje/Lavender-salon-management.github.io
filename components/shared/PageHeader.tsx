interface PageHeaderProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#3d2817] to-[#3d2817] text-white p-4 md:p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {title}
          </h1>
          <p className="text-sm md:text-base text-gray-200">
            {description}
          </p>
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  );
}
