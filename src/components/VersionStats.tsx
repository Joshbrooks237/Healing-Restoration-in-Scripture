interface VersionStatsProps {
  stats: { version: string; count: number }[];
  totalVerses: number;
}

export function VersionStats({ stats, totalVerses }: VersionStatsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Scripture Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {stats.map(({ version, count }) => (
          <div key={version} className="text-center">
            <div className="text-2xl font-bold text-blue-600">{count}</div>
            <div className="text-sm text-gray-600">{version}</div>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">{totalVerses}</div>
          <div className="text-sm text-gray-600">Total Reconciliation Verses</div>
        </div>
      </div>
    </div>
  );
}
