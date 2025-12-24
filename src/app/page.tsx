'use client';

import { useState } from 'react';
import { VerseCard } from '../components/VerseCard';
import { VersionSelector } from '../components/VersionSelector';
import { VersionStats } from '../components/VersionStats';
import { StoryCard } from '../components/StoryCard';
import { FloatingDoves } from '../components/FloatingDoves';
import {
  getReconciliationVerses,
  getVersesByVersion,
  getAvailableVersions,
  getVersionStats
} from '../data/reconciliationVerses';
import { getReconciliationStories } from '../data/reconciliationStories';

type ContentType = 'verses' | 'stories';

export default function Home() {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [contentType, setContentType] = useState<ContentType>('verses');

  const allVerses = getReconciliationVerses();
  const allStories = getReconciliationStories();
  const availableVersions = getAvailableVersions();
  const versionStats = getVersionStats();
  const filteredVerses = selectedVersion ? getVersesByVersion(selectedVersion) : allVerses;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 relative">
      <FloatingDoves />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🕊️ Healing & Restoration in Scripture
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            "Be ye reconciled to God" - Finding hope, forgiveness, peace, and healing through God's Word
          </p>

          {/* Content Type Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 flex">
              <button
                onClick={() => setContentType('verses')}
                className={`px-8 py-3 rounded-md font-medium transition-colors ${
                  contentType === 'verses'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                📖 Bible Verses ({allVerses.length})
              </button>
              <button
                onClick={() => setContentType('stories')}
                className={`px-8 py-3 rounded-md font-medium transition-colors ${
                  contentType === 'stories'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                📚 Bible Stories ({allStories.length})
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              {contentType === 'verses' ? (
                <>
                  This comprehensive collection includes verses about reconciliation, forgiveness, restoration, peace, mercy, grace, and God's steadfast love.
                  From Psalms to the Epistles, these sacred passages speak of God's divine healing and restoration through Jesus Christ.
                  May these verses bring comfort, healing, and reconciliation to families seeking peace and unity in His love.
                  Choose from {availableVersions.length} Bible versions to explore God's message of healing and restoration.
                </>
              ) : (
                <>
                  These powerful Bible stories illustrate reconciliation in action through real-life narratives of forgiveness, restoration, and healing.
                  From the Prodigal Son to Joseph's brothers, each story shows God's relentless love and the transformative power of reconciliation.
                  May these timeless stories inspire families to pursue healing and restoration in their own relationships.
                </>
              )}
            </p>
          </div>
        </header>

        {contentType === 'verses' ? (
          <>
            {/* Statistics */}
            <VersionStats stats={versionStats} totalVerses={allVerses.length} />

            {/* Version Selector */}
            <VersionSelector
              selectedVersion={selectedVersion}
              onVersionChange={setSelectedVersion}
              availableVersions={availableVersions}
            />

            {/* Verses */}
            <main className="space-y-6">
              {filteredVerses.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No verses found for the selected version.</p>
                </div>
              ) : (
                filteredVerses.map((verse, index) => (
                  <VerseCard key={`${verse.version}-${verse.book}-${verse.chapter}-${verse.verse}`} verse={verse} index={index} />
                ))
              )}
            </main>
          </>
        ) : (
          <>
            {/* Stories Statistics */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Scripture Stories Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">{allStories.length}</div>
                  <div className="text-sm text-gray-600">Reconciliation Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {allStories.reduce((sum, story) => sum + story.mainVerses.length, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Key Verses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {new Set(allStories.flatMap(story => story.themes)).size}
                  </div>
                  <div className="text-sm text-gray-600">Themes Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {new Set(allStories.map(story => story.book)).size}
                  </div>
                  <div className="text-sm text-gray-600">Books of the Bible</div>
                </div>
              </div>
            </div>

            {/* Stories */}
            <main className="space-y-6">
              {allStories.map((story, index) => (
                <StoryCard key={story.id} story={story} index={index} />
              ))}
            </main>
          </>
        )}

        {/* Cherry on Top - Family Reconciliation Prayer */}
        <section className="mt-16 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
                <span className="text-4xl">🙏</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                A Family Prayer for Reconciliation
              </h2>
              <p className="text-lg text-gray-600 italic">
                "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."
                <span className="block text-sm mt-1">- Ephesians 4:32</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Guided Prayer */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">📖</span>
                  Guided Family Prayer
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p><strong>Heavenly Father,</strong></p>
                  <p>We come before You with hearts that need healing and relationships that need restoration.</p>
                  <p><em>Thank You</em> for the gift of reconciliation through Your Son, Jesus Christ.</p>
                  <p><em>Help us</em> to forgive as You have forgiven us, to love as You have loved us.</p>
                  <p><em>Heal</em> our broken relationships and restore peace to our families.</p>
                  <p><em>Fill us</em> with Your compassion, patience, and grace.</p>
                  <p><em>Remind us</em> that Your love never fails and Your mercies are new every morning.</p>
                  <p><strong>In Jesus' precious name, Amen.</strong></p>
                </div>
              </div>

              {/* Family Blessing */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">✨</span>
                  A Blessing for Families
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-medium text-blue-800">May God's peace fill your home</p>
                    <p className="text-sm italic">like a gentle river flowing through every room.</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-medium text-green-800">May forgiveness heal old wounds</p>
                    <p className="text-sm italic">and restore broken relationships.</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="font-medium text-purple-800">May love conquer every conflict</p>
                    <p className="text-sm italic">and unity bind your family together.</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <p className="font-medium text-pink-800">May God's grace abound in your midst</p>
                    <p className="text-sm italic">and His mercy follow you all your days.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Print/Share Section */}
            <div className="mt-8 text-center">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  📄 Print This Prayer
                </h3>
                <p className="text-gray-600 mb-4">
                  Print this prayer and blessing to use in your family devotions or as a reminder of God's promises.
                </p>
                <button
                  onClick={() => window.print()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  🖨️ Print Prayer Card
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-gray-200">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-sm text-gray-500 mb-4">
              <p className="font-medium text-gray-700 mb-2">Made with ❤️ for Christian families seeking healing and reconciliation</p>
              <p>Multiple Bible Versions - Public Domain & Licensed Translations</p>
              <p>200+ verses and 17 stories about reconciliation, forgiveness, restoration, peace, mercy, grace & God's love</p>
            </div>
            <div className="flex justify-center items-center space-x-4 text-2xl">
              <span>🕊️</span>
              <span>🙏</span>
              <span>❤️</span>
              <span>✨</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
