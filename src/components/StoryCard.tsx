import { ReconciliationStory } from '../data/reconciliationStories';

interface StoryCardProps {
  story: ReconciliationStory;
  index: number;
}

export function StoryCard({ story, index }: StoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
      {/* Header with image and title */}
      <div className="flex items-start gap-4 mb-6">
        <div className="text-4xl">{story.image}</div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {story.title}
          </h3>
          <p className="text-lg text-indigo-600 font-medium mb-2">
            {story.book} {story.chapters}
          </p>
          <div className="flex flex-wrap gap-2">
            {story.themes.map(theme => (
              <span
                key={theme}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          {story.summary}
        </p>
      </div>

      {/* Key Lessons */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
          <span className="mr-2">💡</span>
          Key Lessons
        </h4>
        <ul className="space-y-2">
          {story.keyLessons.map((lesson, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-indigo-500 mr-3 mt-1">•</span>
              <span className="text-gray-700 leading-relaxed">{lesson}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Verses */}
      <div className="border-t pt-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">📖</span>
          Key Verses
        </h4>
        <div className="space-y-4">
          {story.mainVerses.map((verse, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400">
              <div className="text-sm font-medium text-green-700 mb-2">
                {verse.reference} ({verse.version})
              </div>
              <p className="text-gray-800 italic leading-relaxed">
                "{verse.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Story number */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Story {index + 1} of reconciliation narratives
        </span>
        <button
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          onClick={() => {
            const text = `${story.title} (${story.book} ${story.chapters})\n\n${story.summary}\n\nKey Lessons:\n${story.keyLessons.map(lesson => `• ${lesson}`).join('\n')}`;
            navigator.clipboard.writeText(text);
          }}
        >
          Copy Story Summary
        </button>
      </div>
    </div>
  );
}
