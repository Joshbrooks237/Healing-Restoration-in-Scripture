interface VersionSelectorProps {
  selectedVersion: string | null;
  onVersionChange: (version: string | null) => void;
  availableVersions: string[];
}

export function VersionSelector({ selectedVersion, onVersionChange, availableVersions }: VersionSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Bible Version</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onVersionChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedVersion === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Versions ({availableVersions.length})
        </button>
        {availableVersions.map(version => (
          <button
            key={version}
            onClick={() => onVersionChange(version)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedVersion === version
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {version}
          </button>
        ))}
      </div>
    </div>
  );
}
