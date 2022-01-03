import * as React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import Link from 'next/link';

class MyDocument extends Document {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/public/favicon.ico" />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  function setTheme(newTheme) {
                    window.__theme = newTheme;
                    if (newTheme === 'dark') {
                      document.documentElement.classList.remove('light');
                      document.documentElement.classList.add('dark');
                    } else if (newTheme === 'light') {
                      document.documentElement.classList.remove('dark');
                      document.documentElement.classList.add('light');
                    }
                  }
                  var preferredTheme;
                  try {
                    preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }
                  window.__setPreferredTheme = function(newTheme) {
                    preferredTheme = newTheme;
                    setTheme(newTheme);
                    try {
                      localStorage.setItem('theme', newTheme);
                    } catch (err) { }
                  };
                  var initialTheme = preferredTheme;
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  if (!initialTheme) {
                    initialTheme = darkQuery.matches ? 'dark' : 'light';
                  }
                  setTheme(initialTheme);
                  darkQuery.addEventListener('change', function (e) {
                    if (!preferredTheme) {
                      setTheme(e.matches ? 'dark' : 'light');
                    }
                  });
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"/>
          <script src="https://cdn.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js"/>
          <div id='foot'>
            <div className="foot-beian">
              <p>©2022 &nbsp; 初一</p>
              <Link href='https://beian.miit.gov.cn/' >
                <a target='_blank'>浙ICP备 20023921号-2</a>
              </Link>
            </div>
            <div className="container" id="jsi-flying-fish-container" />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;