import { BibleVerse } from '../types/bible';
import { highlightReconciliationText } from '../data/reconciliationVerses';

interface VerseCardProps {
  verse: BibleVerse;
  index: number;
}

export function VerseCard({ verse, index }: VerseCardProps) {
  const highlightedText = highlightReconciliationText(verse.text);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          {verse.book} {verse.chapter}:{verse.verse}
        </h3>
        <span className={`text-sm px-2 py-1 rounded text-white ${
          verse.version === 'KJV' ? 'bg-purple-600' :
          verse.version === 'NIV' ? 'bg-blue-600' :
          verse.version === 'ESV' ? 'bg-green-600' :
          verse.version === 'NLT' ? 'bg-orange-600' :
          verse.version === 'NASB' ? 'bg-red-600' :
          verse.version === 'NKJV' ? 'bg-indigo-600' :
          verse.version === 'CSB' ? 'bg-teal-600' :
          verse.version === 'MSG' ? 'bg-pink-600' :
          'bg-gray-600'
        }`}>
          {verse.version}
        </span>
      </div>

      <div className="text-gray-700 leading-relaxed">
        <p dangerouslySetInnerHTML={{ __html: highlightedText }} />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Verse {index + 1} of reconciliation passages
        </span>
        <button
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          onClick={() => navigator.clipboard.writeText(`${verse.book} ${verse.chapter}:${verse.verse} - ${verse.text}`)}
        >
          Copy Verse
        </button>
      </div>
    </div>
  );
}
