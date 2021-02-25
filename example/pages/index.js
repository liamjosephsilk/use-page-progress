import { usePageProgress } from "../../use-page-progress";

import { toCamel } from "../lib/util";

import hookConfig from "../../use-page-progress/package.json";

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === "string";

  const repositoryUrlDisplay =
    repositoryExists && repositoryUrl.split("://")[1];

  const { scrollPercentage } = usePageProgress();

  return (
    <main>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1em 0;
        }

        h1 {
          font-size: 2em;
        }

        img {
          max-width: 100%;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        section,
        footer {
          width: 100%;
          max-width: 50em;
          margin: 0 auto;
        }

        footer p {
          font-size: 0.9em;
        }

        footer p,
        footer a {
          color: #546e7a;
        }

        .percentage {
          position: fixed;
          background: gray;
          top: 0;
          left: 0;
        }
      `}</style>

      <section>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            background: "gray",
            width: `${scrollPercentage}%`,
          }}
        >
          {scrollPercentage}%
        </div>
        {scrollPercentage === 20 && <h1>{toCamel(name)}</h1>}
        <p>{description}</p>
        {repositoryExists && (
          <p>
            <a href={repositoryUrl}>{repositoryUrlDisplay}</a>
          </p>
        )}
        <h2>How to use</h2>
        <p>Install</p>
        <pre>
          <code>{`npm i use-page-progress`}</code>
        </pre>
        <h2>Examples</h2>
        <h3>Get the percentage and create a progress bar</h3>
        <pre>
          <code>
            {`
import React from 'react'
import {usePageProgress} from 'use-page-progress';

export default function Page() {
  const {scrollPercentage} = usePageProgress()
  return (
    <div>
    <div style={{position: 'fixed', top: 0, left: 0, width: '${scrollPercentage}%'}}></div>
    // Page content
    </div>
  )
              
}`}
          </code>
        </pre>
        <p>
          <strong>Output:</strong>
        </p>
        <p></p>
        {scrollPercentage >= 20 && <h1>{toCamel(name)}</h1>}
      </section>

      <footer>
        <p>
          Made by <a href={authorUrl}>{authorName}</a>
        </p>
      </footer>
    </main>
  );
}
