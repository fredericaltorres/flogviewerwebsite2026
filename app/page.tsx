'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ClickableImage from './components/ClickableImage';
import { Feature, BulletPoint, Option } from './data/metadatatype';
import metadata from './data/metadata';
import ReactMarkdown from 'react-markdown';
import { ReactNode } from 'react';
import { Components } from 'react-markdown';

var flogViewerExeUrl = "https://flogviewer2026.blob.core.windows.net/build/fLogViewer.exe";
var flogViewerAiAssistantUrl = "https://flogviewer-ai-assistant.vercel.app/";
var flogViewerVersionUrl = "https://flogviewer2026.blob.core.windows.net/build/Version.cs";
var flogViewerVersion = "Unknown";

function trace(message: string) {
  console.log(message);
}

// Add custom components for ReactMarkdown
const markdownComponents: Components = {
  ul: ({ children, ...props }) => <ul className="list-disc pl-5 space-y-1" {...props}>{children}</ul>,
  li: ({ children, ...props }) => <li className="text-lg" {...props}>{children}</li>,
};

// Component to render a bullet point with optional video link
const BulletPointCard = ({ text, video_link, video_link_2, image_link, image_link_2 }: BulletPoint) => (
  <li className="flex items-start">
    <span className="text-blue-600 mr-2">•</span>
    <div>
      <span className="">{text}</span>

      {image_link && (
        <Link target="_blank" href={image_link} className="text-blue-600 hover:underline"> (Image)</Link>
      )}

      {image_link_2 && (
        <Link target="_blank" href={image_link_2} className="text-blue-600 hover:underline"> (Image 2)</Link>
      )}

      {video_link && (
        <Link target="_blank" href={video_link} className="text-blue-600 hover:underline"> (Video)</Link>
      )}
      {video_link_2 && (
        <Link target="_blank" href={video_link_2} className="text-blue-600 hover:underline"> (Video 2)</Link>
      )}
    </div>
  </li>
);

// Component to render a feature card
const FeatureCard = ({ title, description, image_link, code_sample, video_link }: Feature) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-xl">
    <h3 className="text-3xl font-bold mb-4">{title + ''}</h3>
    <div className="mb-6 prose dark:prose-invert">
      <ReactMarkdown components={markdownComponents}>{description}</ReactMarkdown>
    </div>

    {video_link && (
      <Link target="_blank" href={video_link} className="text-blue-600 hover:underline"> (Video)</Link>
    )}

    {image_link && (
      <div className="mb-6 flex justify-center">
        <ClickableImage src={image_link} alt={title} width={1024} className="object-contain rounded-lg max-h-80" />
      </div>
    )}

    {code_sample && (
      <div className="mb-6">
        <h4 className="font-semibold mb-2 text-xl">Code Sample:</h4>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          <code>{code_sample}</code>
        </pre>
      </div>
    )}
  </div>
);

// Component to render an option card
const OptionCard = ({ title, description, image_link, code_sample, video_link }: Option) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
    <h3 className="text-3xl font-bold mb-4">{title}</h3>
    <div className="mb-6 prose dark:prose-invert">
      <ReactMarkdown components={markdownComponents}>{description}</ReactMarkdown>
    </div>

    {video_link && (
      <Link target="_blank" href={video_link} className="text-blue-600 hover:underline"> (Video)</Link>
    )}

    {image_link && (
      <div className="mb-6 flex justify-center">
        <ClickableImage src={image_link} alt={title} width={768} className="object-contain rounded-lg" />
      </div>
    )}

    {code_sample && (
      <div className="mb-6">
        <h4 className="font-semibold mb-2 text-xl">Code Sample:</h4>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          <code>{code_sample}</code>
        </pre>
      </div>
    )}
  </div>
);

export default function Home() {

  const [loading, setLoading] = useState(true);

  trace("Home() loading: " + loading);

  function init() {
    trace("init");
    fetch(flogViewerVersionUrl).then(response => response.text()).then(data => {
      const regex = /AssemblyFileVersion\("?(.*)"\)/;
      const extract = data.match(regex);
      setLoading(false);
      if (extract && extract.length === 2) {
        flogViewerVersion = extract[1];
        trace("flogViewerVersion: " + flogViewerVersion);
        trace("loading: " + loading);
      }
    });
  }

  useEffect(() => { init(); }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{metadata.name}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="overview" className="mb-16">
          {/* <h2 className="text-4xl font-bold mb-8 text-center">Overview</h2> */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xl mb-6">
                <ReactMarkdown components={markdownComponents}>{metadata.overview_header}</ReactMarkdown>
                <br />
              </span>
              <ul className="text-lg">
                {metadata.overview_bullet_points.map((point, index) => (
                  <BulletPointCard key={index} text={point.text} video_link={point.video_link} video_link_2={point.video_link_2} />
                ))}
              </ul>

              <br />
              <b>With:</b>
              <br /><br />

              <ul className="text-lg">
                {metadata.overview_bullet_points_2.map((point, index) => (
                  <BulletPointCard key={index} text={point.text} video_link={point.video_link} video_link_2={point.video_link_2} image_link={point.image_link} image_link_2={point.image_link_2} />
                ))}
              </ul>

              {/* <div className="mt-8 p-4 rounded-lg">
                <div className="text-lg">
                  <ReactMarkdown components={markdownComponents}>{metadata.overview_footer}</ReactMarkdown>
                </div>
              </div> */}

              <div className="mt-8">
                <a href={flogViewerExeUrl} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors">
                  {metadata.download_button.title}
                </a>
                &nbsp;Requires .NET Framework 4.8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={flogViewerAiAssistantUrl} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors">
                  {"AI Assistant"}
                </a>
              </div>

            </div>



            <div className="relative h-200 w-full">
              <ClickableImage src={metadata.logo} alt="Logo" width={256} height={256} className="object-contain rounded-lg shadow-lg" />
              <br />
              <ClickableImage src={metadata.overview_image} alt="Overview image" fill className="object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Features</h2>
          <div className="space-y-16">
            {metadata.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image_link={feature.image_link}
                code_sample={feature.code_sample}
                video_link={feature.video_link}
              />
            ))}
          </div>
        </section>

        {/* Options Section */}
        <section id="options" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Options</h2>

          <div className="space-y-16">
            {metadata.options.map((option, index) => (
              <OptionCard
                key={index}
                title={option.title}
                description={option.description}
                image_link={option.image_link}
                code_sample={option.code_sample}
                video_link={option.video_link}
              />
            ))}
          </div>
        </section>

        {/* Open Source Libraries Section */}
        <section id="open-source" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Open Source Libraries</h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <pre className="whitespace-pre-wrap text-sm">
              {metadata.open_source_libraries}
            </pre>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} fLogViewer/FTorres. All rights reserved.</p>
        </div>
      </footer>
    </div >
  );
}
